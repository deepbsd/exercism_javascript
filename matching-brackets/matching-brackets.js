// Basic solution: 
// push each symbol onto 'toMatch' array in the order
// encountered.  As we iterate through any closing symbols
// (closed.includes(symbol)) must have the same index in closed 
// as they have in the 'opened' array.  If we don't close
// an opened bracket in the wrong order, return true.  Otherwise
// return false.



export const matchingBrackets = (string) => {
  let opened = ['{','[','('] ;
  let closed = ['}',']',')'] ;
  let toMatch = [];

  // Last in must be first matched to be true, otherwise return false
  string.forEach( character => if opened.includes(character) toMatch.push(character) );

  const isMatch = closedSym => (closed.includes(closedSym) && 
        closed.indexOf(closedSym) === opened.indexOf(closedSym));



};
