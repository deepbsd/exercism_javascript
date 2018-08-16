
function SecretHandshake (num) {
    this.number = num;
}

SecretHandshake.prototype.commands = function () {
  const arr = [ "wink", "double blink", "close your eyes", "jump" ];
  let count = 0;
  let num = this.number;
  let handshake = [];

  

  while (num != 0) {
      //console.log(`num: ${num}  num>>1: ${num>>1}  handshake: ${handshake}`)
      num = num >> 1;
      //handshake.push(arr.shift());
      handshake = (count<4) ? [ arr.shift() ] : handshake.push(arr.shift()) ;
      count = (count>=4) ? 0 : count++ ;
      console.log("handshake: ", handshake )
  }


  return handshake;


}

module.exports = SecretHandshake;

