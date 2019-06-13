export class Allergies {
  constructor(score) {
    this.allergens = ['eggs','peanuts', 'shellfish', 'strawberries', 'tomatoes', 'chocolate', 'pollen', 'cats'];
    this.allergies = this.allergens.filter((allergen,index) => score & (1 << index));
  }

  list() { return this.allergies; }

  allergicTo(allergen) { return this.allergies.includes(allergen); }
}

