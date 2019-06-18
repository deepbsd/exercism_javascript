//
// This is only a SKELETON file for the 'Luhn' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Luhn {
  constructor(string) {
    this.string = string.replace(/\s+/g, '');
  	this.number = this.string.split("").reverse().map( (elem, index) => {
			elem = parseInt(elem, 10);
			//console.log("elem ", typeof elem);
			if (index % 2 !== 0) elem = elem * 2;
			if (elem > 9) elem = elem-9;
			return elem;
	});
	console.log("number: ",this.number);

  }

  get valid() {
    if (this.string.length < 2) return false;
    //console.log("sum: ", this.number.reduce((sum, current) => sum + current));
    return (this.number.reduce((sum, current) => sum + current) % 10) === 0;
  }
}
