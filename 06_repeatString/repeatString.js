const repeatString = function(string, num) {
    let n = [];
    for (let i = 0; i < num; i++) {
        n.push(string);
    }
    return n.join("");
};

// Do not edit below this line
module.exports = repeatString;
