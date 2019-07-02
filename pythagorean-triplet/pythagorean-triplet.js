import _ from 'lodash';
export class Triplet {
  constructor(a,b,c) {
    this.numbers = [a,b,c].sort( (a,b) => a - b );
    //this.isPythagorean = arr => arr[0]**2 + arr[1]**2 === arr[2]**2;
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
    if (obj.sum) finalTriplets = finalTriplets.filter( (curVal, index, arr) => curVal.sum() === obj.sum && JSON.stringify(curVal) !== JSON.stringify(arr[index-1]));
    console.log("Triplets: ", finalTriplets)
    return finalTriplets;
  }
}
