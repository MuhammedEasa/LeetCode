var addStrings = function(num1, num2) {
    let a = BigInt(num1)
    let b = BigInt(num2)
    let c= a+b;
    return c.toString()
  };
  let num1 = "11", num2 = "123"
  console.log(addStrings(num1,num2));