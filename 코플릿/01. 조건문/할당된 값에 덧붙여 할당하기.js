function fizzBuzz(num) {
  let result = "";
  if(num % 3 === 0){
    result += "Fizz"
  }
  if(num % 5 === 0){
    result += "Buzz"
  }
  if(num % 3 !== 0 && num % 5 !== 0){
    result = "No FizzBuzz"
  }
  return result;
}
