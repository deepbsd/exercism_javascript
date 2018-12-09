
function SecretHandshake (num) {
    this.number = num;
    if (typeof this.number !== 'number'){
        throw new Error("Handshake must be a number");
    }
}

SecretHandshake.prototype.commands = function () {
  let arr = [ "wink", "double blink", "close your eyes", "jump" ];

  // use these variables
  let num = this.number;
  let handshake = [];

  let binaryStr = num.toString(2);
  // pretend 1,2,4,8,16 starts from left...
  reverseStr = binaryStr.split("").reverse().join("");

  

  // start counting significant bits as if from right, but actually from left
  for (let c=0; c<reverseStr.length; c++){

      // If a number greater than '10000' in binary is passed in, reverse the order
      if (c>3){ 
          handshake.shift(c%4);
          //handshake.shift();
      }

      if (reverseStr[c] === '1'){ 
          if (arr[c]){
              handshake.push(arr[c])
          }else{
              //arr.reverse()
              handshake.push(arr[c%4])
          }
      }

      //if (reverseStr[c] === '1' && c >= 5){ handshake = handshake.reverse(); }
  }

  // reverse order of operations if more than '10000'
  //if (this.number > 16){ handshake = handshake.reverse(); }

  console.log(`NUM: ${num}  STR: ${binaryStr}  HANDSHAKE: ${handshake} `)
   
  return handshake;


}

module.exports = SecretHandshake;

