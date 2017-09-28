var findFactors = function(n){
  var result = [];
  var factor = 2;
  var input = parseInt(n);
  while (input > 1) {
    if (input%factor === 0){
      result.push(factor);
      input /= factor;
    } else {
      factor += 1;
    }
  }
  return result;
}

var primeFactors = {
  for: findFactors
};

module.exports = primeFactors;
