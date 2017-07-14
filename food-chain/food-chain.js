function FoodChain() {

  // This works but there is a lot of repetition here.  I should alter this...
  // I think I'll change it to be more functional and modular.  But it's not done yet!
  // I was thinking of something like:

  var repeat = 'I know an old lady who swalled a ';


  var theSong = {

        1: {
              versenum: 1, 
              food: 'fly',
              verse:  function() {
                return repeat+this.food+'.'+'\nI don\'t know why she swallwed the fly. Perhaps she\'ll die.\n';
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
        }
  }

  function bridge(verse) {
        //need to repeat this until we get back to the fly...
        var current_verse_num = verse;
        var bridge_string = '';
        for (var v = current_verse_num; v >= 2; v--) {
          bridge_string += '\nShe swallowed the '+theSong[v].food+' to catch the '+theSong[v-1].food+'.' ;
        }
        return bridge_string;
  }

  // Here's where the working part starts.  I'll remove $song once I get the other parts working...

  var song = [
    "I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    "I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    "I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    "I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    "I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    "I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    "I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\nShe swallowed the cow to catch the goat.\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n",
    "I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n"
  ]

  function verse(number) {
        return song[number-1];
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