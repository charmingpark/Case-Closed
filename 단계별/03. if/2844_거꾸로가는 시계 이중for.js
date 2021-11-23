const sample = 
`0 30`

const stdin = sample.toString().split(' ').map(val=>+val); // [0 ,30]
const h = stdin[0]; // 0
const m = stdin[1]; // 30

let i = 0
let temp = true

for(let hh = 0 ; hh < 25 ; hh++ ){
  if (hh ===24){
    hh-=24
  }
  
  for(let mm = 0 ; mm < 60 ; mm++ ){
    i++
    if (temp){
      hh = h;
      mm = m+1;
      temp=false;
    }
    // 여기서 temp를 false로 시키는 이유는 방금 실행된 18~22만 계속 돌면 안되니까 만들어 준 것임.

    console.log(hh,mm)
    // 잘 출력해 준 다음 

    // 45면 for문을 완전히 빠져나와 console.log 찍는 것 까지 그만 함.
    // i가 45가 아니면 for문을 한번 더 실행.
    if (i === 45){
      temp=true
      break
    }
  }
  if(temp){
    break
  }
}

