const assert = require('assert');
const Errors = require('common-errors');
const { process } = require('../');

describe('process helper', () => {
  it('should be able to throw if unknown locale', (done) => {
    assert.throws(() => process('ass is a bad word', 'un-KNOWN'), Errors.ArgumentError);

    done();
  });

  it('should be able to replace bad words', (done) => {
    const text = process('ass is a bad word');

    assert.ok(/^[!@#$%~*]{3} is a bad word$/.test(text));

    done();
  });

  it('should be able to replace uppercase bad words', (done) => {
    const text = process('aSs is a bad word');

    assert.ok(/^[!@#$%~*]{3} is a bad word$/.test(text));

    done();
  });
});
