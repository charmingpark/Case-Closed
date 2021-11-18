function isPythagorean(side1, side2, side3) {
  let first = side1*side1;
  let secnd = side2**2;
  let third = Math.pow(side3, 2);

 return 2 * Math.max(first, secnd, third) === (first + secnd + third)? true : false;
  

  // if(first === secnd + third || secnd === first + third || third === secnd + first){
  //   return true;
  // }
  // return false;
}


// 제곱을 구하는 세가지 방법

// {\displaystyle a^{2}+b^{2}=c^{2}}
// 컴퓨터 상에서는 문서 편집기를 쓰지 않는 이상 위첨자를 쓰기 힘든 경우가 많기 때문에 ^[1] 기호를 써서 '밑^지수'와 같은 식으로 쓰이기도 한다.

// a^{2}+b^{2}=c^{2} 여기서 양쪽으로 c^{2}를 더해준 식 이다.