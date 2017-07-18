class spaceAge {
  constructor(seconds){
    this.seconds = seconds;
  }
  convert(pctOfEarthOrbit){
    var eoSeconds = 31557600;
    return Number((this.seconds/(eoSeconds*pctOfEarthOrbit)).toFixed(2));
  }
  onEarth(){
    return this.convert(1.0);
  }
  onMercury(){
    return this.convert(0.2408467);
  }
  onVenus(){
    return this.convert(0.61519726);
  }
  onMars(){
    return this.convert(1.8808158);
  }
  onJupiter(){
    return this.convert(11.862615);
  }
  onSaturn(){
    return this.convert(29.447498);
  }
  onUranus(){
    return this.convert(84.016846);
  }
  onNeptune(){
    return this.convert(164.79132);
  }
}

module.exports = spaceAge;
