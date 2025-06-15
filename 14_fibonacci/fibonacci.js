const fibonacci = function(number) {
  number = Number(number);
  if (number < 0) return "OOPS";
  let a = 0;
  let b = 1;
  let sum = 0;

  for (let i = 0; i < number; i++) {
    a = sum;
    sum = a + b;
    console.log(a + " + " + b + " = " + sum);
    b = a;
  }

  return sum;
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci(10));