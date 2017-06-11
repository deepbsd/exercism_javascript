var Bob = function() {};

Bob.prototype.hey = function(input) {


  // Catch shouting numbers and forceful questions and not forceful
  // talk...
  if (/([A-Z]{3,}|[1-9]{1},).*[?!]$/.test(input)) { return 'Whoa, chill out!'; }

  // Catch shouting but no 3-letter acronyms.  Can you shout in 3-letter
  // words?
  if (/[A-Z]{4,}/.test(input)) { return 'Whoa, chill out!'; }
  
  //Shouting Umlauts!!!!  Of course!  Whatever.  Jeez.
  if (/(\xc4|\xe4|\xdc|\xfc)+.*!$/.test(input)) { return 'Whoa, chill out!'; }

  if (/^\s*$/.test(input)) { return 'Fine. Be that way!'; }

  if (/\?$/.test(input)) { return 'Sure.'; }

  return 'Whatever.';
}

module.exports = Bob;
