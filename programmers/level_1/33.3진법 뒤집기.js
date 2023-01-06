/*
문제 설명
자연수 n이 매개변수로 주어집니다. n을 3진법 상에서 앞뒤로 뒤집은 후, 이를 다시 10진법으로 표현한 수를 return 하도록 solution 함수를 완성해주세요.

제한사항
n은 1 이상 100,000,000 이하인 자연수입니다.

입출력 예
n	result
45	7
125	229
*/

const solution = (n) => parseInt(n.toString(3).split('').reverse().join(''),3);
/*
toString(num) : 문자열을 반환. 매개변수를 넣으면 10진수를 다른 진수로 변환 가능함
parseInt(string, radix) : 문자열을 정수로 바꿈. string을 radix 진법일 때의 값으로 바꿈
*/
