function Binary(input) {
  this.input = input;
}

var powers = [1,2,4,8,16,32,64,128,256,512,1024,2048,4096];

Binary.prototype.toDecimal = function() {
  if (!/^['1','0']+$/.test(this.input)){
    return 0;
  }
  var result = 0;
  var input = this.input.split('').reverse();
  input.forEach(function(val, i) {
    result += parseInt(val)*powers[i]
  })
  return result;
}

module.exports = Binary;
