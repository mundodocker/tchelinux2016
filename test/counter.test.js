/* globals describe, it */
const expect = require('chai').expect
const sum = require('../src/sum')

describe('sum', () => {
  it('should sum two numbers', () => {
    const result = sum(1, 2)

    expect(result).to.be.deep.equal(3)
  })
})
