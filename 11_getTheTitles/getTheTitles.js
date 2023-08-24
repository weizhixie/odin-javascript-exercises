const getTheTitles = function (books) {
    const bookTitles = [];
    for (const item of books) {
        bookTitles.push(item.title);
    }

    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
