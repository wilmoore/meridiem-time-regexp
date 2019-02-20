module.exports = re

/**
 * JavaScript `RegExp` for matching 12-Hour (meridiem) time strings with match groups for `time`, `hour`, `minute`, and `meridiem`.
 *
 * @param {Object} [options]
 * Options object.
 *
 * @param {String} [options.flags='gi']
 * Override `RegExp` flags.
 *
 * @return {RegExp}
 * JavaScript regular expression (`RegExp`) object.
 */

function re (options) {
  options = options || {}
  return new RegExp(/\b(?<time>(?<hour>(?:1|2|3|4|5|6|7|8|9|10|11|12){1})[:.]?(?<minute>[0-5]\d{1})?)\s*(?<meridiem>(?:am|pm|a.m.|p.m.))/gi, options.flags)
}
