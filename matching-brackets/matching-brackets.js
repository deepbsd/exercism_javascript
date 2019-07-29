export const matchingBrackets = (string) => {
  let matches = { '{':'}', '[':']', '(':')' };
  let result;
  let inputArr = string.split("");

  const isMatch = closedSym => (
    Object.values(matches).includes(closedSym) && 
    Object.keys(matches).indexOf(inputArr[inputArr.indexOf(closedSym)-1]) === Object.values(matches).indexOf(closedSym)
  );

  inputArr.forEach( character => { 
    if (Object.values(matches).includes(character)) {
        if (isMatch(character)) result = true;
    } else {
        result = false;
    }
  })
  return result;
};


