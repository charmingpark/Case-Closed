// let output = createPhoneNumber([0, 1, 0, 1, 2, 3, 4, 5, 6, 7, 8]);
// console.log(output); // --> '(010)1234-5678'

// output = createPhoneNumber([8, 7, 6, 5, 4, 3, 2, 1]);
// console.log(output); // --> '(010)8765-4321'

// output = createPhoneNumber([0, 1, 1, 4, 3, 2, 1, 8, 7, 6, 5]);
// console.log(output); // --> '(011)4321-8765'

// ! slice 사용시 주의사항
// arr.slice(3,0) 거꾸로 잡으면 빈배열 [] 임.
// arr.slice(2,2) 같은 값을 잡으면 빈배열 [] 임.
// ! 비슷한 개념인 substring은 거꾸러 잡아도 똑같이 쪼개준다. 하지만 문자열에서만 가능. 

function createPhoneNumber(arr) {
  let first;
  let secnd;
  let third;
  
  if(arr.length === 11){
    first = arr.slice(0, 3).join("");
  }else{
    first = "010";
  }

  secnd = arr.slice(-8, -4);
  // 음수 값을 넣으면 뒤에서부터 자릿수를 세서 뜯어 줌.

  secnd = secnd.join("");
  // join은 toString에서 생기는 ,(콤마) 같은 문제를 해결해 준다.
  // 게다가 붙일 때 원하는 기호나 문구를 사이 마다 끼워줄 수 있다.

  third = arr.slice(-4)
  third = third.join("");
  // console.log(third)
  console.log(`(${first})${secnd}-${third}`)
}


/* 위에 문제는 아래처럼 splice를 사용할 수도 있다. */
function createPhoneNumber(arr) {
  let result;
  let str;
  if(arr.length === 8){
    arr.splice(4, 0, "-");
    str = arr.join("");
    result = "(010)"+ str;
    
  }else{
    arr.splice(0, 0, "(");
    arr.splice(4, 0, ")");
    arr.splice(9, 0, "-");
    str = arr.join("");
    result = str;
  }
  return result;
}