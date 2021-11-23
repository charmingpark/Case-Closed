const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let input = [];
rl.on("line", function (line) {
  input.push(line);
  /*
예시)
< 입력 >       < 입력을 받은 line 배열 >
  2	      [ '2', [ '3 4' ], [ '4 5' ] ]
  3 4
  4 5
*/
}).on("close", function () {
  ///////////////////////////////
  let result = [...input]
  result.shift(); // [[ '3 4' ], [ '4 5' ]]
  result = result.flat();
  for(el of result){
    el = el.split(' ');
    console.log(Number(el[0])+Number(el[1]));
  }
  ///////////////////////////////
  process.exit();
});

