export class Series {

    constructor(numstr){
        this.digits = numstr.split('').map( (num) => { return parseInt(num, 10); });
    }

    slices(sliceLength){
        if (sliceLength > this.digits.length) throw "Slice size is too big.";
        let arrSlices = [];
        for (let i=0; i<this.digits.length-sliceLength+1; i++){
            arrSlices = [...arrSlices, this.digits.slice( i, i+sliceLength ) ];
        }
        return arrSlices;
    }

}



