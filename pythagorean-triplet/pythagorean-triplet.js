export class Triplet {
  constructor(a,b,c) {
    this.numbers = [a,b,c].sort( (a,b) => a - b );
  }

  sum() {
    return this.numbers.reduce( (sum, curVal) => sum += curVal, 0);
  }

  product() {
    return this.numbers.reduce( (product,curVal) => product *= curVal,1);
  }

  isPythagorean() {
    return this.numbers[0]**2 + this.numbers[1]**2 === this.numbers[2]**2;
  }

  static where(obj) {
    let min = obj.minFactor || 1, max = obj.maxFactor || 10, sum = obj.sum || null; 
    let triplets = [];
    for (let x=min; x<=max; x++){
        for (let y=min; y<=max; y++){
            for (let z=min; z<=max; z++){
                let trip = new Triplet(x,y,z);
                if (trip.isPythagorean()) triplets.push(trip)
            }
        }
    }
    let finalTriplets = triplets.filter( (curVal, index, arr) => JSON.stringify(curVal) !== JSON.stringify(arr[index+1]) )
    if (obj.sum) finalTriplets = finalTriplets.filter( (curVal, index, arr) => curVal.sum() === obj.sum );

    if (obj.sum) {
      let set = new Set(finalTriplets.map(JSON.stringify));
      finalTriplets = Array.from(set).map(JSON.parse).map(obj => new Triplet(...obj.numbers))
    }

    return finalTriplets;
  }
}
