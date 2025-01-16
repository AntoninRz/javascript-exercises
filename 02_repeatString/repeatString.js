const repeatString = function(word, time) {
    if (time < 0) {
        return "Error";
    } else {
        let string = '';
        for (i = 0; i < time; i++) {
            string += word;
        }
        return string
    }
};

repeatString('hey', 3)

// Do not edit below this line
module.exports = repeatString;
