//
// This is only a SKELETON file for the "Leap" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Year = function(input) {
//
// YOUR CODE GOES HERE
  this.value = input;
};

Year.prototype.isLeap = function() {
//
// YOUR CODE GOES HERE
  if ((this.value % 4 === 0) && (this.value % 400 === 0)) { return true; }
  if ((this.value % 4 === 0) && (this.value % 100 === 0)) { return false; }
  if (this.value % 4 === 0) { return true; }
  return false;
};

module.exports = Year;
