/*
문제 설명
수많은 마라톤 선수들이 마라톤에 참여하였습니다.
단 한 명의 선수를 제외하고는 모든 선수가 마라톤을 완주하였습니다.
마라톤에 참여한 선수들의 이름이 담긴 배열 participant와
완주한 선수들의 이름이 담긴 배열 completion이 주어질 때,
완주하지 못한 선수의 이름을 return 하도록 solution 함수를 작성해주세요.

제한사항
마라톤 경기에 참여한 선수의 수는 1명 이상 100,000명 이하입니다.
completion의 길이는 participant의 길이보다 1 작습니다.
참가자의 이름은 1개 이상 20개 이하의 알파벳 소문자로 이루어져 있습니다.
참가자 중에는 동명이인이 있을 수 있습니다.

입출력 예
participant	completion	return
["leo", "kiki", "eden"]	["eden", "kiki"]	"leo"
["marina", "josipa", "nikola", "vinko", "filipa"]	["josipa", "filipa", "marina", "nikola"]	"vinko"
["mislav", "stanko", "mislav", "ana"]	["stanko", "ana", "mislav"]	"mislav"

입출력 예 설명
예제 #1
"leo"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #2
"vinko"는 참여자 명단에는 있지만, 완주자 명단에는 없기 때문에 완주하지 못했습니다.

예제 #3
"mislav"는 참여자 명단에는 두 명이 있지만, 완주자 명단에는 한 명밖에 없기 때문에 한명은 완주하지 못했습니다.
*/

/* 내가 적은 답 */
/*
어떻게 풀까 하다가 sort로 정렬해 비교하는 방식을 선택했다.
하지만 hash를 사용하지 않음 ㅠㅠ
또 배열이 길어지면 성능이 좋지 않다.

처음엔 효율성 검사를 통과하지 못했는데
arr[i]를 따로 저장하는 변수를 제거하고 바로 return 하니까 효율성 검사를 통과했다.
다른 사람 답변 보니까 participant 배열에 for in 문을 사용해서 index를 받아와 비교하는 방법도 있었다.
*/
const solution1 = (participant, completion) => {
    const arr1 = participant.sort();
    const arr2 = completion.sort();

    let i = 0;
    while(i < arr1.length) {
        if (arr1[i] !== arr2[i]) {
            return arr1[i];
        }
        i++;
    }
}


/*
아래도 다른 사람이 구현한 답변인데
긴 배열일 경우 해당 케이스가 더 성능이 좋을 것 같아 가져왔다
*/
function solution2(participant, completion) {
    const map = new Map();

    for(let i = 0; i < participant.length; i++) {
        let a = participant[i],
            b = completion[i];

        map.set(a, (map.get(a) || 0) + 1);
        map.set(b, (map.get(b) || 0) - 1);
    }

    for(let [k, v] of map) {
        if(v > 0) return k;
    }

    return 'nothing';
}
solution2(["leo", "kiki", "eden"],["eden", "kiki"]);
