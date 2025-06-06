const sumAll = function(first, second) {
    if (isNaN(first) || isNaN(second)) return "Error";

    const min = first < second ? first : second;
    const max = first > second ? first : second;

    let sum = min;
    for (let i = min; i < max; i++) {
        sum += i + 1;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
