const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(' ');

// Javascript-require-간단-동작-원리-및-module.export-와-export의-차이
// https://velog.io/@sms8377/Javascript-require-%EA%B0%84%EB%8B%A8-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC-%EB%B0%8F-module.export-%EC%99%80-export%EC%9D%98-%EC%B0%A8%EC%9D%B4

const inputData =  fs.readFileSync("/dev/stdin").toString().split(' ').map(val=>+val)
const [A,B,C] = inputData
console.log(((A%C) + (B%C))%C) 

// .map(val=>+val)은 베열에서 문자열의 숫자들을 알아서 숫자로 만들어주는 역할을 한다.

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split(' ').map(val=>+val)
const [A,B,C] = input
console.log((A+B)%C)
console.log(((A%C) + (B%C))%C)
console.log((A*B)%C)
console.log(((A%C) * (B%C))%C)