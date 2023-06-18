/*
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=8, M=6이고 수열이 다음과 같다면
12131112
합이 6이 되는 연속부분수열은 {2, 1, 3}, {1, 3, 1, 1}, {3, 1, 1, 1}로 총 3가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.

▣ 입력예제 1
6
12131112
▣ 출력예제 1
3
*/

/*나의 답변*/
function solution(n, arr) {
  let count = 0;

  for (let i=0; i<arr.length; i++) {
    let sum = arr[i];
    for (let j = 1; sum < n && i + j < arr.length; j++) {
      sum += arr[i + j];
      if (sum === n) {
        count++;
      }
    }
  }

  return count;
}

// solution(6, [1,2,1,3,1,1,1,2]);

/* 수업 - 투포인터 알고리즘 사용해보라고 들은 후 답변 보지 않고 다시 풀어봄 */
function solution2(n, arr) {
  let count = 0;
  let p1 = 0;

  while (p1 < arr.length) {
    let sum = arr[p1];
    let p2 = p1 + 1;

    while (sum < n && p2 < arr.length) {
      sum += arr[p2];
      sum === n ? count++ : p2++;
      if (p2 === arr.length && sum < n) p1 = arr.length;
    }
    p1++;
  }

  return count;
}

solution2(6, [1, 2, 1, 3, 1, 1, 1, 2]);

/* 수업 - 수업에서 구현한 코드 */

// 내가 투포인터를 이용한 코드와 달리 sum과 포인터를 중간 중간 초기화하지 않고 쭉 가져가면서 계산함
function solution3(n, arr) {
  let count = 0;
  let lt = 0;
  let sum = 0;

  for (let rt = 0; rt < arr.length; rt++) {
    sum += arr[rt];
    if (sum === n) count++;
    // console.log(`rt:${rt}, lt:${lt}, sum:${sum}, count:${count}, arr: ${arr.slice(lt,rt+1)}`);

    while (sum >= n) { //만약 sum이 n보다 작은 경우 while문이 실행되지 않음
      sum -= arr[lt++];
      if (sum === n) count++;
      // console.log(`rt:${rt}, lt:${lt}, sum:${sum}, count:${count}, arr: ${arr.slice(lt,rt+1)}, while 내부`);
    }
  }
  return count;
}

solution3(6, [1, 2, 1, 3, 1, 1, 1, 2]);

