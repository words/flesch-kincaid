'use strict';

exports = fleschKincaid;
module.exports = exports;

var SENTENCE_WEIGHT = 0.39;
var WORD_WEIGHT = 11.8;
var ADJUSTMENT = 15.59;

function fleschKincaid(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
    return NaN;
  }

  return (SENTENCE_WEIGHT * (counts.word / counts.sentence)) +
    (WORD_WEIGHT * (counts.syllable / counts.word)) -
    ADJUSTMENT;
}
