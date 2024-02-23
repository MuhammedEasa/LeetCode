var addDigits = function (num) {
  if (num < 10) return num;
  let a = String(num).split("");

  let b = a.reduce((sum, val) => sum + parseInt(val), 0);
  return addDigits(b);
};
num = 38;
console.log(addDigits(num));
