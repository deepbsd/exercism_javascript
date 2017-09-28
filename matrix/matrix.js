function Matrix(string){
  this.string = string;
  this.numrows = (this.string.match(/\n/g) || []).length+1;
  this.rows = createRows(this.string);
  //this.columns = createColumns(this.string);

  function createRows(string){
    var horiz = [];
    var numrows = (string.match(/\n/g) || []).length+1;
    var numcols = string.slice(0,string.indexOf('\n')+1).replace(/\s/g,'').split('').length;
    var slicestart = 0; var sliceend = numcols+1;
    for (var n=0; n < numrows; n++){
      horiz[n] = string.slice(slicestart, sliceend).replace(/\s/g,'').split(' ')
      slicestart = sliceend+1;
      sliceend = slicestart + numcols + 1;
    }
    console.log('numrows: ',numrows)
    return horiz;
  }

  // function createColumns(string){
  //   var vert = [];
  //   for (var n=0; n < this.numrows; n++){
  //     vert[n] = this.rows[n]
  //   }
  //   return vert;
  // }

}

module.exports = Matrix;
