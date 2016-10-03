const assert = require('assert');
const Profanity = require('../src/profanity');

describe('profanity', () => {
  it('should be able to replace bad words', (done) => {
    const profanity = new Profanity(['foo', 'barbarbarbarbarbarbar']);
    const text = profanity.process('You have one foo bar and barbarbarbarbarbarbar foo.');

    assert.ok(/^You have one [!@#$%~*]{3} bar and [!@#$%~*]{21} [!@#$%~*]{3}.$/.test(text));

    done();
  });
});
