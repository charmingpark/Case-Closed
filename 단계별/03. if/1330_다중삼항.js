const sample = 
`10 2`

const stdin = sample.toString().split(' ').map(val=>+val); // [472, 385]
const A = stdin[0]; // 472
const B = stdin[1]; // 385

const result = (A > B) ?  '>' : ((A !== B) ? '<' : '==')
console.log(result);

// const result = (A > B ?  '>' : (A !== B ? '<' : '=='));
// 위에도 됨.
