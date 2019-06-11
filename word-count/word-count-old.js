////////////////////////////////////////////////////////////////////////
//export class Words {
//
//    constructor(string){
//    
//        //const length = scoreArray.length;
//        //const sorted = [...scoreArray].sort((a,b) => {return b-a});
//        //this.scores = scoreArray;
//        //this.latest = scoreArray[length-1];
//        //this.personalBest = sorted[0];
//        //this.personalTopThree = sorted.slice(0,3);
//
//        this.count = this.getcount(string);
//    };
//
//
//    getcount(string){
//        console.log("text ",string);
//        let wordList = string.split(" ");
//        return wordList.reduce(function(wordCount,word){
//            wordCount.hasOwnProperty(word) ? wordCount[word]++ : wordCount[word] =1;
//            return wordCount;
//        },{});
//    }
//}



//////////////////////////////////////////////////////
export const Words = () => {

    const count = (string) => {

        let countDict = {}; let wordArr = string.split(" "); let word;

        for (word=0; word<wordArr.length; word++){

            if (Object.keys(countDict).includes(wordArr[word])){
                countDict[wordArr[word]] += parseInt(1,10);
            } else {
                countDict[wordArr[word]] = parseInt(1,10);
            }
        }

        console.log("countDict: ",countDict)
        return countDict;
    }
}

///////////////////////////////////////////
//var Words = function(string){
//    let wordList = string.split(" ");
//    return wordList.reduce(function(wordCount,word){
//        wordCount.hasOwnProperty(word) ? wordCount[word]++ : wordCount[word] = 1;
//        return wordCount;
//    },{});
//
//}
//module.exports = Words;


////////////////////////////////////////////////////////////////////////////
//Words = function(string){
//    this.count = this.getcount(string);
//}
//
//Words.prototype.getcount = function(string){
//        let countDict = {}; let wordArr = string.split(" "); let word;
//
//        for (word=0; word<wordArr.length; word++){
//
//            if (Object.keys(countDict).includes(wordArr[word])){
//                countDict[wordArr[word]] += parseInt(1,10);
//            } else {
//                countDict[wordArr[word]] = parseInt(1,10);
//            }
//        }
//
//        console.log("countDict: ",countDict)
//        return countDict;
//
//}



//////////////////////////////////////////////////////////////////////////////
//class Words {
//
//    constructor(){
//        console.log("New Words object created...");
//    }
//
//    count(string){
//        let countDict = {}; let wordArr = string.split(" "); let word;
//
//        console.log("countDict: ",countDict)
//
//        for (word=0; word<wordArr.length; word++){
//
//            if (Object.keys(countDict).includes(wordArr[word])){
//                countDict[wordArr[word]] += parseInt(1,10);
//            } else {
//                countDict[wordArr[word]] = parseInt(1,10);
//            }
//        }
//        return countDict;
//    } 
//
//}
//
//module.exports = Words;
