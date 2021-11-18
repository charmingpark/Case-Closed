function isEitherEvenAndLessThan9(num1, num2) {
  return !((num1 % 2)&&(num2 % 2)) && (num1 < 9 && num2 < 9)
}

// EitherEven: 적어도 하나의 수는 짝수이다.
// LessThan9: 두 수 모두 9보다 작다.

// ’각 조건을 부정하고 논리곱을 논리합으로, 
// 논리합을 논리곱으로 바꾸고 다시 전체를 부정하면 원래 조건과 동일하다,
// (num < 10 || num > 99) 는 !(num >= 10 && num <= 99) 이 같은 것이다. 

// if (num1 < 9 && num2 < 9) {
// if (num1 % 2 === 0 || num2 % 2 === 0) {
//   return true;
// }
