/*
네오와 프로도가 숫자놀이를 하고 있습니다.
네오가 프로도에게 숫자를 건넬 때 일부 자릿수를 영단어로 바꾼 카드를 건네주면 프로도는 원래 숫자를 찾는 게임입니다.

다음은 숫자의 일부 자릿수를 영단어로 바꾸는 예시입니다.

1478 → "one4seveneight"
234567 → "23four5six7"
10203 → "1zerotwozero3"
이렇게 숫자의 일부 자릿수가 영단어로 바뀌어졌거나,
혹은 바뀌지 않고 그대로인 문자열 s가 매개변수로 주어집니다.
s가 의미하는 원래 숫자를 return 하도록 solution 함수를 완성해주세요.

제한시간 안내
정확성 테스트 : 10초
*/

const solution = (text) => {
  const arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
  let result = text;
  let i = 0;

  while(i < arr.length) {
    result = result.replaceAll(arr[i], [i]);
    i++;
  }
  return +result;
}

/*
이렇게 split로 처리하는 방법도 깔끔하다
for(let i=0; i< numbers.length; i++) {
    let arr = answer.split(numbers[i]);
    answer = arr.join(i);
}
*/
