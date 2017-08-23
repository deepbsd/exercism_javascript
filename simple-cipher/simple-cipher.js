class Cipher {

	constructor(key){
		this.plain = 'abcdefghijklmnopqrstuvwxyz';
		if (key !== 'undefined' && key === '') {  throw Error("Bad key");  }
		this.key = key || this.generateKey();
		if (this.key !== 'undefined' && !this.key.match(/^[a-z]+$/) ) { throw Error("Bad key"); }

		if (this.key !== 'undefined' && this.key[0] === this.key[1] && this.key[1] === this.key[2]) {
			this.ciph = this.plain.substr(this.plain.indexOf(this.key[0]), this.plain.length) + this.plain.substr(0, this.plain.indexOf(this.key[0])+1);
		} else {
			this.ciph = this.key;
		}
		// this.key = key || this.generateKey();		
		// this.ciph1 = this.plain.substr(this.plain.indexOf(this.key[0]), this.plain.length) + this.plain.substr(0, this.plain.indexOf(this.key[0])+1);
		// this.ciph = this.key;
	}

	encode(plaintext){
		console.log('KEY: ', this.key)
		var output = '';
		if ( this.key[0] === this.key[1] && this.key[1] === this.key[2]) {
			for (var c = 0; c < plaintext.length; c++){
				output += this.ciph.charAt(this.plain.indexOf(plaintext[c]));			
			}
		} else {
			for (var c = 0; c < plaintext.length; c++){
				output += this.ciph[c];	
			}
		}
		return output;
	}

	decode(ciphertext){
		var output = '';
		for (var c = 0; c < ciphertext.length; c++) {
			output += this.key[c]
		}
		return output;
	}

	generateKey(){
		var output = '';
		for (var n=0; n<=100; n++){
			var x = Math.floor(Math.random()*26)
			output += this.plain.slice(x, x+1);
		}
		return output;		
	}

}

module.exports = Cipher;