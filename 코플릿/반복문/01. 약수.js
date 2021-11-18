/*

어떤 수를 나누어떨어지게 하는 수를 그 수의 약수라고 합니다.

8을 1, 2, 4, 8,로 나누면 나누어떨어집니다.

1, 2, 4, 8은 8의 약수입니다.

*/

function getSumOfFactors(num){
  result = 0;
  // 문제는 약수의 합을 구하는 것임.. 약수의 나열이 아니라
  let X; 
  for(let i = 0 ; i <= num ; i++){
    X = num % i
    // 어떤 수를 나누어떨어지게 하는 수를 그 수의 약수라고 합니다.
    
    if(X === 0){
      result += i
    }
  }
  return result;
}