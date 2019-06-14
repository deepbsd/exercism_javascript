
export class NucleotideCounts {
  static parse(dnaStrand) {
    let nucleotides = {'A':0, 'C':0, 'G':0, 'T':0};
    dnaStrand.split('').forEach(function(symbol){
      if (Object.keys(nucleotides).includes(symbol)) nucleotides[symbol]+=1;
      else throw "Invalid nucleotide in strand";
    })
    return Object.values(nucleotides).join(" ");
  }
}
