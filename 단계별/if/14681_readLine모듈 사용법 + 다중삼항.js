const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// input과 output이란 변수를 데려옴
// rl은 객체.

let input = [];
// 초기값 할당

rl.on("line", function (line) {
  input.push(parseInt(line));
  // parseInt 는 문자열의 숫자를 숫자로 꺼냄 + 소숫점 없앰
  // 소숫점으로 들어오면 parseFloat을 써야 함.
  // 문자룰 쓰고 싶거든 그냥 parseInt없이 쓰면 돼.
  // "line", "close" 랑 이벤트 "click"이 비슷한 형식이라고 볼 수 있다.
  // 첫번째 .on 이 끝나고 나서, 두번째 .on 이 실행되는 구조.

}).on("close", function () {
  ///////////////////////////////
  const A = input[0];
  const B = input[1];

  let result = (A > 0) ? (B > 0 ? 1 : 4):(B > 0 ? 2 : 3);
  console.log(result);
  ///////////////////////////////
  process.exit();
});

// fs모듈 쓸 수 없음!
// readline을 써야 함!

// rl 에서 사용되는 메서드나 명령에 속하기 때문에 
// 정확한 내용은 깊이 알아보는 수 밖에 없지만,
// 변화되는 부분은 전부 정리 했으니 이대로 사용만 하면 된다.
