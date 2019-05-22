
export const parse = (string) => {

    let input = string.replace(/-/g, " ").replace(/_*/g, "");

    return input.split(" ").map( elem => elem = elem.substring(0,1) ).join("").toUpperCase();

}


