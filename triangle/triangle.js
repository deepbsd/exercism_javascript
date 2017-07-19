class Triangle {

  constructor (a, b, c) {
    this.side_a = a;
    this.side_b = b;
    this.side_c = c;
  }

  //this.isTriangle = isTriangle(this.a, this.b, this.c);
  // if (!(this.isTriangle)) {
  //   throw new Error('This is not a triangle.');
  // }

  isTriangle(a,b,c){
    if ((isPos(a,b,c)) && (sidesCorrect(a,b,c))) { return true; }
    return false;
  }
  isPos(a,b,c){
    if ((a>0) && (b>0) && (c>0)) return true;
    return false;
  }
  sidesCorrect(a,b,c){
    if ( ((a+b)>c) || ((a+c)>b) || ((b+c)>a) ) return true;
    return false;
  }
  kind(a,b,c){
      if ((a===c) && (a===b) && (b===c)) return 'equilaterial';
      if ((a===c) || (a===b) || (b===c)) return 'isosceles';
      else  return 'scalene';
  }
}
