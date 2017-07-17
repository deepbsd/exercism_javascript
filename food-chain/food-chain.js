  // Originally I had simply used each verse in an array.  That worked,
  // but it just seemed not very programmatic, if that's a word.  Since
  // then, I've switched to what you see below, which is a lot of lines
  // for a little program, but I kind of like it for now...

function FoodChain() {

  var repeat = 'I know an old lady who swallowed a ';

  var theSong = {

        1: {
              versenum: 1,
              food: 'fly',
              verse:  function() {
                return repeat+this.food+'.'+'\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
              }
        },
        2: {
              versenum: 2,
              food: 'spider',
              verse: function() {
                var why = bridge(this.versenum);
                return repeat+this.food+'.'+'\nIt wriggled and jiggled and tickled inside her.\n'+why;
              }
        },
        3: {
               versenum: 3,
               food: 'bird',
               verse: function(){
                 var why = bridge(this.versenum);
                 return repeat+this.food+'.'+'\nHow absurd to swallow a bird!\n'+why;
               }
        },
        4: {
               versenum: 4,
               food: 'cat',
               verse: function(){
                 var why = bridge(this.versenum);
                 return repeat+this.food+'.'+'\nImagine that, to swallow a cat!\n'+why;
               }
        },
        5: {
               versenum: 5,
               food: 'dog',
               verse: function(){
                 var why = bridge(this.versenum);
                 return repeat+this.food+'.'+'\nWhat a hog, to swallow a dog!\n'+why;
               }
        },
        6: {
               versenum: 6,
               food: 'goat',
               verse: function(){
                 var why = bridge(this.versenum);
                 return repeat+this.food+'.'+'\nJust opened her throat and swallowed a goat!\n'+why;
               }
        },
        7: {
               versenum: 7,
               food: 'cow',
               verse: function(){
                 var why = bridge(this.versenum);
                 return repeat+this.food+'.'+'\nI don\'t know how she swallowed a cow!\n'+why;
               }
        },
        8: {
               versenum: 8,
               food: 'horse',
               verse: function(){
                 var why = bridge(this.versenum);
                 return repeat+this.food+'.'+'\nShe\'s dead, of course!\n';
               }
        }
  }

  function bridge(verse) {
        //need to repeat this until we get back to the fly...
        var current_verse_num = verse;
        var bridge_string = '';
        for (var v = current_verse_num; v >= 2; v--) {
          bridge_string += 'She swallowed the '+theSong[v].food+' to catch the '+theSong[v-1].food+'.\n' ;
          bridge_string = bridge_string.replace('catch the spider.\n', 'catch the spider that wriggled and jiggled and tickled inside her.\n');
          if (v === 2) { bridge_string += "I don't know why she swallowed the fly. Perhaps she\'ll die.\n"; }
        }
        return bridge_string;
  }


  function verse(number) {
        //return song[number-1];
        return theSong[number].verse();
  }

  function verses(start, end){
        var lyrics = "";
        for (var v=start; v <= end; v++) {
                lyrics += verse(v)+'\n';
        }
        return lyrics;
  }

  return {
        repeat: repeat,
        theSong: theSong,
        bridge: bridge,
        verse: verse,
        verses: verses
  };

};


module.exports = FoodChain;
