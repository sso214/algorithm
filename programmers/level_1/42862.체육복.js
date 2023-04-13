/*
문제 설명
점심시간에 도둑이 들어, 일부 학생이 체육복을 도난당했습니다. 다행히 여벌 체육복이 있는 학생이 이들에게 체육복을 빌려주려 합니다.
학생들의 번호는 체격 순으로 매겨져 있어, 바로 앞번호의 학생이나 바로 뒷번호의 학생에게만 체육복을 빌려줄 수 있습니다.
예를 들어, 4번 학생은 3번 학생이나 5번 학생에게만 체육복을 빌려줄 수 있습니다.
체육복이 없으면 수업을 들을 수 없기 때문에 체육복을 적절히 빌려 최대한 많은 학생이 체육수업을 들어야 합니다.

전체 학생의 수 n, 체육복을 도난당한 학생들의 번호가 담긴 배열 lost, 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열 reserve가 매개변수로 주어질 때,
체육수업을 들을 수 있는 학생의 최댓값을 return 하도록 solution 함수를 작성해주세요.

제한사항
전체 학생의 수는 2명 이상 30명 이하입니다.
체육복을 도난당한 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌의 체육복을 가져온 학생의 수는 1명 이상 n명 이하이고 중복되는 번호는 없습니다.
여벌 체육복이 있는 학생만 다른 학생에게 체육복을 빌려줄 수 있습니다.
여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다. 이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.

입출력 예
n	lost	reserve	return
5	[2, 4]	[1, 3, 5]	5
5	[2, 4]	[3]	4
3	[3]	[1]	2

입출력 예 설명
예제 #1
1번 학생이 2번 학생에게 체육복을 빌려주고, 3번 학생이나 5번 학생이 4번 학생에게 체육복을 빌려주면 학생 5명이 체육수업을 들을 수 있습니다.

예제 #2
3번 학생이 2번 학생이나 4번 학생에게 체육복을 빌려주면 학생 4명이 체육수업을 들을 수 있습니다.
*/

/*내 답변*/
function solution1(n, lost, reserve) {
  /*
  * 바로 앞 번호의 학생이나 바로 뒷 번호 학생에게만 체육복 빌려줄 수 있음
  * 체육복을 적절히 빌려 최대한 많은 학생이 체육 수업을 들어야 함
  *
  * n : 전체 학생의 수
  * lost : 체육복을 도난당한 학생들의 번호가 담긴 배열
  * reserve : 여벌의 체육복을 가져온 학생들의 번호가 담긴 배열
  * result : 체육 수업을 들을 수 있는 학생의 최대값
  *
  * 전체 학생의 수는 2 <= n <= 30
  * 여벌 체육복을 가져온 학생이 체육복을 도난 당했을 경우 체육복을 빌려줄 수 없음
  */
  const self = lost.filter(v => reserve.includes(v));
  const lost_n = lost.filter(v => !self.includes(v)).sort((a,b) => a-b);
  const reserve_n = reserve.filter(v => !self.includes(v)).sort((a,b) => a-b);

  let result = n - lost.length + self.length;

  for(let i=0; i<lost_n.length; i++) {
    const arr = [lost_n[i]-1, lost_n[i], lost_n[i]+1];

    for (let j=0; j<reserve_n.length; j++) {
      if(arr.includes(reserve_n[j])) {
        result++;
        reserve_n.splice(j,1);
      }
    }
  }
  return result;
}

solution(5,	[2, 4],	[1, 3, 5]); //5
solution(5,	[2, 4],	[3]); //4
solution(3,	[3],	[1]); //2
solution(8, [1,2,3], [2,3,4]); //7
solution(8, [4,2], [1,3,5]);

/*
와 ㅠㅠ 이 문제도 고생했다.

1.
문제 제한 사항에 lost와 reserve 배열이 정렬되어있다고 나와있지 않았는데 그걸 간과하고
정렬한 배열을 구상해서 코드를 작성해서 테스트 케이스 실패함
=> 문제의 제한 사항에 없는 사항을 임의로 결정하지 않기

2.
여유 체육복을 가져온 학생이 체육복을 도난당한 경우 이 학생은 다른 학생에게 체육복을 빌려줄 수 없음.
이 사항을 잘못 이해해서 여유 체육복을 가져온 학생이 체육복을 도난당한 경우도 상대방에게 빌려주는 경우의 수로 계산을 했다.
=> 오해의 여지가 없도록 문제 제대로 이해하기
*/

/* 다른 답변 */
function solution2(n, lost, reserve) {
  return n - lost.filter(a => {
    const b = reserve.find(r => Math.abs(r-a) <= 1)
    if(!b) return true
    reserve = reserve.filter(r => r !== b)
  }).length
}

/* 다른 답변 */
function solution3(n, lost, reserve) {
  const students = {};
  let answer = 0;
  for(let i = 1; i <= n; i++){
    students[i] = 1;
  }
  lost.forEach(number => students[number] -= 1);
  reserve.forEach(number => students[number] += 1);

  for(let i = 1; i <= n; i++){
    if(students[i] === 2 && students[i-1] === 0){
      students[i-1]++;
      students[i]--;
    } else if(students[i] === 2 && students[i+1] === 0){
      students[i+1]++;
      students[i]--;
    }
  }
  for(let key in students){
    if(students[key] >= 1){
      answer++;
    }
  }
  return answer;
  //더 직관적이고 가독성도 좋고 메모리 사용량도 적다
}




















