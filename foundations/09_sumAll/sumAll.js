function isPositiveInteger(x) {
    return Number.isInteger(x) && x > 0;
}

function calcSum(minValue, maxValue) {
    for (let i = minValue; i <= maxValue; i++) {
        sum += i;
    }
    return sum;
}

const sumAll = function(a, b) {
    let sum = 0;

    if (!isPositiveInteger(a) || !isPositiveInteger(b)) {
        return 'ERROR';
    } else if (a < b){
        return calcSum(a, b);
    } else {
        return calcSum(b, a);
    }
};
// Do not edit below this line
module.exports = sumAll;
