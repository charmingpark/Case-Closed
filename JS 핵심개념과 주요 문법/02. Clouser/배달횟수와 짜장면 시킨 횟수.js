// a 는 총 주문 횟수
// b 는 특정 메뉴를 시킨 횟수

var a = 0;
function delievery() {
  var b = 0;
  return function(){
    console.log(++a, ++b);
  };
}

var jajang = delievery();
var champon = delievery();
// 함수를 따로 선언하면 각자 다른 함수이다.
// 전역과 지역으로 나뉘어서 더해지게 됨.

jajang();
jajang();
champon();
champon();
champon();

