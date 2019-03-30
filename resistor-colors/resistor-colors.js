
export const COLORS = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

export function value(colorArr){
    return parseInt(`${COLORS.indexOf(colorArr[0])}${COLORS.indexOf(colorArr[1])}`);
}

