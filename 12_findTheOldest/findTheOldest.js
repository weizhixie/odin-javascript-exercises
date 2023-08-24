const findTheOldest = function (people) {
    return people.map(person => {
        if (!person.yearOfDeath) {
            person.yearOfDeath = new Date().getFullYear();
        }
        return person;
    }).sort((a, b) => (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))[0];
};

// Do not edit below this line
module.exports = findTheOldest;
