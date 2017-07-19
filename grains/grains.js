// This program asumes you have a chessboard (with 64 squares) and
// that you place grains of rice on each successive square up to the
// 64th square.  Square 1 gets 1 grain of rice, square 2 gets double that
// amount, square 3 gets double that last amount, and so on.
// So each square is actually 2 raised to the power of the previous square number.
// Square 1 is 2**0, square 2 is 2**1, square 3 is 2**2 and so on.

// Since JS has trouble representing large numbers as integers, we
// use the big integer library.
var bigInt = require('./big-integer');

class Grains {
  //I don't need the constructor--I'm just in the habit of having one...
  constructor(){
    this.bigTotal = this.total();
  }
  square(num){
    return bigInt(2).pow(num-1).toString();
  }
  total(){
    return bigInt(2).pow(64).subtract(1).toString();
  }
}

module.exports = Grains;
