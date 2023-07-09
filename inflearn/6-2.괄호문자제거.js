/*
입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
남은 문자만 출력한다.

▣ 입력예제 1
(A(BC)D)EF(G(H)(IJ)K)LM(N)
▣ 출력예제 1
EFLM
*/

/*내 답변*/
function solution(s) {
  let bracket = 0;
  let result = '';

  for (let v of [...s]) {
    if (v === '(') bracket++;
    if (v === ')') bracket--;
    if (/^\w$/.test(v) && bracket === 0) result += v;
  }
  return result;
}

solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)');


/*수업 풀이 방식*/
function solution2(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (x === ')') {
      while (stack.pop() !== '(') ;
    } else stack.push(x);
  }
  answer = stack.join('');
  return answer;
}

console.log(solution2("(A(BC)D)EF(G(H)(IJ)K)LM(N)"));
