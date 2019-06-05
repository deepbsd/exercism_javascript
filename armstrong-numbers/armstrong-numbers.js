
export const validate = (number) => {
    let numbers = `${number}`.split("").map((elem) => parseInt(elem,10));
    console.log("Numbers: ",numbers);
    //console.log("Reduce: ",numbers.reduce((sum,number) => sum += Math.pow(number, numbers.length)))
    //console.log("Number itself: ", parseInt(number,10))

    console.log("sum of powered ints: ",numbers.reduce((sum,number) => sum += Math.pow(number,numbers.length))+9**4);
    return numbers.reduce((sum,number) => sum += Math.pow(number,numbers.length)) === parseInt(number,10);


    //console.log("first: ",Math.pow(numbers[0], numbers.length));
    //numbers.reduce((sum,number) => {
    //    console.log("reducing number: ",number, " power: ",Math.pow(number, numbers.length));
    //    sum = number + Math.pow(number, numbers.length);
    //})
    //    
    //console.log("total sum: ",sum);
    //    //   === parseInt(number,10);
}
