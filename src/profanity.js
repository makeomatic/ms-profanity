const grawlixChars = ['!', '@', '#', '$', '%', '~', '*'];

function getChar() {
  const length = grawlixChars.length;
  const position = Math.floor(Math.random() * length);

  return grawlixChars[position];
}

function makeGrawlix(wordLenght) {
  const grawlixLength = grawlixChars.length;
  let position = 0;
  let newString = '';

  for (let i = 0; i < wordLenght; i += 1) {
    if (position >= grawlixLength) {
      position = 0;
    }

    newString += grawlixChars[position];
    position += 1;
  }

  return newString;
}

function makeRandomGrawlix(wordLenght) {
  let newString = '';

  for (let i = 0; i < wordLenght; i += 1) {
    newString += getChar();
  }

  return newString;
}

const grawlixCache = Array
  .from(Array(20).keys())
  .reduce((cache, length) => {
    cache[length] = makeRandomGrawlix(length);

    return cache;
  }, {});

function replacer(word) {
  console.log(arguments)
  const wordLenght = word.length;
  const cached = grawlixCache[wordLenght];

  if (cached) {
    return cached;
  }

  return makeGrawlix(word.length);
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
