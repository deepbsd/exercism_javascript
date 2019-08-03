
const largestProduct = (numstring, length) => {
//export const largestProduct = (numstring, length) => {
    let numArr = numstring.split('').map(val => parseInt(val,10),0);
    let start = 0; let end = length;
    let slice = numArr.slice(start,end)
    let product
    let largestProduct = 0
    while (slice !== numArr.slice(numArr.length-length,numArr.length)){
        product = slice.reduce( (total, curval, curIndex) => curval * total, 1)
        console.log(product)
        if (product>largestProduct) largestProduct = product
        slice = numArr.slice(start+length,end+length)
    }
    console.log(largestProduct)
};


largestProduct('345123', 3)
