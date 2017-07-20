// I guess this is rather verbose.  Maybe I'll righten it up sometime.

class Triangle {

  constructor (a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
  }

  isPos(){
    if ((this.a>0) && (this.b>0) && (this.c>0)) { return true; }
    return false;
  }
  sidesCorrect(){
    if ( ((this.a+this.b)>this.c) && ((this.a+this.c)>this.b) && ((this.b+this.c)>this.a) ) { return true; }
    return false;
  }
  kind(){
    // I think this check should be inside the constructor, but, oh well...
    if ((!this.isPos()) || (!this.sidesCorrect())){
      throw new Error('This is not a triangle!');
    }
    if ((this.a===this.c) && (this.a===this.b) && (this.b===this.c)) { return 'equilateral'; }
    if ((this.a===this.c) || (this.a===this.b) || (this.b===this.c)) { return 'isosceles'; }
    else  return 'scalene';
  }
}

module.exports = Triangle;
