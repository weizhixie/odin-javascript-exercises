const sumAll = function(firstInt, secondInt) {
    let sum = 0;
    let smallInt = firstInt;
    let largeInt = secondInt;

    if ( firstInt < 0 || secondInt < 0 || 
        !Number.isInteger(firstInt) || !Number.isInteger(secondInt) ) 
    {
        return 'ERROR';
    }

    if ( firstInt > secondInt)
    {
        largeInt = firstInt;
        smallInt = secondInt
    }

    for (let i = smallInt; i <= largeInt; i++)
    {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
