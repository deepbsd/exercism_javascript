export const largestProduct = (numstring, length) => {
    if (numstring.length < length ) throw 'Slice size is too big.'
    if (length===0 || numstring==='') return 1
    let numArr = numstring.split('').map(val => parseInt(val,10),0);
    let product, largestProduct = 0

    for (let i=0; i<=numArr.length-length; i++){
        if (isNaN(numArr[i]) || length < 0 ) throw 'Invalid input.'
        let slice = numArr.slice(i,i+length)
        if (! slice.includes(0)) product = slice.reduce( (total, val) => total*val )
        if (product>largestProduct) largestProduct = product
    }

    return largestProduct;
};

