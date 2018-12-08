
function SecretHandshake (num) {
    this.number = num;
    if (typeof this.number !== 'number'){
        throw new Error("Handshake must be a number");
    }
}

SecretHandshake.prototype.commands = function () {
  const arr = [ "wink", "double blink", "close your eyes", "jump" ];
  let count = 0;
  let num = this.number;
  let handshake = [];


  while (num != 0) {
      console.log(`num: ${num}  num>>1: ${num>>1}  handshake: ${handshake}`)
      num = num >> 1;
      //handshake.push(arr.shift());
      handshake = (count<3) ? [ arr.shift() ] : handshake.push(arr.shift()) ;
      if (count>3){ handshake = handshake.reverse() }
      //count = (count>=4) ? 0 : count++ ;
      count = (count<3) ? count++ : 0 ;
      //console.log("handshake: ", handshake )
  }

   
  return handshake;


}

module.exports = SecretHandshake;

