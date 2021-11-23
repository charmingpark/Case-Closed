function daysInMonth(month) {
  return month === 2 ? 28
         : [4, 6, 9, 11].includes(month) ? 30
         : 31
}
  // 2월이 28일까지
  // 7월 8월  = 31일까지
  // 1,3,5,7 / 8,10,12(31) 2(28) 4,6 / 9,11(30)