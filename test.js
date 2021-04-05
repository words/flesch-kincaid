import test from 'tape'
import {fleschKincaid} from './index.js'

test('fleschKincaid', function (t) {
  // @ts-ignore runtime
  t.ok(Number.isNaN(fleschKincaid()), 'NaN when an invalid value is given')
  t.equal(round(fleschKincaid({sentence: 1, word: 13, syllable: 26})), 13.08)
  t.end()
})

/**
 * @param {number} value
 * @returns {number}
 */
function round(value) {
  return Math.round(value * 1e6) / 1e6
}
