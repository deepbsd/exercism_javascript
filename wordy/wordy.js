

export function WordProblem(question) {
    this.arguments = ["plus", "minus", "multiplied by", "divided by"];
    this.question = question;
    this.ArgumentError = function(){ throw "Error!"; }
    this.answer = () => {
        let operation;
        let instructions = this.question.split(" ");
        let args = [];



        instructions.forEach( elem => {
            if (elem.toLowerCase() === 'what' || elem.toLowerCase() === 'is') instructions.splice(instructions.indexOf(elem), 1);
            if (typeof +elem === 'number') {
                args.push(parseInt(elem, 10));
                console.log("arguments: ",args)
            }
            if (this.arguments.includes(elem)){
                
                operation = elem;
                console.log("operation: ",operation, " arguments: ", this.arguments[0], " equal? ",operation === this.arguments[0])
                if (operation === this.arguments[0]) {
                    console.log("call self.add()");
                    console.log("what is self? ", this)
                    let self = this.super();
                    return self.add(1,1);
                }
                else {
                    console.log("default")
                }
                    //case (operation === this.arguments[0]):
                    //    console.log("call self.add()")
                    //    //return self.add(1,1);
                    //default:
                    //    console.log("default")
                    //    //return self.add(1,1);
            }
        })



        //return this.add(1,1);
    } 
}

WordProblem.prototype.divide = function(first,second){
    return first/second;
}

WordProblem.prototype.multiply = function(first,second){
    return first * second;
}

WordProblem.prototype.minus = function(first,second){
    return first - second;
}

WordProblem.prototype.add = function(first,second){
    return first + second;
}


