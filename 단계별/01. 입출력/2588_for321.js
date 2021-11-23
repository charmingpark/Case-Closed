const sample = 
`472
385`

const stdin = sample.toString().split('\n').map(val=>+val); // [472, 385]
const A = stdin[0]; // 472
const B = stdin[1]; // 385
const C = String(B).split('').map(val=>+val); // [3, 8, 5] 

for(let i=2; i >= 0 ; i--){
    console.log(A*C[i]);
}
 console.log(A*B)

// 역순으로 실행하는 for문 도 만들 수 있다.
// split은 Number의 경우엔 실행되지 않는다.
// 한 글자 씩 뜯어낼 때는, .split('')