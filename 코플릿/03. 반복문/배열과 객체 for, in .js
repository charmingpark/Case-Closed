function stringArr(string) {
  for (let key of string) {
    console.log(key)
  }
}
stringArr('MyLoveIsYou')
// String도 문자배열이기 때문에 of로 돌릴 수 있음.



function Arr(arr) {
  for (let key of arr) {
    console.log(key)
  }
}
Arr(['My','Love','Is','You'])
// 배열은 당연히 of로 돌릴 수 있음.



function Arr(arr) {
  for (let key = 0; key < arr.length; key++) {
    console.log(arr[key])
  }
}
Arr(['My','Love','Is','You'])
// 배열은 일반 for문으로 돌릴 수 있음.



function ObjAndKey(Obj) {
  
  for (let key = 0; key < Object.values(Obj).length; key++) {
  // Obj의 길이는 어떻게 세죠?! => Object.keys 또는 values(Obj).length 
  // key는 변동이 있으니 길이를 반환할 수 있는것은 Value.
    console.log(key)
  }
}
ObjAndKey({0:'My', 1:'love', 2:'is', 3:'You'})



function ObjAndKey(Obj) {
  for (let key in Obj) {
    console.log(key)
  }
}
ObjAndKey({0:'My', 1:'love', 2:'is', 3:'You'})
// 0, 1, 2, 3 이 순차적으로 반환 됨.



const warrior = { nickname: "불꽃전사", 닉네임: "코딩전사"};
const nickname = "닉네임";

console.log(warrior.nickname) // 불꽃전사
console.log(warrior["nickname"]) // 불꽃전사
console.log(warrior[nickname]) // 코딩전사