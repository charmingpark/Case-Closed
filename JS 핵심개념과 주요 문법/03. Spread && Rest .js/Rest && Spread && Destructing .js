/* Spread
 주로 배열을 풀어서 인자로 전달하거나, 배열을 풀어서 각각의 요소로 넣을 때에 사용
*/

function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

sum(...numbers) // 6







/* Rest
 파라미터를 배열의 형태로 받아서 사용
 파라미터 개수가 가변적일 때 유용 
*/

function sum(...theArgs) {
  return theArgs.reduce((prev, current) =>{
    return prev + current;
  });
}

sum(1, 2, 3) // 6
console.log(sum(1, 2, 3, 4)) // 10




/* Object 에도 쓸 수 있다.
 새로운 value로 쉽게 바꿀 수 있다.
*/
let obj1 = { foo: 'bar', x: 42 };
let obj2 = { foo: 'baz', y: 13 };

let clonedObj = { ...obj1 };
let mergedObj = { ...obj1, ...obj2 };

console.log(clonedObj)
console.log(mergedObj)




// 함수의 파라미터 자리에도 쓸 수 있다.
function myFun(a, b, ...manyMoreArgs) {
  console.log("a", a);
  console.log("b", b);
  console.log("manyMoreArgs", manyMoreArgs);
}

myFun("one", "two", "three", "four", "five", "six");



function findBiggestArg(...args) {
  let biggestArg = 0;
  for( let i = 0 ; i < args.length ; i++ ){
    if(biggestArg < args[i]){
      biggestArg = args[i]
    }
  }
  console.log(biggestArg)
}

let value = findBiggestArg(10, 20, 30, 50)






// 객체일 때 결과에 주의.
const {a, b, ...rest} = {a: 10, b: 20, c: 30, d: 40}
console.log("a", a); // value 값만 반환한다.
console.log("b", b);
console.log("rest", rest); // 남은 객체




// 함수일 때 파라미터 자리엔 필요한 키값만 남겨도 이해 해 준다.
function whois({displayName: displayName, fullName:{firstName: name}}) {
  console.log(displayName + " is " + name); // jdoe is john
}

let user = {
  id: 42,
  displayName: "jdoe",
  fullName: {
    firstName: "john",
    lastName: "Doe"
  }
};

whois(user)


