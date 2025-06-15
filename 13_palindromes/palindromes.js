const palindromes = function (phrase) {
  const blacklist = ["!", " ", ".", ","];
  phrase = phrase
    .toLowerCase()
    .split("")
    .filter((a) => !blacklist.includes(a));
  return phrase.toReversed().toString() === phrase.toString();
};

// Do not edit below this line
module.exports = palindromes;
