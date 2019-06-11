//
// This is only a SKELETON file for the 'Allergies' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergies = ['eggs','peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];
    this.allergylist = this.getList();
  }

  getList() {
    let list = [];
    for (let i=0; i<this.allergies.length; i++){
        if (0 < (this.score & 1 << i)) list.push(this.allergies[i]);
    }
    return list;
  }

  list() {
    return this.allergylist;
  }

  allergicTo(allergen) {
    return this.allergylist.includes(allergen);
  }
}

