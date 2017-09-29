function Matrix(string){
  this.string = string;
  this.numrows = (this.string.match(/\n/g) || []).length+1;
  this.rows = createRows(this.string);
  this.columns = createColumns(this.string);

  function createRows(string){
    var horiz = [];
    var newlines = [];
    var numrows = (string.match(/\n/g) || []).length+1;
    for (var c=0; c < string.length; c++){
      if (string.charAt(c) === '\n'){
        newlines.push(c);
      }
    }
    var slicestart = 0;
    for (var n=0; n < numrows; n++){
      sliceend = newlines[n]
      horiz[n] = string.slice(slicestart, sliceend).split(' ');
      horiz[n].forEach(function(val,index){
        horiz[n][index] = parseInt(val);
      })
      slicestart = sliceend+1;
    }
    return horiz;
  }

  function createColumns(string){
    var vert = [];
    var rows = createRows(string);
    var numrows = rows.length;
    var numcols = rows[0].length;

    for (var row=0; row < numcols; row++){
      var temparr = [];
      for (var col=0; col < numrows; col++){
        temparr.push(rows[col][row]);

      }
      vert.push(temparr);
    }
    return vert;
  }
}

module.exports = Matrix;
