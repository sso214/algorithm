/*
문제 설명
두 정수 left와 right가 매개변수로 주어집니다. left부터 right까지의 모든 수들 중에서,
약수의 개수가 짝수인 수는 더하고, 약수의 개수가 홀수인 수는 뺀 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
1 ≤ left ≤ right ≤ 1,000
*/

function getNum(num) {
  const arr = [...Array(num)].map((_, i) => i + 1);
  const divisorLength = arr.filter((v) => num % v === 0).length;
  return (divisorLength % 2 === 0 ? 1 : -1) * num;
}

function solution(left, right) {
  let arr = [];
  for (let i = left; i < right + 1; i++) {
    arr.push(getNum(i));
  }
  return arr.reduce((acc, cur) => acc + cur, 0);
}
/*
1.
var answer = 0;
for (let i = left; i <= right; i++) {
  if (Number.isInteger(Math.sqrt(i))) {
    answer -= i;
  } else {
    answer += i;
  }
}
return answer;
Math.sqrt 사용해 제곱근 구한 후 해당 제곱근으로 -=, -+ 분기처리하는게 깔끔
Math.ceil(Math.sqrt(left)) 이렇게 사용해도 됨
*/
