
export class HighScores {

    constructor(scoreArray){
    
        let length = scoreArray.length;
        let copyArr = [];
        copyArr = copyArr.concat(scoreArray);
    
        this.sorted = copyArr.sort(function(a,b){return a-b});
        this.scores = scoreArray;
        this.latest = scoreArray[length-1];
        this.personalBest = this.sorted[length-1];
        this.personalTopThree = this.sorted.slice(-3,).reverse();
    }
}

