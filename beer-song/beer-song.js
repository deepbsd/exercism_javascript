var BeerSong = function() {
}

BeerSong.prototype.verse = function(n1, n2=n1) {
  var start = n1;
  var end = n2;
  var plural = 'bottles';
  var singular = 'bottle';
  var bottles1 = plural;
  var bottles2 = plural;
  var one = 'one';
  var output = '';
  var count;
  

  for (var num=start; num>=end; num--) {
    count = num-1; 
    if (num === 2) { bottles1 = plural; bottles2 = singular; }
    if (num === 1) { 
      bottles1 = singular; 
      bottles2 = plural; 
      one = 'it'; 
      count = 'no more'; 
    }
    if (num === 0) {
      num = 'No more';
      bottles1 = plural;
      str1 = 'Take one down and pass it around,';
      str2 = 'Go to the store and buy some more,';
      count = 99;
      bottles2 = plural;
      template.replace(str1, str2);
    }
    var template = `${num} ${bottles1} of beer on the wall, ${num} ${bottles1} of beer.\nTake ${one} down and pass it around, ${count} ${bottles2} of beer on the wall.\n`
    
    output += template; 
  }

  return output;
}



module.exports = BeerSong;
