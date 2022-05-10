const {format_date} = require('../utils/helpers');
const {format_plural} = require('../utils/helpers');

test('format_date() returns a date string', () => {

    const date = new Date('2020-03-20 16:12:03');

    expect(format_date(date)).toBe('3/20/2020');
});

test('format_plural() to return a single or plural word', () => {

    expect(format_plural('point', 1)).toBe('point');

})