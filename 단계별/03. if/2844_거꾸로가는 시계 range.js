const sample = 
`0 30`

const stdin = sample.toString().split(' ').map(val=>+val); // [0 ,30]
const h = stdin[0]; // 0
const m = stdin[1]; // 30

function mod(n, m) {
  return ((n % m) + m) % m;
}
// js특성 상 음수의 나머지는 음수기호가 붙은 나머지를 배출 함. 식이 필요하다.
// Math.abs와는 또 다르다

i = 45
for (el of Array(i).keys()){
  el*=-1
  el--
  console.log(mod(h+Math.floor((m+el)/60),24), mod(m+el,60))
}

// Hour ===
//  원래 주어진 시 + 
//  '1분씩 빠진 원래 주어진 분' 을 
//  60으로 나눈 몫(시간은 60진법) 으로 만든 다음 
//  24(24시가 되면 0이 됨) 로 나눈 나머지.

// Minute ===
//  '1분씩 빠진 원래 주어진 분' 을 
//  60으로 나눈 나머지. 

// 16번 줄은 양수로 1씩 커져도 그대로 적용한다.
// Math.floor와 parseInt의 차이는 음수일 때 생긴다. 위 상황에서는 반드시 Math.floor를 써야 정답이 도출됨.

// document.write([...Array(5).keys()].toString().replaceAll(",", ""));
// https://stackoverflow.com/questions/3895478/does-javascript-have-a-method-like-range-to-generate-a-range-within-the-supp


// 물론 제출은 아래와 같이 정리해 제출 했다.
const h = 0; // 0
const m = 30; // 30

let H;
let M;
function plusSign(n, m) { 
  return ((n % m) + m) % m
 }

for(el of Array(45).keys()){
  el*=-1;
  el--;

  H = plusSign(h+Math.floor((m+el)/60),24)
  M = plusSign((m+el),60)// (h, m)
}
console.log(H, M)


/* 백준 2739 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin")
const sample = Number(input); // 2
for (el of Array(9).keys()){
  console.log(`${sample} * ${el+1} = ${sample * (el+1)}`)
}


/* 백준 8393 */
const fs = require("fs");
const input = fs.readFileSync("/dev/stdin")
const n = Number(input); // 2
let result = 0;
for(el of Array(n+1).keys()){
  result+=el
}
console.log(result)

// 아래와 같다. (아래가 살짝 더 빠르다)
let n=4
let result = 0;
for(let i = 0 ; i <= n ; i++){
  result+=i
}
console.log(result)


