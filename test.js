'use strict';

var test = require('tape');
var nan = require('is-nan');
var fleschKincaid = require('./');

test('fleschKincaid', function (t) {
  t.ok(nan(fleschKincaid()), 'NaN when an invalid value is given');

  t.equal(
    round(fleschKincaid({
      sentence: 1,
      word: 13,
      syllable: 26
    })),
    13.08
  );

  t.end();
});

function round(val) {
  return Math.round(val * 1e6) / 1e6;
}
