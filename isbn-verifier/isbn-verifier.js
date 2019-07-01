
export class ISBN {
  constructor(string) {
    this.string = string.replace(/[- ]/g, '');
    this.numArr = this.string.split("");
  }

  isValid() {
    if (this.numArr.length != 10 || this.string === '') return false;
    if (this.numArr[9] === 'X') this.numArr[9] = 10;
    let newNums = this.numArr.map( num => (isNaN(parseInt(num,10)) ? -1000 : parseInt(num,10)));
        
    return  newNums.reduce((total,curVal,idx,arr) => total += (arr.length-idx)*curVal, 0) % 11 === 0; 
  }
}
