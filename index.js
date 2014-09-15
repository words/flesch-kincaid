'use strict';

/**
 * The constants as defined by the revised Flesch-Kincaid Grade Level Formula.
 */

var SENTENCE_WEIGHT = 0.39,
    WORD_WEIGHT = 11.8,
    ADJUSTMENT = 15.59;

/**
 * Get the grade level of a given value according to the Flesch-Kincaid
 * Grade Level. More information is available at WikiPedia:
 *
 *   http://en.wikipedia.org/wiki/
 *   Flesch–Kincaid_readability_tests#Flesch.E2.80.93Kincaid_Grade_Level
 *
 * @param {Object} counts
 * @param {number} counts.word - Number of words.
 * @param {number} counts.sentence - Number of sentences.
 * @param {number} counts.syllable - Number of syllables.
 * @return {number}
 */

function fleschKincaid(counts) {
    if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
        return NaN;
    }

    return SENTENCE_WEIGHT * (counts.word / counts.sentence) +
        WORD_WEIGHT * (counts.syllable / counts.word) -
        ADJUSTMENT;
}

/**
 * Export `fleschKincaid`.
 */

module.exports = fleschKincaid;
