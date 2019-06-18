

export function WordProblem(question) {
    this.operators = ["plus", "minus", "multiplied", "divided"];
    this.question = question.replace(/ by/g,'').replace(/ is/g,'').replace(/What /g,'');
    this.ArgumentError = function(){ throw "Error!"; }
    this.answer = () => {
        let operator;
        let func;
        let instructions = this.question.split(" ");
        console.log("instructions: ",instructions);
        let args = [];
        let tempOperators = [];

        instructions.map( elem => {
            //if (elem.toLowerCase() === 'what' || elem.toLowerCase() === 'is' || elem.toLowerCase() === 'by') instructions.splice(instructions.indexOf(elem), 1);
            console.log("instructions2: ",instructions)
            if (typeof +elem === 'number') {
                args.push(parseInt(elem,10));
            } 
            if (this.operators.includes(elem)){
                operator = elem;
                if (operator === this.operators[0]) func = this.add; 
                if (operator === this.operators[1]) func = this.minus;
                if (operator === this.operators[2]) func = this.multiply;
                if (operator === this.operators[3]) func = this.divide;
                tempOperators.push(func);
            }
            console.log("element: ",elem);
            console.log("operator: ",operator, " func: ",func, " tempOperators: ",tempOperators)
        })
        console.log("operator: ",operator, " args: ", args );
        args = args.filter( elem => ! isNaN(elem));
        console.log("arguments: ",args);
        return func(...args)
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

        //instructions.forEach( elem => {
        //    if (elem.toLowerCase() === 'what' || elem.toLowerCase() === 'is') instructions.splice(instructions.indexOf(elem), 1);
        //    if (typeof +elem === 'number') {
        //        args.push(parseInt(elem, 10));
        //        console.log("arguments: ",args)
        //    }
        //    if (this.arguments.includes(elem)){
        //        
        //        operation = elem;
        //        console.log("operation: ",operation, " arguments: ", this.arguments[0], " equal? ",operation === this.arguments[0])
        //        if (operation === this.arguments[0]) {
        //            console.log("call self.add()");
        //            console.log("what is self? ", this)
        //            let self = this.super();
        //            return self.add(1,1);
        //        }
        //        else {
        //            console.log("default")
        //        }
        //            //case (operation === this.arguments[0]):
        //            //    console.log("call self.add()")
        //            //    //return self.add(1,1);
        //            //default:
        //            //    console.log("default")
        //            //    //return self.add(1,1);
        //    }
        //    throw "Bad input."
        //})



        //return this.add(1,1);

