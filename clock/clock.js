//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class at {
  constructor(hrs,mins) {
    this.mins = mins || 0;
    this.hrs = hrs || 0;
  }

  toString() {
    let clock = new at(this.hrs,this.mins);
    console.log("clock: ",this.hrs," : ",this.mins);
    return `${clock.hours}:{clock.minutes}`;
  }

  plus() {
    throw new Error("Remove this statement and implement this function");
  }

  minus() {
    throw new Error("Remove this statement and implement this function");
  }

  equals() {
    throw new Error("Remove this statement and implement this function");
  }
}
