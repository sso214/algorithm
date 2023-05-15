/*
소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

▣ 입력설명
첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.

▣ 출력설명
첫 줄에 가운데 문자를 출력합니다.

▣ 입력예제 1
study

▣ 출력예제 1
u

▣ 입력예제 2
good

▣ 출력예제 2
oo
*/

/*내 답변*/
function solution1(text) {
    const index = text.length / 2;
    if (Number.isInteger(index)) {
        return text.slice(index - 1, index + 1);
    }
    return text.slice(Math.round(index) - 1, Math.round(index));
}

function solution2(text) {
    let result = '';
    let mid = Math.floor(text.length / 2);

    if (s.length % 2 === 1) {
        result = text.substring(mid, mid + 1);
    } else {
        result = text.substring(mid - 1, mid + 1);
    }
    return result;
}

solution1('study');
solution1('good');
solution2('study');
solution2('good');
