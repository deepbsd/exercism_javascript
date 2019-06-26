const minsInDay = 60 * 24;
const doFormat = (number) => number<10 ? `0${number}` : `${number}`;
const negativeMins = (mins) =>  60 + mins;
const negativeHrs = (hrs) => 24 + hrs;

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
        console.log("Hours: ",hours," Minutes: ",mins)
        return `${doFormat(hours)}:${doFormat(mins)}`;
    }

    equals (otherClock) {
        return this.minutes === otherClock.minutes;
    }
}

export const at = (hrs,mins=0) => new Clock(hrs * 60 + mins);


