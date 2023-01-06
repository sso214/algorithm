/**
 * 문제 설명
 * 정수 n을 입력받아 n의 약수를 모두 더한 값을 리턴하는 함수, solution을 완성해주세요.
 *
 * 제한 사항
 * n은 0 이상 3000이하인 정수입니다.
 */

function solution(n) {
  let answer = 0;
  let denom = 1;

  while (denom <= n) {
    if (n % denom == 0) answer += denom;
    denom += 1;
  }

  return answer;
}
/*
정수 배열 만들기
1. Array(n).fill().map(_,i => i + 1);
2. [...Array(n)].map(_,i => i + 1);
3. Array.from({length: n}, (_,i) => i + 1);
*/
