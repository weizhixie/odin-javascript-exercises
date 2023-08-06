const repeatString = function(string, num) {
    if (num < 0) return "ERROR";
    else if (num < 1) return "";
    else
    {
        let repeatString = string;
        for(let i = 1; i < num; i++)
        {
            repeatString += string;
        }
        return repeatString;
    }
};

// Do not edit below this line
module.exports = repeatString;
