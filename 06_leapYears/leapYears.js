const leapYears = function(year) {
    if ( Number.isInteger( year / 100 ) && !Number.isInteger( year / 400 ) ||
     year % 4 !== 0 )
    {
        return false; 
    }
    
    if (year % 4 === 0) return true;
};

// Do not edit below this line
module.exports = leapYears;
