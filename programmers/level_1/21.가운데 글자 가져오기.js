/*
문제 설명
단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

재한사항
s는 길이가 1 이상, 100이하인 스트링입니다.
*/

function solution(s) {
  const i = s.length / 2;
  return Number.isInteger(i) ? s[i - 1] + s[i] : s[Math.floor(i)];
}
/*
Math.floor : 주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환
Math.ceil : 반올림해서 항상 주어진 수보다 크거나 같은 수 반환
string.substr(start, length) : start index부터 length 길이만큼 string을 잘라내어 반환하는 함수
*/
