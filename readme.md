# meridiem-time-regexp
> JavaScript `RegExp` for matching [12-Hour][meridiem] time strings with match groups for `time`, `hour`, `minute`, and `meridiem`.

[![Build Status](http://img.shields.io/travis/wilmoore/meridiem-time-regexp.svg)](https://travis-ci.org/wilmoore/meridiem-time-regexp) [![Maintainability](https://api.codeclimate.com/v1/badges/88bca7efad3edea01941/maintainability)](https://codeclimate.com/github/wilmoore/meridiem-time-regexp/maintainability) [![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![npm](https://img.shields.io/npm/v/meridiem-time-regexp.svg)](https://www.npmjs.org/package/meridiem-time-regexp) [![NPM downloads](http://img.shields.io/npm/dm/meridiem-time-regexp.svg)](https://www.npmjs.org/package/meridiem-time-regexp) [![Dependency Status](https://gemnasium.com/wilmoore/meridiem-time-regexp.svg)](https://gemnasium.com/wilmoore/meridiem-time-regexp)

```
npm install meridiem-time-regexp [--save|--save-dev]
```

## API Example

```js
var regexp = require('meridiem-time-regexp')()
```

> [RegExp.prototype.exec()]

```js
regexp.exec('11.49 am')
//=> (5) ["11.49 am", "11.49", "11", "49", "am", index: 0, input: "11.49 am", groups: {hour: "11", minute: "49", time: "11.49", meridiem: "am"}]

regexp.exec('2:10')
//=> null

regexp.exec('3:30pm')
//=> (5) ["3:30pm", "3:30", "3", "30", "pm", index: 0, input: "3:30pm", groups: {hour: "3", minute: "30", time: "3:30", meridiem: "pm"}]

regexp.exec('9am - 5pm')
//=> (5) ["9am", "9", "9", undefined, "am", index: 0, input: "9am - 5pm", groups: {hour: "9", minute: undefined, time: "9", meridiem: "am"}]

regexp.exec('9am - 5pm')
//=> (5) ["5pm", "5", "5", undefined, "pm", index: 6, input: "9am - 5pm", groups: {hour: "5", minute: undefined, time: "5", meridiem: "pm"}]

regexp.exec('9am - 5pm')
//=> null
```

> [RegExp.prototype.test()]

```js
regexp.test('11.49 am')
//=> true

regexp.test('3:30')
//=> false

regexp.test('3:30pm')
//=> true

regexp.test('9am - 5pm')
//=> true
```

> [String.prototype.match()]

```js
'9am - 5pm'.match(regexp)
//=> (2) ["9am", "5pm"]
```

> [RegExp.prototype.*]

```js
regexp.flags
//=> "gi"

regexp.global
//=> true

regexp.ignoreCase
//=> true

regexp.multiline
//=> false

regexp.source
//=> "\b(?<time>(?<hour>(?:1|2|3|4|5|6|7|8|9|10|11|12){1})[:.]?(?<minute>[0-5]\d{1})?)\s*(?<meridiem>(?:am|pm|a.m.|p.m.))"

regexp.sticky
//=> false

regexp.unicode
//=> false
```

## Numeric & Named Matching Groups
```
["4:20 PM", "4:20", "4", "20", "PM", index: 0, input: "4:20 PM", groups: {…}]
```

- `[0]` `"4:20 PM"`
- `[1]` `"4:20"` (`groups.time`)
- `[2]` `"4"` (`groups.hour`)
- `[3]` `"20"` (`groups.minute`)
- `[4]` `"PM"` (`groups.meridiem`)

## API

### `regexp(options)`

###### arguments

 - `options.flags (String)` override `RegExp` [flags](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp#Parameters) (`g`, `i`, `m`, `u`, `y`).

###### returns

 - `(RegExp)` JavaScript regular expression (`RegExp`) object.

## Reference

 - [meridiem-time-regexp]

## Alternatives
> none AFAIK.

## Contributing

> SEE: [contributing.md](contributing.md)

## Licenses

[![GitHub license](https://img.shields.io/github/license/wilmoore/meridiem-time-regexp.svg)](https://github.com/wilmoore/meridiem-time-regexp/blob/master/license)

[meridiem-time-regexp]: https://regex101.com/r/JV9o9q/1
[meridiem]: https://en.wikipedia.org/wiki/12-hour_clock
[RegExp.prototype.*]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/prototype
[RegExp.prototype.exec()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
[RegExp.prototype.test()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
[String.prototype.match()]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
