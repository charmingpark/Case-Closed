const h = 0; // 0
const m = 30; // 30

let H;
let M;
function plusSign(n, m) { 
  return ((n % m) + m) % m
 }



for(el of Array(45).keys()){
  el*=-1;
  el--;

  H = plusSign(h+Math.floor((m+el)/60),24)
  M = plusSign((m+el),60)// (h, m)
}
console.log(H, M)