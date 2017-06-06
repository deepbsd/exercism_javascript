var Pangram = function(str) {
  this.text = str;
};

Pangram.prototype.isPangram = function() {
  if (this.text === undefined) { return false; }
  var str = this.text.toLowerCase();
  var alphab = 'abcdefghijklmnopqrstuvwxyz';
  for (var c = 0; c < alphab.length; c++) {
    if (!str.includes(alphab[c])) {
      return false;
    }
  }
  return true;
}

module.exports = Pangram;
