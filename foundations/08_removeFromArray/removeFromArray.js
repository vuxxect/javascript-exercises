const removeFromArray = function(arr, ...itemToDel) {
    return arr.filter(item => !itemToDel.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
