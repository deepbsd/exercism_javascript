
function SecretHandshake (num) {
    this.number = num;
    if (typeof this.number !== 'number'){
        throw new Error("Handshake must be a number");
    }
}

SecretHandshake.prototype.commands = function () {
  let arr = [ "wink", "double blink", "close your eyes", "jump" ];
  const replacementArr = [ "wink", "double blink", "close your eyes", "jump" ];
  let count = 0;
  let num = this.number;
  let handshake = [];


  while (num != 0) {
      num = num >> 1;
      //handshake.push(arr.shift());
      if (count>3){ 
          arr = replacementArr;
      } 
      //handshake = (count<3) ? [ arr.shift() ] : handshake.push(arr.pop()) ;
      handshake = (count<4) ? [ arr.shift() ] : [ ...handshake, arr.shift() ]
      console.log(`num: ${this.number}  num>>1: ${num>>1} count: ${count}  handshake: ${handshake} ==>ARR: [${arr}]`)
      count++;
      //count = (count>=4) ? 0 : count++ ;
      //count = (count<3) ? count++ : 0 ;
      //console.log("handshake: ", handshake )
  }

   
  return handshake;


}

module.exports = SecretHandshake;

