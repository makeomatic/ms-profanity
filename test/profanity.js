const assert = require('assert');
const Profanity = require('../profanity');

describe('profanity', () => {
  it('should be able to replace bad words', (done) => {
    const profanity = new Profanity(['foo', 'barbarbarbarbarbar']);
    const text = profanity.process('You have one foo bar and barbarbarbarbarbar foo.');

    assert.equal(text, 'You have one !@# bar and !@#$%~*!@#$%~*!@#$ !@#.');

    done();
  });
});
