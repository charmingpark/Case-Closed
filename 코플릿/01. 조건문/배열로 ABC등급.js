function convertScoreToGrade(score) {
  let arr=["F","D","C","B","A","A"]
  // if(score < 0 || score > 100){
  //   return "INVALID SCORE";
  // }
  return arr[score < 60 ? 0 : parseInt((score-50)/10)];
  }
  