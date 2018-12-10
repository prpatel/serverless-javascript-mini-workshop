const randomWebFunction = require('../index.js').main;
const assert = require('chai').assert;

describe('Random Web Function', () => {
    it('returns a number', (done) => {
        let result = randomWebFunction({max: 100})
        assert.include(result.body, "Random number between 0 and");
        done(null);
    });
});