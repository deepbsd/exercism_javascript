export class Allergies {
  constructor(score) {
    this.score = score;
    this.allergies = ['eggs','peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];
  }

  list() {
    let list = [];
    for (let i=0; i<this.allergies.length; i++){
        if (0 < (this.score & 1 << i)) list.push(this.allergies[i]);
    }
    return list;
  }

  allergicTo(allergen) {
    return this.list().includes(allergen);
  }
}

