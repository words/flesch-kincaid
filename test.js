import assert from 'node:assert'
import test from 'node:test'
import {fleschKincaid} from './index.js'

test('fleschKincaid', function () {
  // @ts-expect-error runtime
  assert.ok(Number.isNaN(fleschKincaid()), 'NaN when an invalid value is given')
  assert.equal(
    round(fleschKincaid({sentence: 1, word: 13, syllable: 26})),
    13.08
  )
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
