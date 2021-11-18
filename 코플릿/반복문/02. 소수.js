/* 

소수(prime-Num) 는 약수가 1과 자기 자신뿐인 수. 이면서도
1이면 안된다.

*/

// 문제 : 소수 이면 T. 아니면 F.

function isPrime(num) {
  let result = true;
  if(num === 1){
    result = false;
  }
  for(let i = 2 ; i < num ; i++){
  // 조건은 1과 자기 자신이 아닌 수로 나뉘면 F가 나오게 하자.
    if(num % i === 0){
      result = false;
    }
  }
  return result;
}

