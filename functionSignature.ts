type Run = (miles: number) => boolean;

const Runner: Run = function (miles: number) {
  if (miles > 10) {
    return true;
  }
  return false;
};

console.log(Runner(9));
