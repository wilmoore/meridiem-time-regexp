var regexp = require('.')
var assert = require('assert').strict

// instance
assert.equal(regexp() instanceof RegExp, true, 'expected an instance of RegExp')

// no match
assert.equal(regexp().test('12:00'), false, 'should not match given no meridiem designator')
assert.equal(regexp().test('13:00 pm'), false, 'should not match given out of range hour')
assert.equal(regexp().test('12:60 am'), false, 'should not match given out of  range minute')

// `.` as time separator
assert.equal(regexp().exec('11.49 am')[0], '11.49 am')
assert.equal(regexp().exec('11.49 am')[1], '11.49')
assert.equal(regexp().exec('11.49 am')[2], '11')
assert.equal(regexp().exec('11.49 am')[3], '49')
assert.equal(regexp().exec('11.49 am')[4], 'am')
assert.equal(regexp().exec('11.49 am').groups.time, '11.49')
assert.equal(regexp().exec('11.49 am').groups.hour, '11')
assert.equal(regexp().exec('11.49 am').groups.minute, '49')
assert.equal(regexp().exec('11.49 am').groups.meridiem, 'am')

// `:` as time separator
assert.equal(regexp().exec('4:20 PM')[0], '4:20 PM')
assert.equal(regexp().exec('4:20 PM')[1], '4:20')
assert.equal(regexp().exec('4:20 PM')[2], '4')
assert.equal(regexp().exec('4:20 PM')[3], '20')
assert.equal(regexp().exec('4:20 PM')[4], 'PM')
assert.equal(regexp().exec('4:20 PM').groups.time, '4:20')
assert.equal(regexp().exec('4:20 PM').groups.hour, '4')
assert.equal(regexp().exec('4:20 PM').groups.minute, '20')
assert.equal(regexp().exec('4:20 PM').groups.meridiem, 'PM')

// multiple matches using `String.prototype.match`
assert.deepEqual('I will be working from 9am to 5pm'.match(regexp()), ['9am', '5pm'])

// multiple matches using `RegExp.prototype.exec`
const from9amTo5pm = regexp()
const match9am = from9amTo5pm.exec('9am - 5pm')
const match5pm = from9amTo5pm.exec('9am - 5pm')

assert.equal(match9am[0], '9am')
assert.equal(match9am[1], '9')
assert.equal(match9am[2], '9')
assert.equal(match9am[3], undefined)
assert.equal(match9am[4], 'am')
assert.equal(match9am.groups.time, '9')
assert.equal(match9am.groups.hour, '9')
assert.equal(match9am.groups.minute, undefined)
assert.equal(match9am.groups.meridiem, 'am')

assert.equal(match5pm[0], '5pm')
assert.equal(match5pm[1], '5')
assert.equal(match5pm[2], '5')
assert.equal(match5pm[3], undefined)
assert.equal(match5pm[4], 'pm')
assert.equal(match5pm.groups.time, '5')
assert.equal(match5pm.groups.hour, '5')
assert.equal(match5pm.groups.minute, undefined)
assert.equal(match5pm.groups.meridiem, 'pm')

// mid-sentance using `RegExp.prototype.exec`
assert.equal(regexp().exec('meet us for drinks at 4:20 PM.')[0], '4:20 PM', 'expected `[0]` to equal string "4:20 PM"')
assert.equal(regexp().exec('meet us for drinks at 4:20 PM.').groups.time, '4:20', 'expected `.groups.time` to equal string "4:20 PM"')
