var sentenceWeight = 0.39
var wordWeight = 11.8
var adjustment = 15.59

/**
 * @typedef {Object.<string, number>} FleschKincaidCounts
 * @property {number} sentence
 * @property {number} word
 * @property {number} syllable
 */

/**
 * Given an object containing the number of words (`word`), the number of sentences (`sentence`), and the number of syllables  (`syllable`) in a document, returns the U.S. grade level associated with the document.
 * Values can theoretically start at `-3.40` and end at `Infinity`.
 *
 * @param {FleschKincaidCounts} counts
 * @returns {number}
 */
export function fleschKincaid(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
    return Number.NaN
  }

  return (
    sentenceWeight * (counts.word / counts.sentence) +
    wordWeight * (counts.syllable / counts.word) -
    adjustment
  )
}
