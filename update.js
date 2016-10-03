const assert = require('assert');
const fs = require('fs');
const readline = require('readline');

const SOURSE_DIR = '.temp';
const DICTIONARY_DIR = 'dictionary';

function isLocale(fileName) {
  return /^[a-z]/.test(fileName);
}

function fileParser(fileName) {
  const words = [];
  const reader = readline.createInterface({
    input: fs.createReadStream(`${SOURSE_DIR}/${fileName}`),
  });

  reader
    .on('line', (word) => {
      words.push(word);
    })
    .on('close', () => {
      fs.writeFile(`${DICTIONARY_DIR}/${fileName}.json`, JSON.stringify(words));
    });
}

fs.readdir(SOURSE_DIR, (error, files) => {
  assert.ifError(error);

  files
    .filter(isLocale)
    .forEach(fileParser);
});
