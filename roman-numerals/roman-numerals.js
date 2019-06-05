export const toRoman = (number) => {
    
    
    let romans = ['I', 'IV', 'V', 'IX', 'X', 'XL', 'L', 'XC', 'C', 'CD', 'D', 'CM', 'M'].reverse();
    let integers = [1,4,5,9,10,40,50,90,100,400,500,900,1000].reverse();

    let result = "";

    for (let n=0; n<integers.length; n++){
        let count = parseInt(number/integers[n], 10);
        //result += romans[n] * count;
        result += romans[n].repeat(count);
        number -= integers[n] * count;
    }

    return result;

}

