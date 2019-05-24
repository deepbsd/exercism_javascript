
export const classify = (number) => {
   
   if (number <= 0) throw "Classification is only possible for natural numbers.";
   if (number === 1) return "deficient";    // edge case

   const factors = number => Array
		.from(Array(number + 1), (_, i) => i)
		.filter(i => number % i === 0)
		.filter(i => i !== number)  // remove number itself

    const sumOfFactors = factors(number).reduce((sum, factor) => sum + factor);
	
    const aliquot = (sumOfFactors === number) ? "perfect" 
				: (sumOfFactors > number) ?  "abundant" : "deficient";

    return aliquot;
}


