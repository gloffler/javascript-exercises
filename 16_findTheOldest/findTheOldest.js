const findTheOldest = function (arr) {
  return arr.toSorted((a, b) => {
    const deathYearA = a.yearOfDeath || new Date().getFullYear();
    const deathYearB = b.yearOfDeath || new Date().getFullYear();
    const ageA = deathYearA - a.yearOfBirth;
    const ageB = deathYearB - b.yearOfBirth;

    return ageB - ageA;
  })[0];
};

// Do not edit below this line
module.exports = findTheOldest;
