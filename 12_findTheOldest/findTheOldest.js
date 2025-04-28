const findTheOldest = function (arr) {
  const currentYear = new Date().getFullYear();
  const getAge = (person) =>
    (person.yearOfDeath || currentYear) - person.yearOfBirth;
  return arr.reduce(
    (oldest, current) => (getAge(oldest) > getAge(current) ? oldest : current),
    arr[0]
  );
};

// Do not edit below this line
module.exports = findTheOldest;
