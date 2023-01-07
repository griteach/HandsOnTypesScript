var StaticRunner = /** @class */ (function () {
    function StaticRunner(typeName) {
        this.typeName = typeName;
    }
    StaticRunner.prototype.run = function () {
        StaticRunner.lastRunTypeName = this.typeName;
    };
    return StaticRunner;
}());
var aRun = new StaticRunner("A");
var bRun = new StaticRunner("B");
var cRun = new StaticRunner("C");
var dRun = new StaticRunner("D");
var eRun = new StaticRunner("E");
aRun.run();
eRun.run();
dRun.run();
cRun.run();
bRun.run();
console.log(StaticRunner.lastRunTypeName);
