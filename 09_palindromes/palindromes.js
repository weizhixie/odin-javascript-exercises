const palindromes = function (str) {
    const reversedStr = str.match(/[a-z0-9]/gi).reverse().join("").toLowerCase();

    for (let i = 0; i < str.length; i++) {
        if (str.replace(/[^a-z0-9]/gi, '').toLowerCase()[i] !== reversedStr[i]) {
            return false;
        }
    }
    return true;

    // TOP github solution
    // const processedString = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    // return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
