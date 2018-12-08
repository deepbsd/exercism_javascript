
function SecretHandshake (num) {
    this.number = num;
    if (typeof this.number !== 'number'){
        throw new Error("Handshake must be a number");
    }
}

SecretHandshake.prototype.commands = function () {
  let arr = [ "wink", "double blink", "close your eyes", "jump" ];


  // arr will get consumed.  replenish with replacment
  const replacementArr = [ "wink", "double blink", "close your eyes", "jump" ];


  // use these variables
  let count = 0;
  let num = this.number;
  let handshake = [];


  // Keep shifting bits until we hit zero
  while (num != 0) {
      num = num >> 1;
      
      // replenish arr as needed
      if (count>3){ 
          arr = replacementArr;
      } 
      
      // Just one value in the answer until we get to '8', then start appending
      handshake = (count<4) ? [ arr.shift() ] : [ ...handshake, arr.shift() ];
      
      // for debugging --- check the values
      console.log(`###num: ${this.number}  num>>1: ${num>>1} count: ${count}  handshake: ${handshake} ==>ARR: [${arr}]`);

      // increment the count always
      count++;
  }

   
  // If a number greater than '10000' in binary is passed in, reverse the order
  if (this.number >= 16){ handshake = handshake.reverse(); }
  return handshake;


}

module.exports = SecretHandshake;

