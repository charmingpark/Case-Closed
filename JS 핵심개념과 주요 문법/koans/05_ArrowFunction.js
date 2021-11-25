describe('화살표 함수에 관해서', function () {
  it('함수 표현식 사용법을 복습합니다', function () {
    const add = function (x, y) {
      return x + y
    }

    expect(add(5, 8)).to.eql(13)
  })

  it('화살표 함수 사용법을 익힙니다', function () {
    // function 키워드를 생략하고 화살표 => 를 붙입니다
    const add = (x, y) => {
      return x + y
    }
    expect(add(10, 20)).to.eql(30)

    // 리턴을 생략할 수 있습니다
    const subtract = (x, y) => x - y
    expect(subtract(10, 20)).to.eql(-10)

    // 필요에 따라 소괄호를 붙일 수도 있습니다
    const multiply = (x, y) => (x * y)
    expect(multiply(10, 20)).to.eql(200)

    // 파라미터가 하나일 경우 소괄호 생략이 가능합니다
    const divideBy10 = x => x / 10
    expect(divideBy10(100)).to.eql(10)
  })

  it('화살표 함수를 이용해 클로저를 표현합니다', function () {
    const adder = x => {
      return y => {
        return x + y
      }
    }

    expect(adder(50)(10)).to.eql(60)
    // STUDY: 50을 x값으로 한번 돌리고, 10을 y값으로 한번 더 돌린단 뜻임.

    const subtractor = x => y => {
      return x - y
    }

    expect(subtractor(50)(10)).to.eql(40)

    const htmlMaker = tag => textContent => `<${tag}>${textContent}</${tag}>`
    expect(htmlMaker('div')('code states')).to.eql(`<div>code states</div>`)

    const liMaker = htmlMaker('li')
    // STUDY: liMaker라는 함수는 htmlMaker에 'li'가 다시 tag로 들어가는 것임. 
    
    // 그 후에 들어온 문자열을 textContent에 넣어서 각각 반환 함.
    expect(liMaker('1st item')).to.eql(`<li>1st item</li>`)
    expect(liMaker('2nd item')).to.eql(`<li>2nd item</li>`)
  })
})
 // STUDY: 여러가지 이유에 따라, 화살표 함수가 언제나 함수를 대신할 수는 없다.
 // 화살표 함수에서의 this는 전역을 지칭함.
 // 함수 내부가 복잡한 경우.
//  https://velog.io/@yhe228/%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EC%97%90%EC%84%9C-this