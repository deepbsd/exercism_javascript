
// ES6 solution...
var reverseString = function(string) {
    return [...string].reverse().join('');
};


module.exports = reverseString;
