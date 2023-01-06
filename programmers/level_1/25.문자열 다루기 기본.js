/*
문제 설명
문자열 s의 길이가 4 혹은 6이고, 숫자로만 구성돼있는지 확인해주는 함수, solution을 완성하세요. 예를 들어 s가 "a234"이면 False를 리턴하고 "1234"라면 True를 리턴하면 됩니다.

제한 사항
s는 길이 1 이상, 길이 8 이하인 문자열입니다.
s는 영문 알파벳 대소문자 또는 0부터 9까지 숫자로 이루어져 있습니다.
*/

const solution = (s) => {
  const test1 = /^\d{4}$/.test(s);
  const test2 = /^\d{6}$/.test(s);
  return test1 || test2 ? true : false;
};
/*
!isNaN(s), !!Number(s)를 모두 다 사용해봤는데 실행에선 통과하지만 채점을 통과하지 못함.
아스키코드와 지수형식 때문에 테스트케이스에서 막힘
이런 경우 정규식을 사용하는게 깔끔

숫자 자릿수를 제한하는 방법이 헷갈려서 저렇게 적었는데
/^\d{4}$|^\d{6}$/; 이렇게 처리하면 됨
*/

