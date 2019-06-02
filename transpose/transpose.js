
export const transpose = inputArr => {
    if (!inputArr.length) return [];
    let result = [];
    let proxy = inputArr.concat().sort();

    let cols = proxy.sort((a,b) => {return b.length - a.length})[0].length;  // find longest element
    let rows = inputArr.reduce(function (a,b){ return a.length > b.length ? a : b; });

    for(let col=0; col<cols; col++){
        let newstring = '';
        inputArr.forEach((element) => {
            if (element[col] ) newstring += element[col];
            if (element[col] === undefined)  newstring += ' '; 
        });
        result.push(newstring);
    }
    return result;
}
