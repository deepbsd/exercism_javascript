
const minsInDay = 60 * 24;
const twoPlaces = (number) => number<10 ? `0${number}` : `${number}`;

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
        const [hours, mins] = [(Math.floor(this.minutes / 60)) % 24, this.minutes % 60];
        return `${twoPlaces(hours)}:${twoPlaces(mins)}`;
    }

    equals (otherClock) {
        return this.minutes === otherClock.minutes;
    }
}

export const at = (hrs,mins=0) => new Clock(hrs * 60 + mins);


