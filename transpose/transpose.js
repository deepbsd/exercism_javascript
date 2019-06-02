
export const transpose = inputArr => {
    let result = [];
    let proxy = inputArr.concat().sort();
    if (!inputArr.length) return [];

    let cols = proxy.sort((a,b) => {return b.length - a.length})[0].length;  // find longest element
    console.log("COLS: ",cols)
    let rows = inputArr.reduce(function (a,b){ return a.length > b.length ? a : b; })

    for(let col=0; col<cols; col++){
        let newstring = '';
        inputArr.forEach((element) => {
            console.log("element: ",element[col])
            if (element[col] ) newstring += element[col];
            //if ('undefined') newstring += ' ';
            //if (newstring !== '') result.push(newstring);
        });
        if (newstring !== '') result.push(newstring);
    }

    console.log("result: ",result)
    return result;
}
