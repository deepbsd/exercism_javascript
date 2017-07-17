class Robot {

  constructor(){
    this.db = [];
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
      if (this.db.indexOf(newname) === -1){
        this.db.push(newname)
        return newname;
      } else {
        return this.newname();
      }
  }

  name(){
    return this.name;
  }

  reset() {
    this.name = this.newname();
  }

}

module.exports = Robot;
