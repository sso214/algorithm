/*
S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요.
아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.

▣ 입력설명
첫 줄에 첫 번째 S문자열이 입력되고, 두 번째 줄에 T문자열이 입력됩니다.
S문자열의 길이는 10,000을 넘지 않으며, T문자열은 S문자열보다 길이가 작거나 같습니다.

▣ 출력설명
S단어에 T문자열과 아나그램이 되는 부분문자열의 개수를 출력합니다.

▣ 입력예제 1
bacaAacba
abc
▣ 출력예제 1
3

출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
*/

/*나의 답변*/
function solution(s,t) {
  let count = 0;

  for (let i=0; i<s.length-t.length+1; i++) {
    const target = s.substring(i, i+3);
    const pattern = new RegExp(`^${[...t].map((v) => `(?=.*${v})`).join('')}[${t}]{${t.length}}$`);
    /* const pattern = /^(?=.*a)(?=.*b)(?=.*c)[abc]{3}$/ */

    if (pattern.test(target)) count++;
    return count;
  }
}

solution('bacaAacba', 'abc');

/*수업 풀이 방식*/
function compareMaps(map1, map2) {
  if (map1.size !== map2.size) return false;
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }
  return true;
}

function solution2(s, t) {
  let answer = 0;
  let tH = new Map();
  let sH = new Map();

  for (let x of t) {
    if (tH.has(x)) tH.set(x, tH.get(x) + 1);
    else tH.set(x, 1);
  }

  let len = t.length - 1;
  for (let i = 0; i < len; i++) {
    if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
    else sH.set(s[i], 1);
  }

  let lt = 0;
  for (let rt = len; rt < s.length; rt++) {
    if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
    else sH.set(s[rt], 1);
    if (compareMaps(sH, tH)) answer++;
    sH.set(s[lt], sH.get(s[lt]) - 1);
    if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
    lt++;
  }
  return answer;
}

solution2('bacaAacba', 'abc');
