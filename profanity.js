const grawlixChars = ['!', '@', '#', '$', '%', '~', '*'];
const grawlixCharsLenght = grawlixChars.length;

function replacer(word) {
  const wordLenght = word.length;
  let position = 0;
  let newString = '';

  for (let i = 0; i < wordLenght; i += 1) {
    if (position >= grawlixCharsLenght) {
      position = 0;
    }

    newString += grawlixChars[position];
    position += 1;
  }

  return newString;
}

function reducer(text, word) {
  return text.replace(new RegExp(word, 'gi'), replacer);
}

class Profanity {
  constructor(words) {
    this.words = words;
  }

  process(text) {
    return this.words.reduce(reducer, text);
  }
}

module.exports = Profanity;
