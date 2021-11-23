function makeMultiplesOfDigit(num) {
  let letters = "";
  for(let n = 1 ; n <= Math.floor(num/3) ; n++){
    letters += String(3*n);
  }
  return letters;
}

// 7이 주어지면 36 이 출력.
// 7을 배수로 나눈 몫 만큼 값이 나오게 됨.
// 리턴은 String으로.

// 사실 filter만 쓰면 이 고생을 안해도 됨.

let arrTriple = [...Array(7).keys()] // 0, 1, 2, ..6
arrTriple.shift() // 1, 2, ..6
console.log(arrTriple.filter(el => el % 3 === 0))