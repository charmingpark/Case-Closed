describe('Array에 대해서 학습합니다.', function () {
  it('Array의 기본을 확인합니다.', function () {
    const emptyArr = [];
    expect(typeof emptyArr === 'array').to.equal(false);
    expect(emptyArr.length).to.equal(0);

    const multiTypeArr = [
      0,
      1,
      'two',
      function () {
        return 3;
      },
      { value1: 4, value2: 5 },
      [6, 7],
    ];
    expect(multiTypeArr.length).to.equal(6);
    expect(multiTypeArr[0]).to.equal(0);
    expect(multiTypeArr[2]).to.equal('two');
    expect(multiTypeArr[3]()).to.equal(3);
    // STUDY: multiTypeArr[3]() = 함수를 실행한 값 // multiTypeArr[3] = function
    expect(multiTypeArr[4]['value1']).to.equal(4);
    expect(multiTypeArr[4]['value2']).to.equal(5);
    expect(multiTypeArr[5][1]).to.equal(7);
  });

  it('Array의 요소(element)를 다루는 방법을 확인합니다.', function () {
    const arr = [];
    const rray = [];
    expect(arr).to.deep.equal([]);
    expect(arr === rray).to.deep.equal(false);
    // STUDY: 빈 배열이다 라고 말하는 자체가 주소값이 다른 배열을 선언하는 의미는 아님.

    arr[0] = 1;
    expect(arr).to.deep.equal([1]);

    arr[1] = 2;
    expect(arr).to.deep.equal([1, 2]);

    arr.push(3);
    expect(arr).to.deep.equal([1, 2, 3]);

    const poppedValue = arr.pop();
    expect(poppedValue).to.equal(3);
    // STUDY: arr.pop()은 나온 값 자체임. 실행한 뒤의 형태가 아니라.
    expect(arr).to.deep.equal([1, 2]);
  });

  it('Array 메소드 slice를 확인합니다.', function () {
    const arr = ['peanut', 'butter', 'and', 'jelly'];
    
    expect(arr.slice(1)).to.deep.equal(['butter', 'and', 'jelly']);
    // STUDY: arr의 1번 째 요소만 가져오는 것이 아니라 1부터 끝까지를 가져온다.

    expect(arr.slice(0, 1)).to.deep.equal(['peanut']);
    // STUDY: 마지막은 포함 "안한다".
    
    expect(arr.slice(0, 2)).to.deep.equal( ['peanut', 'butter']);
    expect(arr.slice(2, 2)).to.deep.equal([]);
    // STUDY: 같은 번수가 연속되면 빈 배열임.

    expect(arr.slice(2, 20)).to.deep.equal(['and', 'jelly']);
    // STUDY: 끝까지 가져오는게 맞음
    
    expect(arr.slice(3, 0)).to.deep.equal([]);
    expect(arr.slice(3, 100)).to.deep.equal(['jelly']);
    expect(arr.slice(5, 1)).to.deep.equal([]);
    // STUDY: 거꾸러 가져오는 것이 아님. 거꾸러 가져오는 것은 문자열의 .substring 임.

    
    expect(arr.slice(0)).to.deep.equal(['peanut', 'butter', 'and', 'jelly']);
    expect(arr.slice(0)).to.deep.equal(arr);
    // STUDY: 아래의 코드는 arr 전체를 복사한다.
    // STUDY: arr.slice은 주소값이 원본과 같다.???
  });

  it('Array를 함수의 인자로 전달할 경우, reference가 전달됩니다.', function () {
    // call(pass) by value와 call(pass) by reference의 차이에 대해서 학습합니다.
    const arr = ['zero', 'one', 'two', 'three', 'four', 'five'];

    function passedByReference(refArr) {
      refArr[1] = 'changed in function';
    }
    passedByReference(arr);
    expect(arr[1]).to.equal('changed in function');
    // STUDY: arr이 원시 자료형이었다면 값이 그대로 나오겠지만, 참조 자료형이어서 변화가 가능한 것이다.
    // STUDY: arr[인덱스]는 그 값만 호출되지 괄호까지 가져오지 않는다. 

    const assignedArr = arr;
    assignedArr[5] = 'changed in assignedArr';
    expect(arr[5]).to.equal('changed in assignedArr');

    const copiedArr = arr.slice();
    // ! arr.slice() 와 arr.slice(0) 은 기능이 같다.
    copiedArr[3] = 'changed in copiedArr';
    expect(arr[3]).to.equal('three');
  });

  it('Array 메소드 shift와 unshift를 확인합니다.', function () {
    const arr = [1, 2];
    const rray = arr.slice(0);
    // STUDY: slice[0]이 아니라 slice(0)이다. 괄호주의

    arr.unshift(3);
    expect(arr).to.deep.equal([3, 1, 2]);

    const shiftedValue = arr.shift();
    expect(shiftedValue).to.deep.equal(3);
    expect(arr).to.deep.equal(rray);
  });
});
