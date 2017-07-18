// Transforms scrabble scores from 2: ['a', 'b', 'c']
// format to 'a': 2 'b': 2  and so forth
class etl {
  transform(oldObj){
    var newObj = {};
    for (var [points,letters] of Object.entries(oldObj)){
      letters.forEach(function(letter){
        newObj[letter.toLowerCase()] = Number(points);
      });
    }
    return newObj;
  }
}

module.exports = etl;
