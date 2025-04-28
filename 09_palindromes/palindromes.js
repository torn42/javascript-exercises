const palindromes = function (str) {
  const rawString = str
    .toLowerCase()
    .split(', ')
    .join('')
    .split('')
    .filter((item) => item !== '.' && item !== ' ' && item !== '!');
  console.log(
    rawString.join(''),
    rawString.reverse().join(''),
    rawString.join('') === rawString.reverse().join('')
  );
  return rawString.join('') === [...rawString].reverse().join('');
};

// Do not edit below this line
module.exports = palindromes;
