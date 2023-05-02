/*
문제 설명
문자열 s가 입력되었을 때 다음 규칙을 따라서 이 문자열을 여러 문자열로 분해하려고 합니다.

먼저 첫 글자를 읽습니다. 이 글자를 x라고 합시다.
이제 이 문자열을 왼쪽에서 오른쪽으로 읽어나가면서, x와 x가 아닌 다른 글자들이 나온 횟수를 각각 셉니다.
처음으로 두 횟수가 같아지는 순간 멈추고, 지금까지 읽은 문자열을 분리합니다.
s에서 분리한 문자열을 빼고 남은 부분에 대해서 이 과정을 반복합니다. 남은 부분이 없다면 종료합니다.
만약 두 횟수가 다른 상태에서 더 이상 읽을 글자가 없다면, 역시 지금까지 읽은 문자열을 분리하고, 종료합니다.
문자열 s가 매개변수로 주어질 때, 위 과정과 같이 문자열들로 분해하고, 분해한 문자열의 개수를 return 하는 함수 solution을 완성하세요.

제한사항
1 ≤ s의 길이 ≤ 10,000
s는 영어 소문자로만 이루어져 있습니다.

입출력 예
s	result
"banana"	3
"abracadabra"	6
"aaabbaccccabba"	3

입출력 예 설명
입출력 예 #1
s="banana"인 경우 ba - na - na와 같이 분해됩니다.

입출력 예 #2
s="abracadabra"인 경우 ab - ra - ca - da - br - a와 같이 분해됩니다.

입출력 예 #3
s="aaabbaccccabba"인 경우 aaabbacc - ccab - ba와 같이 분해됩니다.
*/

/*내 답변*/
function parse(value) {
    let a = 0;
    let b = 0;

    for (const v of value) {
        if (value[0] === v) {
            a++;
        } else {
            b++;
        }

        if (a === b) {
            return value.slice(a + b,)
        }
    }
    return '';
}

function solution1(s) {
    let text = s;
    let count = 0;

    while (text.length > 0) {
        count++;
        text = parse(text);
    }

    return count;
}

/*
parse 함수는 매번 문자열을 새로 생성하고, 반복문을 중첩해 사용하기 떄문에
불필요한 연산이 많이 발생함
*/

/*다른 사람의 답변*/
function solution2(s, count = 0) {
    if (!s) return count
    let [first, ...rest] = s.split("")
    let countSame = 1
    let countInSame = 0
    let i = 0
    for (; i < rest.length; i++) {
        if (rest[i] === first) countSame++
        else countInSame++
        if (countSame === countInSame) break
    }
    return solution2(rest.slice(i + 1).join(""), count + 1)
}

/*
* 재귀함수로 저렇게 구조를 짜는 부분 아주 인상 깊었음
* for 문에서 사용하는 i 변수를 외부에서 사용하는 부분 인상 깊음
*/

function solution3(s) {
    let x = [];
    let dx = [];
    let answer = 0;
    s.split('').forEach(element => {
        !x[0] || x[x.length - 1] === element ? x[x.length] = element : dx[dx.length] = element;
        if (x.length === dx.length) {
            x = [];
            dx = [];
            answer++;
        }
    });
    return (x[0] ? ++answer : answer)
}

function solution4(s) {
    let answer = 0;
    let current;
    let count = 0;

    for (let i = 0; i < s.length; i++) {
        if (count === 0) {
            answer++;
            current = s[i]
            count = 1
        } else {
            if (current !== s[i]) count--;
            else count++;
        }
    }

    return answer;
}
