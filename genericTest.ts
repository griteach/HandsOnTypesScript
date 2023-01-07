interface IGenericTest {
  <T>(nickName: T[]): T;
}
interface IGenericTwo {
  <T>(home: T): T;
}

const myPer: IGenericTest = (arr) => arr[0];
const myHome: IGenericTwo = (home) => home;

const aArr = myPer([1, 2, 3, 4]);
const bArr = myHome(244);
