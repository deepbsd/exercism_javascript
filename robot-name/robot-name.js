// Moved the db into global space (not best practice!)
// in order to satisfy the last test.
var db = [];

class Robot {

  constructor(){
    //this.db = [];
    this.name = this.newname();
  }

  newname(){
      var alphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
      var nums = '0123456789'.split('');
      var newname = '';
      for (var c = 0; c < 2; c++){
        newname += alphas[Math.floor(Math.random()*alphas.length)];
      }
      for (var n = 0; n < 3; n++){
        newname += nums[Math.floor(Math.random()*nums.length)];
      }
      if (db.indexOf(newname) === -1){
        db.push(newname)
        return newname;
      }
      return this.newname();  // Keep recycling until the name is new...
  }

  name(){
    return this.name;
  }

  reset() {
    this.name = this.newname();
  }

}

module.exports = Robot;
