export const steps = (num) => {

    if (num <= 0) throw "Only positive numbers are allowed";

    let numSteps = 0;

    while (num !== 1){

        num = (num % 2 === 0) ? num / 2 : num * 3 + 1;
        
        numSteps++;
    }
    return numSteps;
}

