const grawlixChars = ['!', '@', '#', '$', '%', '~', '*'];
const shuffle = require('lodash/shuffle');

function makeGrawlix(wordLenght, chars) {
  const charsLength = chars.length;
  let position = 0;
  let newString = '';

  for (let i = 0; i < wordLenght; i += 1) {
    if (position >= charsLength) {
      position = 0;
    }

    newString += chars[position];
    position += 1;
  }

  return newString;
}

function makeRandomGrawlix(wordLenght, chars) {
  return makeGrawlix(wordLenght, shuffle(chars));
}

const grawlixCache = Array
  .from(Array(20).keys())
  .reduce((cache, length) => {
    cache[length] = makeRandomGrawlix(length, grawlixChars);

    return cache;
  }, {});

function replacer(word) {
  const wordLenght = word.length;
  const cached = grawlixCache[wordLenght];

  if (cached) {
    return cached;
  }

  return makeGrawlix(word.length, grawlixChars);
}

function reducer(text, word) {
  return text.replace(word, replacer);
}

function wordToRegex(word) {
  return new RegExp(word, 'gi');
}

class Profanity {
  constructor(words) {
    this.words = words.map(wordToRegex);
  }

  process(text) {
    return this.words.reduce(reducer, text);
  }
}

module.exports = Profanity;
