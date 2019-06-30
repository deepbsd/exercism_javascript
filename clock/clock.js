const minsInDay = 60 * 24;
const doFormat = (number) => number<10 ? `0${number}` : `${number}`;
const negativeMins = mins => Math.abs(mins)>60 ?  mins%minsInDay + minsInDay : 60 + mins;
const negativeHrs = hrs => Math.abs(hrs)>24 ? 24 + hrs%24 : 24 + hrs;

class Clock {
    constructor (minutes) {
        this.minutes = minutes;
    }

    plus (mins) {
        return new Clock((minsInDay + this.minutes + mins) % minsInDay);
    }

    minus (mins) {
        return this.plus(-mins);
    }

    toString() {
        let [hours, mins] = [(Math.floor(this.minutes / 60)) % 24, this.minutes % 60];
        if (hours < 0) hours = negativeHrs(hours);
        if (mins < 0) mins = negativeMins(mins);
        return `${doFormat(hours)}:${doFormat(mins)}`;
    }

    equals (otherClock) {
        if (otherClock.minutes < 0) otherClock.minutes = negativeMins(otherClock.minutes) ;
        console.log("2nd thisClock: ",this.minutes, " otherClock: ",otherClock.minutes  )
        return this.minutes === otherClock.minutes % minsInDay;
    }
}

export const at = (hrs,mins=0) => new Clock(( (hrs<0) ? negativeHrs(hrs) : hrs) * 60 +  mins );


