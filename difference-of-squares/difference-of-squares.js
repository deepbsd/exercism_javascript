export class Squares {
    constructor(number){
        this.numRange = this.range(1,number);
        this.squareOfSum = Math.pow(this.sumAll(this.numRange), 2);
        this.sumOfSquares = this.sumOfSquares(this.numRange);
        this.difference = Math.abs(this.squareOfSum - this.sumOfSquares);
    }

    range(start,end){
        return (new Array(end-start+1)).fill(undefined).map((_, i) => i + start);
    }

    sumAll(arr){
        return arr.reduce((sum,elem) => sum += elem);
    }

    sumOfSquares(arr){
        return arr.reduce((sum, elem) => sum += Math.pow(elem, 2));
    }

}
