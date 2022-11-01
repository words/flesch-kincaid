/**
 * @typedef Counts
 *   Counts from input document.
 * @property {number} sentence
 *   Number of sentences.
 * @property {number} word
 *   Number of words.
 * @property {number} syllable
 *   Number of syllables.
 */

/**
 * @typedef {Counts} FleschKincaidCounts
 *   Deprecated: please use the `Counts` type instead.
 */

const sentenceWeight = 0.39
const wordWeight = 11.8
const adjustment = 15.59

/**
 * Given an object containing the number of words (`word`), the number of
 * sentences (`sentence`), and the number of syllables  (`syllable`) in a
 * document, returns the U.S. grade level associated with the document.
 *
 * @param {Counts} counts
 *   Counts from input document.
 * @returns {number}
 *   Grade level associated with the document.
 *
 *   > 👉 **Note**: values can theoretically start at `-3.40` and end at
 *   > `Infinity`.
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
