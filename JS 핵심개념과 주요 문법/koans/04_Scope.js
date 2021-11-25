describe('scope 대해서 학습합니다.', function () {
  //  scope는 변수의 값(변수에 담긴 값)을 찾을 때 확인하는 곳을 말합니다. 반드시 기억하시기 바랍니다.
  // 자바스크립트 함수 호이스팅(hoisting)에 대해서 검색해 봅니다.
  // ! 호이스팅: 함수 안에 선언된 모든 변수들을 끌어올려, 해당 함수의 유효 범위(= 스코프) 최상단에 선언하는 것.
  it('함수 선언식(declaration)과 함수 표현식(expression)의 차이를 확인합니다.', function () {
    let funcExpressed = 'to be a function';

    expect(typeof funcDeclared).to.equal('function');
    expect(typeof funcExpressed).to.equal('string');

    function funcDeclared() {
      return 'this is a function declaration';
    }
    // ! 함수 선언식은 호이스팅 가능
    
    funcExpressed = function () {
      return 'this is a function expression';
    };
    // ! 함수 표현식은 호이스팅 불가능
    // ! JS를 해석하는 parser가 할당을 끌어올려서 해석하지 않기 때문.
    

    const funcContainer = { func: funcExpressed };
    expect(funcContainer.func()).to.equal('this is a function expression');

    funcContainer.func = funcDeclared;
    expect(funcContainer.func()).to.equal('this is a function declaration');
  });

  it('lexical scope에 대해서 확인합니다.', function () {
    let message = 'Outer';

    function getMessage() {
      return message;
    }

    function shadowGlobal() {
      let message = 'Inner';
      return message;
    }

    function shadowGlobal2(message) {
      return message;
    }

    function shadowParameter(message) { 
      // ! 파라미터가 비어있어야 let message가 바뀔 수 있다.
      // ! 위엔 그냥 파라미터 받는 구멍임.
      //var message = 'Do not use parameters like this!';
      message = 'Do not use parameters like this!';
      console.log(message)
      return message;
    }
    shadowParameter();
    console.log(message);
    expect(getMessage()).to.equal('Outer');
    expect(shadowGlobal()).to.equal('Inner');
    expect(shadowGlobal2('Parameter')).to.equal('Parameter'); 
    expect(shadowParameter('Parameter')).to.equal('Do not use parameters like this!');
    expect(message).to.equal('Outer');
  });

  it('클로저(closure)에 대해 확인합니다.', function () {
    function increaseBy(increaseByAmount) {
      return function (numberToIncrease) {
        return numberToIncrease + increaseByAmount;
      };
    }

    const increaseBy3 = increaseBy(3);
    const increaseBy5 = increaseBy(5);

    expect(increaseBy3(10)).to.equal(13);
    expect(increaseBy5(10)).to.equal(15);
    expect(increaseBy(8)(6) + increaseBy(5)(9)).to.equal(28);

    /*
    mdn에 따르면 클로저의 정의는 다음과 같습니다. 반드시 기억하시기 바랍니다.
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures

      A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created.

      클로저는 함수와 함수가 선언된 어휘적 환경의 조합을 말한다.
      이 환경은 클로저가 생성된 시점의 유효 범위 내에 있는 모든 지역 변수로 구성된다.

    여기서의 키워드는 "함수가 선언"된 "어휘적(lexical) 환경"입니다. 
    특이하게도 자바스크립트는 함수가 호출되는 환경와 별개로, 기존에 선언되어 있던 환경 - 어휘적 환경 - 을 기준으로 변수를 조회하려고 합니다.
    유어클레스 영상에서 언급되는 "외부함수의 변수에 접근할 수 있는 내부함수"를 클로져 함수로 부르는 이유도 그렇습니다.

    클로저는 내부(inner) 함수가 외부(outer) 함수의 지역 변수에 접근할 수 있습니다.
    이를 유념하시고 클로저의 유즈 케이스를 검색해 보시기 바랍니다. 아래 검색 키워드를 활용합니다.
      function factories
      namespacing private variables/functions
    */
  });

  it('lexical scope와 closure에 대해 다시 확인합니다.', function () {
    let age = 27;
    let name = 'jin';
    let height = 179;

    function outerFn() {
      let age = 24;
      name = 'jimin';
      let height = 178;

      function innerFn() {
        age = 26;
        let name = 'suga';
        return height;
      }

      innerFn();

      // ! innerFn의 파라미터 안에 아무 것도 없다 => 안에 값이 재선언 된다. (구멍 - 구멍 관계가 아님.)
      expect(age).to.equal(26);
      expect(name).to.equal('jimin');

      return innerFn; // outerFn이 돌아가면 최종 반환 값으로 height이 출력된다.
    }

    // ! outerFn()이 이미 실행되었다는 말임.
    // outerFn() 의 실행문 속에 innerFn()이 있음.
    const innerFn = outerFn(); 

    // ! 102의 age는 지역변수.
    expect(age).to.equal(27);

    // suga는 지역변수라서 어디 안나간다.
    // ! innerFn의 파라미터가 비어있다 => 안에 값이 재선언 된다. (구멍 - 구멍 관계가 아님.)
    expect(name).to.equal('jimin');

    // return height라고 했으니까.
    // outerFn과 innerFn에서 지역변수로 활동중인 178을 가져온다.
    expect(innerFn()).to.equal(178);
  });
});