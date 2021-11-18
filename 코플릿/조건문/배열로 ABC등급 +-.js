function convertScoreToGradeWithPlusAndMinus(score) {
  let arr=["D","C","B","A"]
  return score < 0 || score > 100 ? "INVALID SCORE"
           : score === 100 ? "A+"
           : score < 60 ? "F"
           : [8,9].includes(score % 10) ? arr[parseInt((score - 60)/ 10)]+"+"
           : [0,1,2].includes(score % 10) ? arr[parseInt((score - 60)/ 10)]+"-"
           : arr[parseInt((score - 60)/ 10)]
  }