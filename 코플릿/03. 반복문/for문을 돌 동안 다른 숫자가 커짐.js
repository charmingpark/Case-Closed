function makeOddDigits(num) {
  let result = ""
  let count = 0
  let i = 1

  while(count < num){
    result += i
    count ++
    i+=2
  }
  
  return result;
}
