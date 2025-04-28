const fibonacci = function (n) {
  if (n < 0) return 'OOPS';
  if (n < 2) return +n;
  return +(fibonacci(n - 2) + +fibonacci(n - 1));
};

console.log(fibonacci(1488));

// Do not edit below this line
module.exports = fibonacci;
