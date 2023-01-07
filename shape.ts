class Person {
  name: string;
}

const jill: { name: string } = {
  name: "Jill",
};

const myPerson: Person = jill;

console.log(myPerson);

//class person으로 인스턴스 myPerson을 만들고 나서, jill이란 변수의 값을 대입했다.
//타입의 이름과 상관없이 타입의 형태가 같기 때문에 전혀 문제될 것이 없는 방법이다.
//다시 말해, 타입의 이름이 중요한 것이 아니라 타입의 형태 (모양)이 같아야 한다.
