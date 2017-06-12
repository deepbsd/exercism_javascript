function Gigasecond (input) {
  this.indate = input; 
}

Gigasecond.prototype.date = function () {
  var time = this.indate.getTime();
  // express Gigasecond in milliseconds...
  return new Date(time + 1000000000000);

}

module.exports = Gigasecond;
