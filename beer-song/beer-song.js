var BeerSong = function() {}

BeerSong.prototype.verse = function (num) {
  if (typeof num !== 'number') throw new Error('BeerSong.verse expects a verse number');
  var num1 = num, num2 = num1; 
  var num3 = num-1;
  var str1 = 'Take one down and pass it around';
  var str2 = 'Go to the store and buy some more';
  var str3 = 'Take it down and pass it around';
  var bottles1 = 'bottles', bottles2 = bottles1;
  var action = str1;

  if (num === 2)  bottles2 = 'bottle';
  

  if (num === 1) {
    bottles1 = 'bottle'; bottles2 = 'bottles';
    num3 = 'no more';
    action = str3;
  }

  if (num === 0) {
    num1 = 'No more';
    num2 = 'no more';
    num3 = 99;
    action = str2;
  }

  var template = `${num1} ${bottles1} of beer on the wall, ${num2} ${bottles1} of beer.\n${action}, ${num3} ${bottles2} of beer on the wall.\n`;


  return template;
}

BeerSong.prototype.sing = function (start, end=0) {
  if (typeof start !== 'number') throw new Error('BeerSong.sing expects a starting verse number');
  
  var output = '';

  for (var n=start; n>=end; n--){
    if (n===end) output += this.verse(n);
    else  output += this.verse(n)+'\n';      
  }

  return output;
}

module.exports = BeerSong;
