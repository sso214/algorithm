/*
N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

▣ 입력설명
첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다. 각 자연수의 크기는 10,000,000를 넘지 않는다.

▣ 출력설명
자릿수의 합이 최대인 자연수를 출력한다.

▣ 입력예제 1
128 460 603 40 521 137 123
▣ 출력예제 1
137
*/

/*내 답변*/
function solution(arr) {
  let max = [0,0];
  for (const v of arr) {
    const sum = [...`${v}`].reduce((acc, cur) => acc + (+cur), 0);
    if (sum === max[1]) max[0] = Math.max(v, max[0]);
    if (sum > max[1]) max[1] = sum;
  }

  return max[0];
}

solution([128, 460, 603, 40, 521, 137, 123]);

/*강의*/
function solution2(arr) {
  let res, max = 0;

  for (let v of arr) {
    let tmp = v;
    let sum = 0;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }

    if (sum > max) {
      max = sum;
      res = v;
    } else if (sum === max) {
      if (v > res) res = v;
    }
  }
  return res;
}

solution2([128, 460, 603, 40, 521, 137, 123]);
