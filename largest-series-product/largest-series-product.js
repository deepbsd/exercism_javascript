//
// This is only a SKELETON file for the 'Largest Series Product' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const largestProduct = (numstring, length) => {
    let numArr = numstring.split().map(val => parseInt(val,10),0);
    let largestProduct = 0;

    for (let i=0; i<numArr.length-length; i++){
        let product = numArr.reduce( (total, curval, curIndex) => something good here... )
    }
};
