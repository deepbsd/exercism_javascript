export class Words {
    count(string) {
        let countDict = {}; let word; 
        let wordArr = string.toLowerCase().replace(/[\n\t]/g,' ').replace(/\s+/g,' ').trim().split(" "); 

        for (word = 0; word < wordArr.length; word++){
            if (Object.keys(countDict).includes(wordArr[word])) countDict[wordArr[word]] += parseInt(1,10);  
            else  countDict[wordArr[word]] = parseInt(1,10); 
        }
        return countDict;
    }
}



