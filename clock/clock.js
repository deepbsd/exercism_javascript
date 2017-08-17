class Clock {
  constructor(hrs, min){
    this.hours = hrs;
    this.minutes = min;
  }
  at(a, b){
    var hrs = a/24;
    var min = b/60;
    return `${hrs.toFixed(2)}:${min.toFixed(2)}`;
  }

}

module.exports = Clock;
