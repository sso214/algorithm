/*
N(1<=N<=100)명의 학생의 국어점수가 입력되면
각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

▣ 입력설명
국어점수를 의미하는 N개의 정수가 입력된다.
같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

▣ 출력설명
입력된 순서대로 등수를 출력한다.

▣ 입력예제 1
87 89 92 100 76

▣ 출력예제 1
4 3 2 1 5
*/
console.time("얼마나 걸리냐");
const solution = (arr) => {
    const n = [...arr];
    const m = new Map();

    n.sort((a,b) => b-a);
    for(let i=0; i<n.length; i++) {
        if (n[i] !== n[i-1]) m.set(n[i], i+1);
    }

    return arr.map(v => m.get(v));
}

console.log(solution([87, 89, 92, 100, 76]));
console.log(solution([87, 87, 92, 100, 76, 56, 76, 76]));
console.timeEnd("얼마나 걸리냐");


console.time("얼마나 걸리냐2");
const solution2 = (arr) => {
    let n = [];
    for (let i=0; i<arr.length; i++) {
        n[i]=1;
        for (let k=0; k<arr.length; k++) {
            if (arr[i] < arr[k]) {
                n[i]++;
            }
        }
    }
    return n;
}

console.log(solution2([87, 89, 92, 100, 76]));
console.log(solution2([87, 87, 92, 100, 76, 56, 76, 76]));
console.timeEnd("얼마나 걸리냐2");
