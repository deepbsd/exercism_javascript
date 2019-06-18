

export function WordProblem(question) {
    this.operators = ["plus", "minus", "multiplied", "divided"];
    this.question = question.replace(/ by/g,'').replace(/ is/g,'').replace(/What /g,'');
    this.ArgumentError = function(){ throw "Error!"; }
    this.answer = () => {
        if (question.indexOf('What') < 0) this.ArgumentError();
        let instructions = this.question.split(" ");

        let func;
        let args = []; let useArgs = []; let tempOperators = [];

        // iterate over all items, create arrays for operators and arguments
        instructions.map( elem => {
            if (typeof +elem === 'number') {
                args.push(parseInt(elem,10));
            } 
            if (this.operators.includes(elem)){
                if (elem === this.operators[0]) tempOperators.push(this.add); 
                if (elem === this.operators[1]) tempOperators.push(this.minus);
                if (elem === this.operators[2]) tempOperators.push(this.multiply);
                if (elem === this.operators[3]) tempOperators.push(this.divide);
            }
        });
        args = args.filter( elem => ! isNaN(elem));
        // All operators and arguments were put into arrays; if they're empty
        // return the calculated values, if not empty, keep shifting until they are.
        func = tempOperators.shift();
        useArgs = [ args.shift(), args.shift() ]
        if (args.length === 0) return func(...useArgs); 
        else {
            let firstValue = func(...useArgs); 
            let nextFunc = tempOperators.shift();
            return nextFunc(firstValue, ...args);
        }
    } 
}

WordProblem.prototype.divide = function(first,second){ return first/second; }

WordProblem.prototype.multiply = function(first,second){ return first * second; }

WordProblem.prototype.minus = function(first,second){ return first - second; }

WordProblem.prototype.add = function(first,second){ return first + second; }

