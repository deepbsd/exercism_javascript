
export class HighScores {

    constructor(scoreArray){
    
        const length = scoreArray.length;
        const sorted = [...scoreArray].sort((a,b) => {return b-a});
        this.scores = scoreArray;
        this.latest = scoreArray[length-1];
        this.personalBest = sorted[0];
        this.personalTopThree = sorted.slice(0,3);
    }
}

