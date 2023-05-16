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
  let result = '';
  const arr = s.split(t);
  console.log(arr);

  for(let i=0; i<arr.length; i++) {
    if (i !== 0) result += '0';
    if (arr[i].length === 1) {
      result += '1';
      break;
    }

//1221
//12321

    for (let j=0; j<arr[i].length; j++) {


      if (j < Math.floor(arr[i].length / 2)) {
        result += `${j+1}`;
      } else {
        result += `?`;
      }
    }

    // const v = Array.from({length:arr.length / 2}, (_,i) => i);
    // result += v.join('');
    // result += v.reverse().join('');

    // for(let j=0; j<arr[i].length; j++) {
    //   if (arr[i].length % 2 >= j) {
    //     result += `${j+1}`;
    //   } else {
    //     result += `?`;
    //   }
    // }
  }

  console.log(result);
  // s.split(t).forEach(v => {
  //   result+=
  // });
  // console.log(s.split(t));


  // console.log(s.split(t, ','));
  // s.split(t, ',');
  // console.log(s);


  // for (let v of s) {
  //   console.log(v);
  // }
}

console.log(solution('teachermode', 'e'));
// console.log(solution('eteachermode', 'e'));
