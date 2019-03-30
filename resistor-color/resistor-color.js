
const colors = ["black", "brown", "red", "orange", "yellow", "green", "blue", "violet", "grey", "white"];

function returnColorCode(color){
    return colors.indexOf(color);
}

module.exports = { COLORS: colors, colorCode: returnColorCode }
