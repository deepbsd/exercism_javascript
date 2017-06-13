function Isogram (word) {
  // Take out whitespace, hyphens, then convert to all lowercase
  this.word = word.replace(/\s*-*/g, '').toLowerCase();
}

Isogram.prototype.isIsogram = function () {
  var input = this.word;
  // see if each successive character is included again in 
  // remaining slice of characters
  for (var i=0; i<input.length-1; i++) {
    if (input.slice(i+1, input.length).includes(input[i])) {
      return false;
    }
  }
  return true;

}

module.exports = Isogram;
