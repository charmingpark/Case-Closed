// 4의 배수이면서, 100의 배수가 아닐 때 또는 400의 배수일 때 = 1
// 아니면 = 0

const fs = require("fs");
const input = fs.readFileSync("/dev/stdin");
if(input % 4 === 0){
    if(input % 100 !== 0){
        console.log(1);
    }else if(input % 400 === 0){
        console.log(1);

    }else{
        console.log(0);
    }

}else{
        console.log(0);    
}

// 함수 안에서 return 을 사용하거나, 
// 반복문 안에서 break, continue 를 사용할 때는 else 의 생략이 가능합니다. 
// 절대 아무때나 else 가 생략되는 게 아님.

// 위에서는 console.log지 return이 되고 있지 않음에 유의!