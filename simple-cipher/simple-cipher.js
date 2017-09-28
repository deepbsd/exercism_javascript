var Cipher = function(userKey=false) {

	var alpha = 'abcdefghijklmnopqrstuvwxyz';

	if ( !(/^[a-z]+$/.test(userKey))) {
		throw Error('Bad key');
	}
  this.key = userKey || generateKey(alpha);

	function generateKey(alpha){
		var output = '';
		for (var n=0; n<=100; n++){
			var x = Math.floor(Math.random()*26)
			output += alpha[x];
		}
		console.log('output: ',output)
		return output;
	}

	Cipher.prototype.encode = function(plaintext){
		var key = this.key;
		var result = [];
		plaintext.split('').forEach(function(char, i){
			var n = alpha.indexOf(char) + alpha.indexOf(key[i]);
			if (n>=26) { n -= 26 }
			result.push(alpha[n])
		})
		return result.join('');
	}

	Cipher.prototype.decode = function(ciphertext){
		var key = this.key;
		var result = [];
		ciphertext.split('').forEach(function(char, i){
			var n = alpha.indexOf(char) - alpha.indexOf(key[i]);
			if (n<0) { n += 26 }
			result.push(alpha[n]);
		})
		return result.join('');
	}

};

module.exports = Cipher;
