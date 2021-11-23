const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");

const score = 85;
let arr=["F","D","C","B","A","A"];
let result = arr[score < 60 ? 0 : parseInt((score-50)/10)];
cosole.log(result);