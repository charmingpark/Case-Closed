function convertScoreToGradeWithPlusAndMinus(score) {
  let msg = score < 0 || score > 100 ? "INVALID SCORE"
           : score === 100 ? "A+"
           : score < 60 ? "F"
           : false 
  if (msg){
    return msg
  }
  // let arr=["D","C","B","A"]
  // let grade;
  // grade = arr[parseInt((score - 60)/ 10)];
  // msg = [8,9].includes(score % 10) ? grade+"+"
  //   :[0,1,2].includes(score % 10) ? grade+"-"
  //   : grade
  return msg
  }
  
console.log(convertScoreToGradeWithPlusAndMinus(75))

// 5~8 이 없으면 해당하지 않는 값이 들어갈 경우, undefined가 아니라 문법에러가 난다.
// 아무 일도 안 생기려거든 5~8 을 덧붙여보자.
// 물론 6~8 의 if문은 true일 때만 돌아가기 때문에 false이면 7번은 건너뛰어진다.
// false일 때는 9~15번이 실행되는 것이다.