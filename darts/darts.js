export const solve = (x,y) => {
    let distance = Math.sqrt(x**2 + y**2);
    return distance > 10 ? 0 : distance > 5 ? 1 : distance > 1 ? 5 : 10;
};
