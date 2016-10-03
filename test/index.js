const assert = require('assert');
const { process } = require('../');

describe('process helper', () => {
  it('should be able to replace bad words', (done) => {
    const text = process('ass is a bad word');

    assert.equal(text, '!@# is a bad word');

    done();
  });
});
