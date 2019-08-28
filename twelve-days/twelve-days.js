
const days = [null, "first", "second", "third", "fourth","fifth", "sixth","seventh",
            "eighth", "ninth", "tenth", "eleventh", "twelfth"]

const gifts = [
            null,
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

const sayPrefix = dayNum => 
   `On the ${days[dayNum]} day of Christmas my true love gave to me: `;


const sayGifts = verse => Array.from(Array(verse))
    .map((_,i) => gifts[verse - i]).join(', ');

export function recite(start, end=null){

    return Array.from(Array((end || start) - start + 1)) 
        .map((_,i) => i + start)
        .map( number => `${sayPrefix(number)}${sayGifts(number)}.\n`.replace(': and', ':') )
        .join('\n')
};


