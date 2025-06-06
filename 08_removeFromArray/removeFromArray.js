const removeFromArray = function(arr, ...elements) {
    const newArr = [];
    arr.forEach(e => {
        if (!elements.includes(e)) {
            newArr.push(e);
        }
    });
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
