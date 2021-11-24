//https://meyouus.tistory.com/63 VSC디버거 사용법 Full.ver

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
