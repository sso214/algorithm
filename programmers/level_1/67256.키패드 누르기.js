/*
문제 설명
스마트폰 전화 키패드의 각 칸에 다음과 같이 숫자들이 적혀 있습니다.
[[1,2,3],[4,5,6],[7,8,9],['*',0,'#']]
이 전화 키패드에서 왼손과 오른손의 엄지손가락만을 이용해서 숫자만을 입력하려고 합니다.
맨 처음 왼손 엄지손가락은 * 키패드에 오른손 엄지손가락은 # 키패드 위치에서 시작하며, 엄지손가락을 사용하는 규칙은 다음과 같습니다.

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며 키패드 이동 한 칸은 거리로 1에 해당합니다.
왼쪽 열의 3개의 숫자 1, 4, 7을 입력할 때는 왼손 엄지손가락을 사용합니다.
오른쪽 열의 3개의 숫자 3, 6, 9를 입력할 때는 오른손 엄지손가락을 사용합니다.
가운데 열의 4개의 숫자 2, 5, 8, 0을 입력할 때는 두 엄지손가락의 현재 키패드의 위치에서 더 가까운 엄지손가락을 사용합니다.
4-1. 만약 두 엄지손가락의 거리가 같다면, 오른손잡이는 오른손 엄지손가락, 왼손잡이는 왼손 엄지손가락을 사용합니다.
순서대로 누를 번호가 담긴 배열 numbers, 왼손잡이인지 오른손잡이인 지를 나타내는 문자열 hand가 매개변수로 주어질 때,
각 번호를 누른 엄지손가락이 왼손인 지 오른손인 지를 나타내는 연속된 문자열 형태로 return 하도록 solution 함수를 완성해주세요.

[제한사항]
numbers 배열의 크기는 1 이상 1,000 이하입니다.
numbers 배열 원소의 값은 0 이상 9 이하인 정수입니다.
hand는 "left" 또는 "right" 입니다.
"left"는 왼손잡이, "right"는 오른손잡이를 의미합니다.
왼손 엄지손가락을 사용한 경우는 L, 오른손 엄지손가락을 사용한 경우는 R을 순서대로 이어붙여 문자열 형태로 return 해주세요.

입출력 예
numbers	hand	result
[1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]	"right"	"LRLLLRLLRRL"
[7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]	"left"	"LRLLRRLLLRR"
[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]	"right"	"LLRLLRLLRL"

입출력 예에 대한 설명
입출력 예 #1
순서대로 눌러야 할 번호가 [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5]이고, 오른손잡이입니다.
왼손 위치	오른손 위치	눌러야 할 숫자	사용한 손	설명
*	#	1	L	1은 왼손으로 누릅니다.
1	#	3	R	3은 오른손으로 누릅니다.
1	3	4	L	4는 왼손으로 누릅니다.
4	3	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
5	3	8	L	왼손 거리는 1, 오른손 거리는 3이므로 왼손으로 8을 누릅니다.
8	3	2	R	왼손 거리는 2, 오른손 거리는 1이므로 오른손으로 2를 누릅니다.
8	2	1	L	1은 왼손으로 누릅니다.
1	2	4	L	4는 왼손으로 누릅니다.
4	2	5	R	왼손 거리와 오른손 거리가 1로 같으므로, 오른손으로 5를 누릅니다.
4	5	9	R	9는 오른손으로 누릅니다.
4	9	5	L	왼손 거리는 1, 오른손 거리는 2이므로 왼손으로 5를 누릅니다.
5	9	-	-
따라서 "LRLLLRLLRRL"를 return 합니다.

입출력 예 #2
왼손잡이가 [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2]를 순서대로 누르면 사용한 손은 "LRLLRRLLLRR"이 됩니다.

입출력 예 #3
오른손잡이가 [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]를 순서대로 누르면 사용한 손은 "LLRLLRLLRL"이 됩니다.
*/

/*내 답변*/
function getManhattanDistance(a, b) {
    return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

function getPointMap(arr) {
    const map = new Map();
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            map.set(arr[i][j], [i, j]);
        }
    }
    return map;
}

function solution(numbers, hand) {
    const map = getPointMap([[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']]);
    const hand_point = [map.get('*'), map.get('#')];
    const arr = [];

    numbers.forEach((v, i) => {
        if ([1, 4, 7].includes(v)) {
            arr.push('L');
            hand_point[0] = map.get(v);
            return;
        }

        if ([3, 6, 9].includes(v)) {
            arr.push('R');
            hand_point[1] = map.get(v);
            return;
        }

        const l_step = getManhattanDistance(hand_point[0], map.get(v));
        const r_step = getManhattanDistance(hand_point[1], map.get(v));

        if (l_step < r_step || (l_step === r_step && hand === 'left')) {
            arr.push('L');
            hand_point[0] = map.get(v);
            return;
        }

        arr.push('R');
        hand_point[1] = map.get(v);
    });

    return arr.join('');
}
/*
이 문제를 풀 때 현재 손 위치와 주어진 값의 위치의 거리를 어떻게 구해야할지
공식을 모르겠어서 질문하기의 힘을 빌렸다.

기초적인 좌표간의 거리를 구하는 방식으로는 보통 "맨하튼 거리 공식"을 사용하는데,
시작 좌표를 (x1,y1), 도착 좌표를 (x2,y2)라고 할 떄, |x1 - x2| + |y1 + y2| 이다! 엄청 심플!
즉, 멘해튼 거리 공식 = x값의 차와 y값의 차를 각각 절대값으로 변경한 뒤 합한 값.
위의 개념을 알고서야 문제를 풀 수 있었다.
다음에 이런 좌표를 사용하는 문제가 나오면 써먹어야지!

chatGPT에게 물어보니 아래 답변들과 내 답변 중 내 답변이
모든 경우에 대한 최단 거리를 매번 계산하고 있지 않고, Map 객체를 사용하기 때문에
더 성능이 좋다고 했다!! chatGTP한테 칭찬받은거 처음이야!
*/

/* 다른 사람들의 답변 */
function solution2(numbers, hand) {
    hand = hand[0] === "r" ? "R" : "L"
    let position = [1, 4, 4, 4, 3, 3, 3, 2, 2, 2]
    let h = { L: [1, 1], R: [1, 1] }
    return numbers.map(x => {
        if (/[147]/.test(x)) {
            h.L = [position[x], 1]
            return "L"
        }
        if (/[369]/.test(x)) {
            h.R = [position[x], 1]
            return "R"
        }
        let distL = Math.abs(position[x] - h.L[0]) + h.L[1]
        let distR = Math.abs(position[x] - h.R[0]) + h.R[1]
        if (distL === distR) {
            h[hand] = [position[x], 0]
            return hand
        }
        if (distL < distR) {
            h.L = [position[x], 0]
            return "L"
        }
        h.R = [position[x], 0]
        return "R"
    }).join("")
}

const solution3 = (numbers, hand) => {
    const answer = [];
    let leftHandPosition = '*';
    let rightHandPosition = '#';

    numbers.forEach(number => {
        if (number === 1 || number === 4 || number === 7) {
            answer.push('L');
            leftHandPosition = number;
            return;
        }

        if (number === 3 || number === 6 || number === 9) {
            answer.push('R');
            rightHandPosition = number;
            return;
        }

        const leftHandDistance = getDistance(leftHandPosition, number);
        const rightHandDistance = getDistance(rightHandPosition, number);

        if (leftHandDistance === rightHandDistance) {
            if (hand === "right") {
                answer.push('R');
                rightHandPosition = number;
                return;
            }

            if (hand === 'left') {
                answer.push('L');
                leftHandPosition = number;
                return;
            }
        }

        if (leftHandDistance > rightHandDistance) {
            answer.push('R');
            rightHandPosition = number;
        }

        if (leftHandDistance < rightHandDistance) {
            answer.push('L');
            leftHandPosition = number;
        }
    });

    return answer.join("");
};
const getDistance = (locatedNumber, target) => {
    const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        '*': [3, 0], 0: [3, 1], '#': [3, 2],
    }

    const nowPosition = keyPad[locatedNumber];
    const targetPosition = keyPad[target];

    return Math.abs(targetPosition[0] - nowPosition[0]) + Math.abs(targetPosition[1] - nowPosition[1]);
};

function solution4(numbers, hand) {
    let answer = '';
    // imagine a grid, and assign each number coordinates
    // by taking 5 being 0,0.
    // If needed, this can also be done programmatically.
    const grid = [[0,-2], [-1,1], [0,1], [1,1], [-1,0], [0,0], [1,0], [-1,-1], [0,-1], [1,-1], [-1,-2], [1,-2]];
    let L = 10; // 10th element of the grid are * and # of the keypad
    let R = 11; // 11th
    let L_steps, R_steps;
    hand = hand[0].toUpperCase();
    numbers.forEach(el => {
        switch (grid[el][0]){
            case -1:
                answer += "L";
                L = el;
                break;
            case 1:
                answer += "R";
                R = el;
                break;
            case 0:
                L_steps = Math.abs(grid[L][0] - grid[el][0]) + Math.abs(grid[L][1] - grid[el][1]);
                R_steps = Math.abs(grid[R][0] - grid[el][0]) + Math.abs(grid[R][1] - grid[el][1]);
                if(L_steps > R_steps){
                    answer += "R";
                    R = el;
                } else if (L_steps < R_steps){
                    answer += "L";
                    L = el;
                } else {
                    answer += hand;
                    eval(`${hand} = el`); //may affect performance?
                }
        }
    });
    return answer;
}
