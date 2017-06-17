function PhoneNumber(num) {
	
	this.number = function() {
		if ((num.match(/\d+/g).join('').length > 11) || 
			(num.match(/\d+/g).join('').length < 10) || 
			((num.match(/\d+/g).join('').length === 11) && 
				(num.match(/^\d/g).join('') !== '1'))) {
		 	return '0000000000';
		}
		return num.match(/\d+/g).join('').slice(-10, num.length)
	}
	this.areaCode = function() {
		return this.number().slice(0,3);
	}
	this.toString = function() {
		return '(' + this.number().slice(0,3) + ') ' 
		+ this.number().slice(3,6) + '-' + this.number().slice(6, 10);
	}
}


module.exports = PhoneNumber;