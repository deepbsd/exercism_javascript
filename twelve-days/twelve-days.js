//export const recite = (number) => {
const recite = (number) => {

    const days = ["first", "second", "third", "fourth","fifth", "sixth","seventh",
            "eighth", "ninth", "tenth", "eleventh", "twelfth"]

    const gifts = [
            "and a Partridge in a Pear Tree",
            "two Turtle Doves",
            "three French Hens",
            "four Calling Birds",
            "five Gold Rings",
            "six Geese-a-Laying",
            "seven Swans-a-Swimming",
            "eight Maids-a-Milking",
            "nine Ladies Dancing",
            "ten Lords-a-Leaping",
            "eleven Pipers Piping",
            "twelve Drummers Drumming",
            ]

    let result = [], verse = ''

    for (daynum of [0,...Array(number-1)].map( (_,i) => i)){
        let day = days[daynum]
        let refrain = `On the ${day} day of Christmas my true love gave to me: `
        if (day == "first") verse = refrain + "".concat(gifts[daynum]).replace("and ","") + "."
        else verse = refrain + ", ".concat(gifts[daynum]) + "."
        result += verse
    }
    return result

};


console.log( recite(4) )
