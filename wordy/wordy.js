

export function WordProblem(question) {
    this.operators = ["plus", "minus", "multiplied", "divided"];
    this.question = question.replace(/ by/g,'').replace(/ is/g,'').replace(/What /g,'');
    this.ArgumentError = function(){ throw "Error!"; }
    this.answer = () => {
        if (question.indexOf('What') < 0) this.ArgumentError();
        let instructions = this.question.split(" ");

        let operator, func, useFunc;
        let args = []; let useArgs = []; let tempOperators = [];

        instructions.map( elem => {
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
        });
        args = args.filter( elem => ! isNaN(elem));
        useFunc = tempOperators.shift();
        useArgs = [ args.shift(), args.shift() ]
        if (args.length === 0) return useFunc(...useArgs); 
        else {
            let value = useFunc(...useArgs); 
            let nextFunc = tempOperators.shift();
            let nextArgs = args;
            let nextValue = nextFunc(value, ...nextArgs);
            return nextValue;
        }
    } 
}

WordProblem.prototype.divide = function(first,second){ return first/second; }

WordProblem.prototype.multiply = function(first,second){ return first * second; }

WordProblem.prototype.minus = function(first,second){ return first - second; }

WordProblem.prototype.add = function(first,second){ return first + second; }

