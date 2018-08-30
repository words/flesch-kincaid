'use strict'

module.exports = fleschKincaid

var sentenceWeight = 0.39
var wordWeight = 11.8
var adjustment = 15.59

function fleschKincaid(counts) {
  if (!counts || !counts.sentence || !counts.word || !counts.syllable) {
    return NaN
  }

  return (
    sentenceWeight * (counts.word / counts.sentence) +
    wordWeight * (counts.syllable / counts.word) -
    adjustment
  )
}
