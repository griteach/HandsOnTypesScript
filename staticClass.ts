class StaticRunner {
  static lastRunTypeName: string;
  constructor(private typeName: string) {}
  run() {
    StaticRunner.lastRunTypeName = this.typeName;
  }
}

const aRun = new StaticRunner("A");
const bRun = new StaticRunner("B");
const cRun = new StaticRunner("C");
const dRun = new StaticRunner("D");
const eRun = new StaticRunner("E");

aRun.run();
eRun.run();
dRun.run();
cRun.run();
bRun.run();

console.log(StaticRunner.lastRunTypeName);
