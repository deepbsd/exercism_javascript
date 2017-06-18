var Anagram = function (string) {

	 this.matches = function() {

		var arr; var result = [];

		if (arguments.length > 1) { 
			arr = [...arguments] ;
		} else if (!Array.isArray(arguments[0])) {
			arr = [...arguments] ;
		} else {
			arr = arguments[0] ;
		}
		
		for (var n=0; n<arr.length; n++) {
			if (arr[n].toLowerCase() === string.toLowerCase()) break;
			if (arr[n].toLowerCase().split('').sort().join('') === string.toLowerCase().split('').sort().join('')) {
				result.push(arr[n])
			}
		}
		return result;
	}
}

module.exports = Anagram;