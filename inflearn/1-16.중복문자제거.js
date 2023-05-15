/*
소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

▣ 입력설명
첫 줄에 문자열이 입력됩니다.

▣ 출력설명
첫 줄에 중복문자가 제거된 문자열을 출력합니다.

▣ 입력예제 1
ksekkset

▣ 출력예제 1
kset
*/

/* 내 답변 */
const solution1 = (text) => [...new Set(text)].join('');
solution1('ksekkset');

const solution2 = (text) => {
    let result = '';

    for (let i = 0; i < text.length; i++) {
        if (i === text.indexOf(text[i])) {
            result += text[i];
        }
    }
    return result;
}
solution2('ksekkset');

const solution3 = (text) => {
    let result = '';
    let pos = text.indexOf('k');
}
