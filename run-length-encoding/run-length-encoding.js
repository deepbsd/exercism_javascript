//
// This is only a SKELETON file for the 'Run Length Encoding' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decode = (text) => {

    let regex = /^((\d+)(\D))+/g;
    let match;
    //return match[2].repeat(+match[1]) || '';
    do {
        match = regex.exec(text);
        console.log("text: ", text,"match: ",match)
        return match[3].repeat(+match[2]);
    } while (match)
};

export const encode = (text) => {
  throw new Error("Remove this statement and implement this function");
};
