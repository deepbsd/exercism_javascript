
export const at = function(hrs=0,mins=0) {

    if (+mins >= 60) {
        hrs = `${(+hrs + Math.floor(+mins/60))}`;
        //mins = 60 - +mins;
    }
    let hours = (+hrs < 10) ? "0" + hrs : (+hrs >= 48) ? "0" + Math.round(+hrs/24) : (+hrs >= 24) ? "0" + (+hrs - 24)  : hrs;
    let minutes = (+mins < 10) ? "0" + mins : (+mins >= 60) ? "0" + `${(Math.floor(+mins/60) * 60 - +mins)}` : mins;

    return `${hours}:${minutes}`;
}

//  toString() {
//    let clock = new at(this.hrs,this.mins);
//    console.log("clock: ",this.hrs," : ",this.mins);
//    return `${clock.hours}:{clock.minutes}`;
//  }
//
//  plus() {
//    throw new Error("Remove this statement and implement this function");
//  }
//
//  minus() {
//    throw new Error("Remove this statement and implement this function");
//  }
//
//  equals() {
//    throw new Error("Remove this statement and implement this function");
//  }
