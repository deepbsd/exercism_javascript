

var DnaTranscriber = function() {};

DnaTranscriber.prototype.toRna =  function(string) {
  var err = new Error('Invalid input');
  var rna = '';
  
  for (var c = 0; c < string.length; c++) {
    if (!"GCTA".includes(string[c])) { 
      throw err;
    }

    if (string[c] === 'G') { rna += 'C'; }
    if (string[c] === 'C') { rna += 'G'; }
    if (string[c] === 'T') { rna += 'A'; }
    if (string[c] === 'A') { rna += 'U'; }
  }

  return rna;

}

module.exports = DnaTranscriber;
