const Errors = require('common-errors');
const fs = require('fs');
const path = require('path');
const Profanity = require('./profanity');

const locales = fs
  .readdirSync(path.resolve(__dirname, '../dictionary'))
  .map(file => file.replace('.json', ''));
const profanities = new Map();

function process(text, locale = 'en') {
  if (locales.includes(locale) === false) {
    throw new Errors.ArgumentError('locale');
  }

  if (profanities.has(locale) === false) {
    // eslint-disable-next-line global-require, import/no-dynamic-require
    const dictionary = require(`../dictionary/${locale}.json`);

    profanities.set(locale, new Profanity(dictionary));
  }

  return profanities
    .get(locale)
    .process(text);
}

module.exports = process;
