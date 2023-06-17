/*
오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

▣ 입력설명
첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다. 두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
세 번째 줄에 두 번째 배열의 크기 M(1<=M<=100)이 주어집니다. 네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

▣ 출력설명
오름차순으로 정렬된 배열을 출력합니다.

▣ 입력예제 1
135
23679

▣ 출력예제 1
12335679
*/

/*나의 답변*/
const solution = (arr1, ...arr) => arr1.concat(...arr).sort((a, b) => a - b);

solution([1, 3, 5], [2, 3, 6, 7, 9]);
solution([1, 3, 5], [2, 3, 6, 7, 9], [3, 4, 5, 6, 7, 8, 9]);


//수업에서의 답
//sort 함수를 호출 => nlogn
function solution2(arr1, arr2) {
    const arrLength = arr1.length + arr2.length;
    let list = [];
    let p1 = 0;
    let p2 = 0;

    for (let i = 0; i < arrLength; i++) {

        if (arr1[p1] === arr2[p2]) {
            list.push(...[arr1[p1], arr2[p2]]);
            p1++;
            p2++;
            continue;
        }

        if (arr1[p1] < arr2[p2]) {
            list.push(arr1[p1]);
            p1++;
            continue;
        }

        if (arr1[p1] > arr2[p2]) {
            list.push(arr2[p2]);
            p2++;
            continue;
        }

        if (p1 <= arr1.length) {
            list.push(...arr2.slice(p2));
            break;
        }

        if (p2 <= arr2.length) {
            list.push(...arr1.slice(p1));
            break;
        }
    }

    return list;
}

solution2([1, 3, 5], [2, 3, 6, 7, 9]);


function solution3(arr1, arr2) {
    let list = [];
    let n = arr1.length;
    let m = arr2.length;
    let p1 = 0;
    let p2 = 0;

    while (p1 < n && p2 < m) {
        if (arr1[p1] <= arr2[p2]) list.push(arr1[p1++]);
        else list.push(arr2[p2++]);
    }
    while (p1 < n) list.push(arr1[p1++]);
    while (p2 < m) list.push(arr2[p2++]);
    return list;
}

solution3([1, 3, 5], [2, 3, 6, 7, 9]);
