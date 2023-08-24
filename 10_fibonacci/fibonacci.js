const fibonacci = function (num) {
    num = Number(num);
    if (num === 0) return 0;
    if (num === 1 || num === 2) return 1;
    if (num < 0 || isNaN(num)) return "OOPS";

    let preNum = 1;
    let currentNum = 1;
    let outputNum = 0;

    for (let i = 3; i <= num; i++) {
        outputNum = preNum + currentNum;
        preNum = currentNum;
        currentNum = outputNum;
    }

    return outputNum;
};

// Do not edit below this line
module.exports = fibonacci;
