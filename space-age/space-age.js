class spaceAge {
  // Earth's Orbital period is 31557600 seconds
  // For each planet its orbital period is expressed
  // as percentage of Earth's orbital period.  That
  // number is multiplied by Earth's orbital period in seconds
  constructor(seconds){
    this.seconds = seconds;
    this.earthYears = this.onEarth(this.seconds);
  }
  onEarth(){
    return Number((this.seconds/31557600).toFixed(2));
  }
  onMercury(){
    var divideBy = 0.2408467*31557600;
    return Number((this.seconds/divideBy).toFixed(2));
  }
  onVenus(){
    var divideBy = 0.61519726*31557600;
    return Number((this.seconds/divideBy).toFixed(2));
  }
  onMars(){
    var divideBy = 1.8808158*31557600;
    return Number((this.seconds/divideBy).toFixed(2));
  }
  onJupiter(){
    var divideBy = 11.862615*31557600;
    return Number((this.seconds/divideBy).toFixed(2));
  }
  onSaturn(){
    var divideBy = 29.447498*31557600;
    return Number((this.seconds/divideBy).toFixed(2));
  }
  onUranus(){
    var divideBy = 84.016846*31557600;
    return Number((this.seconds/divideBy).toFixed(2));
  }
  onNeptune(){
    var divideBy = 164.79132*31557600;
    return Number((this.seconds/divideBy).toFixed(2));
  }
}

module.exports = spaceAge;
