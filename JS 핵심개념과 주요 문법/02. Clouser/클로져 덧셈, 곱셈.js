// 덧셈

let add = function(x){
  let sum = function (y) {
    return x + y;
  }
  return sum;
}

let foo = add(1);
foo(3);
let total = foo(6);

// 곱셈
let multiplyByX = function(x){
  return function(y){
    return x * y;
  }
}

let multiplyBy5;
multiplyBy5 = multiplyByX(5);

multiplyBy5(4);

