/*
문제 설명
String형 배열 seoul의 element중 "Kim"의 위치 x를 찾아, "김서방은 x에 있다"는 String을 반환하는 함수, solution을 완성하세요.
seoul에 "Kim"은 오직 한 번만 나타나며 잘못된 값이 입력되는 경우는 없습니다.

제한 사항
seoul은 길이 1 이상, 1000 이하인 배열입니다.
seoul의 원소는 길이 1 이상, 20 이하인 문자열입니다.
"Kim"은 반드시 seoul 안에 포함되어 있습니다.
*/

function solution(seoul) {
  const index = seoul.findIndex((v) => v === "Kim");
  return `김서방은 ${index}에 있다`;
}

/*
indexOf : 인자로 요소를 받아 만족하는 첫 번째 식별자를 반환
findIndex: 인자로 받은 판별 함수를 만족하는 첫 번째 식별자를 반환
여기서는 indexOf를 사용하는게 조금 더 깔끔
*/
