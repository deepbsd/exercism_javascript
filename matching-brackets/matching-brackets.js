
export const matchingBrackets = (string) => {
  let matches = { '{':'}', '[':']', '(':')' };
  let result;
  let inputArr = string.split("");

  // does the closed symbol actually close the right opening symbol?
  const isMatch = closedSym => (Object.values(matches).includes(closedSym) && 
    Object.keys(matches).indexOf(inputArr[inputArr.indexOf(closedSym)-1]) === Object.values(matches).indexOf(closedSym));

  // cycle through each character in the inputArr
  inputArr.forEach( character => { 
    if (Object.values(matches).includes(character)) {
        if (isMatch(character)) result = true;
    } else {
        result = false;
    }
  })
  return result;
};


