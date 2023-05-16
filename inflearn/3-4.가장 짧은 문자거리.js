/*
한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다. 문자열의 길이는 100을 넘지 않는다.

▣ 출력설명
첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.

▣ 입력예제 1 teachermode e
▣ 출력예제 1 10121012210
*/

/*내 답변*/
function solution(s, t) {
  let arr = Array.from({length: s.length}).fill(s.length);
  let step = [s.length, s.length];

  for (let i = 0; i < s.length; i++) {
    const endIndex = s.length - 1 - i;

    step[0] = s[i] === t ? 0 : step[0] + 1;
    step[1] = s[endIndex] === t ? 0 : step[1] + 1;

    arr[i] = Math.min(arr[i], step[0]);
    arr[s.length - 1 - i] = Math.min(arr[endIndex], step[1]);
  }

  return arr.join('');
}

solution('teachermode', 'e');
solution('eteachermode', 'e');
solution('eteachermod', 'e');
