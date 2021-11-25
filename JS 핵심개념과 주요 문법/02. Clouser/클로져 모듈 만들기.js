/* 정보의 접근 제한 (캡슐화) 

내부 함수를 단 하나만 리턴하는 것에 그치지 않고,
객체에 담아 여러 개의 내부 함수를 리턴하도록 만들 수 있다.

makeCounter 함수는 increase, decrease, getValue메소드를 포함한 객체 하나(counter1, counter2)를 리턴 함.

makeCounter 함수를 바꾸지 않고, value라는 변수에 값을 새롭게 할당할 수 있는 방법 은 없다.
대신, 리턴하는 객체가 제공하는 메소드를 통해 `value` 값을 간접적으로 조작할 수 있음.

만일 스코프로 value 값을 감싸지 않았더라면, 
value 값은 전역 변수여야만 했을 것. 
하지만 makeCounter라는 함수가 value 값을 보존하고 있기 때문에,
전역 변수로 따로 만들 필요가 없다. 

이와 같이 함수 재사용성을 극대화하여, 함수 하나를 완전히 독립적인 부품 형태로 분리하는 것 = 모듈화 

 + 클로져 함수에 변수가 살아있으려면, 안에 있는 리턴함수에서 변수를 써야!

 + 클로저 함수에서 앞에 return이 없으면, 그냥 스코프 개념.

*/

const makeCounter = () => {
  let value = 0;

  return{
    increase: () => {
      value += 1 
    },
    decrease: () => {
      value -= 1 
    },
    getValue: () => value
  }
}
const counter1 = makeCounter();
counter1.increase();
counter1.increase();
counter1.increase();
console.log(counter1.getValue()); // 3

const counter2 = makeCounter();
counter2.decrease();
counter2.decrease();
counter2.decrease();
console.log(counter2.getValue()); // -3

// counter1, counter2 는 서로 영향을 끼치지 않는다.