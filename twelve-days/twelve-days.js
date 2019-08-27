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

    let result = [], verse = '';


    for (let daynum of [...Array(start)].map( (_,i) => i)){
        let day = days[daynum]
        let refrain = `On the ${day} day of Christmas my true love gave to me:`
        if (day == "first") verse = refrain + "".concat(gifts.slice(0,daynum+1).reverse()).replace("and ", "") + ".\n"
        else verse = refrain.concat(gifts.slice(0,daynum+1).reverse()) + "."
        result.push(verse)
    }
    //console.log(result[start-1])
    return result[start-1]

};


//console.log( recite(4) )
