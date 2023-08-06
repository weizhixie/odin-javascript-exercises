const removeFromArray = function(array, ...values) {
    const filteredArray = array.filter( (arr) => {
        return !values.some( (val)=> {
            return arr === val; 
        });
    });

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
