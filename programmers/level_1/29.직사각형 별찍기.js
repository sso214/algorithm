/*
문제 설명
이 문제에는 표준 입력으로 두 개의 정수 n과 m이 주어집니다.
별(*) 문자를 이용해 가로의 길이가 n, 세로의 길이가 m인 직사각형 형태를 출력해보세요.

제한 조건
n과 m은 각각 1000 이하인 자연수입니다.

5 3

*****
*****
*****
*/

process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
  const n = data.split(" ");
  const a = Number(n[0]), b = Number(n[1]);

  let str = [];
  for(let i=0;i<b;i++) {
    str[i] = Array(a).fill('*').join('') + '\n';
  }
  console.log(str.join(''));
});
/*
'*'.repeat(a)로 반복시키면 문자열로 깔끔히 반환됨.
(('*').repeat(a)+`\n`).repeat(b)
*/
