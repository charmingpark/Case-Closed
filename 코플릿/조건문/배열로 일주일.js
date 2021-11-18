function followingDay(day) {
  let week = ['월', '화', '수', '목', '금', '토', '일']
  for(let i = 0; i < 7 ; i++){
    if(day === week[i] + '요일'){
      return week[(i+1) % 7]+'요일'
    }
  }
  return '올바른 요일이 아닙니다';
}
