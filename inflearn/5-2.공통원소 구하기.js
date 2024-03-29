/*
A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다. 두 번째 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
세 번째 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다. 네 번째 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
각 집합의 원소는 1,000,000,000이하의 자연수입니다.

▣ 출력설명
두 집합의 공통원소를 오름차순 정렬하여 출력합니다.

▣ 입력예제 1
13952
32578

▣ 출력예제 1
235
*/

/*나의 답변*/
function solution(arr1, arr2) {
  const arr = arr1.concat(arr2).sort((a,b)=>a-b);
  const map = new Map();
  let answer = [];

  for (let v of arr) {
    map.set(v, map.has(v) ? map.get(v) + 1 : 1);
  }

  [...map].forEach(([key, value]) => {
    if (value > 1) answer.push(key);
  });

  return answer;
}

// solution([1,3,9,5,2], [3,2,5,7,8]);

/* 수업 - 투포인터 알고리즘 사용 */

// 먼저 각 배열을 정렬 -> 투포인터 사용 = O(n+m)
function solution2(arr1, arr2) {
  let p1 = 0;
  let p2 = 0;
  let list = [];

  arr1.sort((a, b) => a - b); //sort 함수는 정렬 기준을 넘기지 않으면 사전순으로 정렬됨 (즉, 두자리 숫자는 문자열처럼 정렬됨)
  arr2.sort((a, b) => a - b);

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] === arr2[p2]) {
      list.push(arr1[p1++]);
      p2++;
    } else {
      arr1[p1] < arr2[p2] ? p1++ : p2++;
    }
  }

  return list;
}

console.log(solution2([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]));
