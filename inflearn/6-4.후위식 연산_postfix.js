/*
후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.

▣ 입력설명
첫 줄에 후위연산식이 주어집니다. 연산식의 길이는 50을 넘지 않습니다. 식은 1~9의 숫자와 +, -, *, / 연산자로만 이루어진다.

▣ 출력설명
연산한 결과를 출력합니다.

▣ 입력예제 1
352+*9-
▣ 출력예제 1
12
*/

/*내 답변*/
function solution(s) {
  console.log(s.replace(/(?=\D+)\d/g, ',$&'));
}
//352+*,9-,23+*
//352+*,9-,23+*

// solution('352+*9-');
solution('352+*9-23+*');
// 3*(5+2)-9*(2+3)

/*
후위연산식 : 연산자를 피연산자 뒤에 위치시킴

1. 후위 연산식을 왼쪽에서 오른쪽으로 읽음
2. 숫자를 만나면 중위 표기법에 직접 추가
3. 연산자를 만나면 스택을 활용해 중위 표기법에 추가
4. 스택의 맨 위에 있는 연산자가 현재 연산자보다 우선순위가 높거나 같을 때까지 스택에서 연산자를 꺼내 중위 표기법에 추가
5. 현재 연산자를 스택에 넣음
6. 후위 연산식을 모두 읽은 후에는 스택에 남아있는 모든 연산자를 중위 표기법에 추가
*/

/*수업 풀이 방식*/
function solution2(s) {
  let answer;
  let stack = [];
  for (let x of s) {
    if (!isNaN(x)) stack.push(Number(x));
    else {
      let rt = stack.pop();
      let lt = stack.pop();
      if (x === '+') stack.push(lt + rt);
      else if (x === '-') stack.push(lt - rt);
      else if (x === '*') stack.push(lt * rt);
      else if (x === '/') stack.push(lt / rt);
    }
  }
  answer = stack[0];
  return answer;
}

let str = "352+*9-";
console.log(solution2(str));
