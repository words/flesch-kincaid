# flesch-kincaid

[![Build][build-badge]][build]
[![Coverage][coverage-badge]][coverage]
[![Downloads][downloads-badge]][downloads]
[![Size][size-badge]][size]

Formula to detect the grade level of text according to the [Flesch–Kincaid grade
level][formula].

See [syllable][] for detecting syllables.

## Install

[npm][]:

```sh
npm install flesch-kincaid
```

## Use

```js
var fleschKincaid = require('flesch-kincaid')

// For “The Australian platypus is seemingly a hybrid of a mammal and reptilian
// creature.” (1 sentence, 13 words, 26 syllables).
fleschKincaid({sentence: 1, word: 13, syllable: 26})
// => 13.08
```

## API

### `fleschKincaid(counts)`

Given an object containing the number of words (`word`), the number of sentences
(`sentence`), and the number of syllables  (`syllable`) in a document, returns
the U.S. grade level associated with the document.

Values can theoretically start at -3.40 and end at Infinity.

## Related

*   [`automated-readability`](https://github.com/words/automated-readability)
    — Uses character count instead of error-prone syllable parser
*   [`coleman-liau`](https://github.com/words/coleman-liau)
    — Uses letter count instead of an error-prone syllable parser
*   [`dale-chall-formula`](https://github.com/words/dale-chall-formula)
    — Uses a dictionary; suited for higher reading levels
*   [`flesch`](https://github.com/words/flesch)
    — Uses syllable count
*   [`gunning-fog`](https://github.com/words/gunning-fog)
    — Uses syllable count, needs POS-tagging and NER
*   [`smog-formula`](https://github.com/words/smog-formula)
    — Like `gunning-fog-index`, without needing advanced NLP
*   [`spache-formula`](https://github.com/words/spache-formula)
    — Uses a dictionary, suited for lower reading levels

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[build-badge]: https://img.shields.io/travis/words/flesch-kincaid.svg

[build]: https://travis-ci.org/words/flesch-kincaid

[coverage-badge]: https://img.shields.io/codecov/c/github/words/flesch-kincaid.svg

[coverage]: https://codecov.io/github/words/flesch-kincaid

[downloads-badge]: https://img.shields.io/npm/dm/flesch-kincaid.svg

[downloads]: https://www.npmjs.com/package/flesch-kincaid

[size-badge]: https://img.shields.io/bundlephobia/minzip/flesch-kincaid.svg

[size]: https://bundlephobia.com/result?p=flesch-kincaid

[npm]: https://docs.npmjs.com/cli/install

[license]: license

[author]: https://wooorm.com

[formula]: https://en.wikipedia.org/wiki/Flesch–Kincaid_readability_tests#Flesch–Kincaid_grade_level

[syllable]: https://github.com/words/syllable
