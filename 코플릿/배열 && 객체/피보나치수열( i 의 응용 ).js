// CSS를 사랑한다면 2n-1이 홀수 값을 말할 수 있단 걸 알겠지.
// i도 마찬가지야. 너무 어렵게 생각하지 말아줘.

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, ...
// 0번째+1번째 = 2번째, 1번째+2번째 = 3번째...

// 입력이 N일때 N+1인 배열을 구하기.

function fibonacci(num) {
  let result = [0, 1]

  for(let i = 2; i <= num ; i++){
  // 이미 0,1 번째는 있으니까 건너뛰고 똑같이 진행.

    result.push( result[i-2] + result[i-1] );
    // 사용해야 하는 값이 0번째와 1번째니까, i를 응용한다.

  }

  if(num === 0){
    console.log( [0] );
  }
  else{
    console.log( result )
  }
}
fibonacci(5);