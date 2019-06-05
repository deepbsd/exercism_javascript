
export const validate = (number) => {
    let numbers = `${number}`.split("").map((elem) => parseInt(elem,10));
    return numbers.reduce((total,number) => total + Math.pow(number, numbers.length),0) === Number(number);
}
