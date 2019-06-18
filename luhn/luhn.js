export class Luhn {
  constructor(string) {
    this.string = string.replace(/\s+/g, '');
  	this.number = this.string.split("").reverse().map( (elem, index) => {
		elem = parseInt(elem, 10);
		if (index % 2 !== 0) elem = elem * 2;
		if (elem > 9) elem = elem-9;
		return elem;
	});
  }

  get valid() {
    if (this.string.length < 2) return false;
    return (this.number.reduce((sum, current) => sum + current) % 10) === 0;
  }
}
