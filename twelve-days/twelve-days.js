export const recite = (start,end=start) => {
//const recite = (start,end) => {

    const days = ["first", "second", "third", "fourth","fifth", "sixth","seventh",
            "eighth", "ninth", "tenth", "eleventh", "twelfth"]

    const gifts = [
            " and a Partridge in a Pear Tree",
            " two Turtle Doves",
            " three French Hens",
            " four Calling Birds",
            " five Gold Rings",
            " six Geese-a-Laying",
            " seven Swans-a-Swimming",
            " eight Maids-a-Milking",
            " nine Ladies Dancing",
            " ten Lords-a-Leaping",
            " eleven Pipers Piping",
            " twelve Drummers Drumming",
            ]

    let result = [], verse = '', num, lineending;

    if (end === start) num = start-1;
    else num = end;

    function makeverse(versenum){
        for (let daynum of [...Array(versenum)].map( (_,i) => i)){
            let day = days[daynum]
            let refrain = `On the ${day} day of Christmas my true love gave to me:`
            if (day == "first") verse = refrain + "".concat(gifts.slice(0,daynum+1).reverse()).replace("and ", "") + ".\n"
            else verse = refrain.concat(gifts.slice(0,daynum+1).reverse()) + ".\n"
            result.push(verse)
        }
        return result[num]
    }
    

    let final = '';

    console.log("start verse: ",start," end: ",end)

    for (let versenum = start; versenum < end; versenum++) {
        //if (versenum > 1) final += makeverse(versenum) + '\n'
        //else final += makeverse(versenum) 
        final += makeverse(versenum)
    }

    final += makeverse(start)

    console.log("final: ",final)

    return final

};


