/*
N개의 수로 이루어진 수열이 주어집니다.
이 수열에서 연속부분수열의 합이 특정숫자 M 이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
만약 N=5, M=5이고 수열이 다음과 같다면
13123
합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.

▣ 입력설명
첫째 줄에 N(1≤N≤100,000), M(1≤M≤100,000,000)이 주어진다. 수열의 원소값은 1,000을 넘지 않는 자연수이다.

▣ 출력설명
첫째 줄에 경우의 수를 출력한다.

▣ 입력예제 1
5
13123

▣ 출력예제 1
10
*/

/*나의 답변*/
function solution(n, arr) {
    let count = 0;
    let sum;

    for (let i = 0; i < arr.length; i++) {
        sum = 0;
        console.log(`${arr[i]}-------`);

        for (let j = 0; sum < 5 && i + j < arr.length; j++) {
            sum += arr[i + j];
            if (sum <= 5) count++;
            console.log(arr[i], i + j, arr[i + j], sum);
        }

        console.log(`count = ${count}`);
    }
}
solution(5, [1,3,1,2,3]);
