function addOneSecond(hour, minute, second) {
  second++;
  if(second === 60){
    second = 0;
    minute++;
  }
  if(minute === 60){
    minute = 0;
    hour++;
  }
  if(hour === 24){
    hour = 0;
  }
  return `1초 뒤에 ${hour}시 ${minute}분 ${second}초 입니다`
}
