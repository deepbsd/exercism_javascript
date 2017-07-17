// This seems to pass the tests.  Not sure about the bonus assignment.
// Seems like the beauty of this function is that it's made so people can
// import it and use the data structure as their own.  I don't see how
// outside code could mutate this state object, since it's built to be imported.
// But, I'm probably missing something...

function School() {

  const state = {}

  function roster(){
    let obj = {};
    for (var [k,v] of Object.entries(this.state)){
      obj[k] = v.sort();
    }
    return obj;
  }

  function grade(num){
    if (!this.state[num]) {
      return [];
    }
    return Object.values(this.state[num]).sort();
  }

  function add(name, ingrade){
    const grade = Number(ingrade);
    if (!this.state[grade]) { this.state[grade] = []; }
    this.state[grade].push(name);
  }

  return {
    state: state,
    roster: roster,
    grade: grade,
    add: add
  };
};

module.exports = School;
