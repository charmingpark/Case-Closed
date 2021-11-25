function getLongestWord(str) {
  let newArr = str.split(' ');
  let lengths = newArr.map(el => el.length);
  lengths = Math.max(...lengths);
  // sort는 유니코드 순이라서 10과 3즌 3이 더 크다고 함. 쓰면 안됨.
  // Math.max는 여러개의 숫자들 만 비교할 수 있음. 배열을 비교하는 것이 아님.
  // Math.max는 immutable 매서드 임.(원래 숫자에 쓰는거다. 숫자 = 원시자료형)
  /*
  let arr = [10, 30, 40, 20]
  let value = Math.max(arr)
  결과: NaN
  */

  return(newArr.filter(el => el.length === lengths)[0])
  // 같은 길이가진 문자들이 배열로 답이 나와버릴 수 있음.
  // 0번째꺼 달라고 해야 함.
}

function getLongestWord(str) {
  let words = str.split(' ');
  
  let max = words[0];
  for (let word of words) {
    if (word.length > max.length) {
      max = word;
    }
  }

  return max;
}


console.log(getLongestWord( 'LVLbDCuk 7GOIYvQTyghtBtnk NfG 3mwj eQBZlol x0ycm'))
//console.log(getLongestWord('abcd  defg 1 B9P  RI hijk jB lmno'))