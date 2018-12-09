function SecretHandshake (num) {
    this.number = num;
    if (typeof this.number !== 'number'){
        throw new Error("Handshake must be a number");
    }
}

SecretHandshake.prototype.commands = function () {
  let arr = [ "wink", "double blink", "close your eyes", "jump" ];
  let num = this.number;
  let handshake = [];
  let binaryStr = num.toString(2);

  // pretend 1,2,4,8,16 starts from left...
  reverseStr = binaryStr.split("").reverse().join("");

  // start counting significant bits as if from right, but actually from left
  for (let c=0; c<reverseStr.length; c++){

      if (reverseStr[c] === '1'){ 
          if (arr[c]) handshake.unshift(arr[c])
      }
  }
  return handshake;
}

module.exports = SecretHandshake;

