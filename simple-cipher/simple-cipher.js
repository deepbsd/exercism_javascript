module.exports = function(userKey=false) {

	var alpha = 'abcdefghijklmnopqrstuvwxyz';
  this.key = userKey || generateKey(alpha);


	if ( !(/^[a..z]+$/.test(this.key)) ) {
		throw new Error('Bad key');
	}


	function generateKey(alpha){
		var output = '';
		for (var n=0; n<=100; n++){
			var x = Math.floor(Math.random()*26)
			output += alpha[x];
		}
		console.log('output: ',output)
		return output;
	}

	function encode(plaintext){
		var result = [];
		var count = 0;
		plaintext.split('').forEach(function(char){
			var n = alpha.indexOf(char) + alpha.indexOf(this.key[count]);
			if (n<0) { n += 26 }
			result = result.push(alpha[n])
			count++;
		})
		return result.join('');
	}

	function decode(ciphertext){
		var result = [];
		var count = 0;
		ciphertext.split('').forEach(function(char){
			var n = alpha.indexOf(char) - alpha.indexOf(this.key[count]);
			if (n<0) { n += 26 }
			result.push(alpha[n]);
		})
		return result.join('');
	}

};
