
export const transpose = inputArr => {
    if (!inputArr.length) return [];
    let result = [];
    let rows = Math.max(...inputArr.map(element => element.length));

    for(let col=0; col<rows; col++){
        let newstring = '';
        inputArr.forEach((element) => {
            element[col] ? newstring += element[col] : newstring += ' ';
        });
        result.push(newstring);
    }
    for (let elem=rows-1; elem>=0; elem--){
        result[elem] = result[elem].trimRight();
        if (result[elem].length === inputArr.length) break;
    }
    return result;
}
