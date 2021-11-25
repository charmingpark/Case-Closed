// https://meyouus.tistory.com/63 VSC디버거 사용법 Full.ver

// var = 모든 블록 스코프를 무시하는 건 아님. 화살표 함수의 블록 스코프는 무시 X.

// local  => 지역변수
// global => 전역변수
// block  => 해당 { } 안에서만 사용된다 는 뜻.

function greetSomeoneMorning(firstName) {
  var time = 'Morning'
  if(time === 'Morning'){
    var greeting = 'Good Morning';
  }
  console.log( greeting + ' ' + firstName );
}
greetSomeoneMorning('Steve');
// local에 greeting이 있음.

function greetSomeoneNight(firstName) {
  let time = 'night'
  if(time === 'night'){
    let greeting = 'Good Night';
  }
  console.log( greeting + ' ' + firstName );
}
greetSomeoneNight('Steve');
// local에 greeting이 없음.
// block에 greeting이 undefined로 뜬다.
// 출력되지 못함.



/* let 과 var의 차이를 보여주는 확실하게 보여주는 예시 */

for (let i = 0; i < 5; i++) {
  console.log(i);
}
console.log('final i:', i); // ReferenceError

// let자리에 var을 쓰면 블록스코프 무시.
for (var i = 0; i < 5; i++) {
  console.log(i);
}
console.log('final i:', i); // final i: 5