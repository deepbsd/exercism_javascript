
export class ISBN {
  constructor(string) {
    this.numArr = string.split("").map(num => parseInt(num,10)).filter(num => Number.isInteger(num));
    if (string.endsWith('X')) this.numArr[this.numArr.length] = 10;
  }

  isValid() {
    return  this.numArr.reduce((total,curVal,idx,arr) => total += (arr.length-idx)*curVal, 0) % 11 === 0; 
  }
}
