

export function WordProblem(question) {
    this.arguments = ["plus", "minus", "multiplied by", "divided by"];
    this.question = question;
    this.ArgumentError = function(){ throw "Error!"; }
    this.answer = () => this.add(1,1);
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


