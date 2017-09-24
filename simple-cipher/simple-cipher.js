(function() {
	var Cipher = {

		constructor: function(key){
			this.key = key || this.generateKey();
			this.plain = 'abcdefghijklmnopqrstuvwxyz'
			this.ciph = app.plain.substr(this.key.length, plain.length+1) + plain.substr(0, this.key.length);
		},
		encode: function(plaintext){
			var output = '';
			for (var c = 0; c < plaintext.length; c++){
				output += this.ciph.charAt(this.plain.indexOf(plaintext[c]));
			}
			return output;
		},
		decode: function(securetext){
			var output = '';
			for (var c = 0; c < securetext.length; c++){
				output += this.plain.charAt(this.ciph.indexOf(plaintext[c]));
			}
			return output;
		},
		generateKey: function(){
			var output = '';
			for (var n=0; n<=100; n++){
				var x = Math.floor(Math.random()*26)
				output += this.plain.slice(x, x+1);
			}
			return output;
		},
		plain: 'abcdefghijklmnopqrstuvwxyz'
	};

})()

module.exports = Cipher;
