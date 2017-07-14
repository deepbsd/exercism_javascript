var FoodChain = require('./food-chain');

describe('Food Chain', function () {
  var song = new FoodChain();

  it('fly', function () {
    var expected = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(1)).toEqual(expected);
  });

<<<<<<< HEAD
  it('spider', function () {
=======
  xit('spider', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' + 'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(2)).toEqual(expected);
  });

<<<<<<< HEAD
  it('bird', function () {
=======
  xit('bird', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = 'I know an old lady who swallowed a bird.\n' +
      'How absurd to swallow a bird!\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';

    expect(song.verse(3)).toEqual(expected);
  });

<<<<<<< HEAD
  it('cat', function () {
=======
  xit('cat', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = 'I know an old lady who swallowed a cat.\n' +
      'Imagine that, to swallow a cat!\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(4)).toEqual(expected);
  });

<<<<<<< HEAD
  it('dog', function () {
=======
  xit('dog', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = 'I know an old lady who swallowed a dog.\n' +
      'What a hog, to swallow a dog!\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(5)).toEqual(expected);
  });

<<<<<<< HEAD
  it('goat', function () {
=======
  xit('goat', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = 'I know an old lady who swallowed a goat.\n' +
      'Just opened her throat and swallowed a goat!\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(6)).toEqual(expected);
  });

<<<<<<< HEAD
  it('cow', function () {
=======
  xit('cow', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = 'I know an old lady who swallowed a cow.\n' +
      'I don\'t know how she swallowed a cow!\n' +
      'She swallowed the cow to catch the goat.\n' +
      'She swallowed the goat to catch the dog.\n' +
      'She swallowed the dog to catch the cat.\n' +
      'She swallowed the cat to catch the bird.\n' +
      'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. ' +
      'Perhaps she\'ll die.\n';

    expect(song.verse(7)).toEqual(expected);
  });

<<<<<<< HEAD
  it('horse', function () {
=======
  xit('horse', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n';

    expect(song.verse(8)).toEqual(expected);
  });

<<<<<<< HEAD
  it('multiple verses', function () {
=======
  xit('multiple verses', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = '';

    expected += 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
      'She swallowed the spider to catch the fly.\n' +
      'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';

    expect(song.verses(1, 2)).toEqual(expected);
  });

<<<<<<< HEAD
  it('the whole song', function () {
=======
  xit('the whole song', function () {
>>>>>>> d33f51cecb469845f110b0d63b5dc7175d75ee81
    var expected = '';

    expected += 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a bird.\n' +
    'How absurd to swallow a bird!\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
     expected += 'I know an old lady who swallowed a cat.\n' +
    'Imagine that, to swallow a cat!\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a dog.\n' +
    'What a hog, to swallow a dog!\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a goat.\n' +
    'Just opened her throat and swallowed a goat!\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a cow.\n' +
    'I don\'t know how she swallowed a cow!\n' +
    'She swallowed the cow to catch the goat.\n' +
    'She swallowed the goat to catch the dog.\n' +
    'She swallowed the dog to catch the cat.\n' +
    'She swallowed the cat to catch the bird.\n' +
    'She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\n' +
    'She swallowed the spider to catch the fly.\n' +
    'I don\'t know why she swallowed the fly. ' +
    'Perhaps she\'ll die.\n\n';
    expected += 'I know an old lady who swallowed a horse.\n' + 'She\'s dead, of course!\n\n';

    expect(song.verses(1, 8)).toEqual(expected);
  });

});

