/*
소수 찾기
 네트워크 연결 끊김
문제 설명
1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, solution을 만들어 보세요.

소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
(1은 소수가 아닙니다.)

제한 조건
n은 2이상 1000000이하의 자연수입니다.

입출력 예
n	result
10	4
5	3
*/

const solution = (n) => {
    const arr = Array.from({ length: n + 1 }).fill(true);
    const sqrt = parseInt(Math.sqrt(n));
    arr[0] = arr[1] = false;


    for (let i = 2; i <= sqrt; i++) {
        if (arr[i] === true) {
            for (let j = 2; i * j <= n; j++) {
                arr[i * j] = false;
            }
        }
    }

    return arr.filter((v) => v === true).length;
}
/*
소수 구하는 방법을 검색했는데 에라토스테네스의 체가
소수 찾는 방법 중 가장 효율적인 방식이라고 함

2부터 쭉 순회를 하면서 해당 수의 배수를 모두 지우는 방식.
주어진 수의 제곱근까지만 확인하면 됨
*/
