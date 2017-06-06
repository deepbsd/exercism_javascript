

var Hamming = function() {};

Hamming.prototype.compute =  function(s1, s2) {
    var diff = 0
    if (s1.length != s2.length) { 
      var err = new Error('DNA strands must be of equal length.');
      throw err;
    }
    
    for (var i = 0; i < s1.length; i++) {
      if (s1[i] != s2[i]) {
        diff++;
      }
    }
    return diff;
}



module.exports = Hamming;
