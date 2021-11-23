function stringArr(string) {
  for (let key of string) {
    console.log(key)
  }
}
stringArr('OurLoveIsEnd')
// String도 문자배열이기 때문에 of로 돌릴 수 있음.



function Arr(arr) {
  for (let key of arr) {
    console.log(key)
  }
}
Arr(['Our','Love','Is','End'])
// 배열은 당연히 of로 돌릴 수 있음.



function Arr(arr) {
  for (let key = 0; key < arr.length; key++) {
    console.log(arr[key])
  }
}
Arr(['Our','Love','Is','End'])
// 배열은 일반 for문으로 돌릴 수 있음.



function ObjAndKey(Obj) {
  for (let key = 0; key < Obj.length; key++) {
    console.log(key)
    
  }
}
ObjAndKey({0:'Our', 1:'love', 2:'is', 3:'end'})
// 된다는 얘기가 있던데 아무튼 안됨.
// ! 이유는 모르겠음


function ObjAndKey(Obj) {
  for (let key in Obj) {
    console.log(key)
  }
}
ObjAndKey({0:'Our', 1:'love', 2:'is', 3:'end'})
// 0, 1, 2, 3 이 순차적으로 반환 됨.



const warrior = { nickname: "불꽃전사", 닉네임: "코딩전사"};
const nickname = "닉네임";

console.log(warrior.nickname) // 불꽃전사
console.log(warrior["nickname"]) // 불꽃전사
console.log(warrior[nickname]) // 코딩전사