/*

rules:
- typically monthly on same day of the week
- objects represent meetup date
  - in: month num (1-12), and year (e.g. 2021)
  -- 'if you ask for the 2nd Wednesday of May 2021,
      the object should be able to determine that the meetup
      for that month will occur on the 12th of May, 2021.

- descriptors: 'first', 'second', 'third', 'fourth', 'fifth', 'last', and 'teenth'
- days of week: 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', and 'Sunday'
-- case insensitive
 */
function dateAsString(year, month, day) {
  let date = new Date(year, month - 1, day);
  return date.toString();
}

class Meetup{
  constructor(y, m) {
    this.y = y;
    this.m = m;
  }
  static descriptors = ['first', 'second', 'third', 'fourth', 'fifth', 'last', 'teenth'];
  static days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  _validDay(day) {
    //STUB - needed?
  }
  _daysInDescriptor(desc) {
    let daysOf = {
      'first': [1, 2, 3, 4, 5, 6, 7],
      'second': [8, 9, 10, 11, 12, 13, 14],
      'third': [15, 16, 17, 18, 19, 20, 21],
      'fourth': [22, 23, 24, 25, 26, 27, 28],
      'fifth': [29, 30, 31],
      'teenth': [13, 14, 15, 16, 17, 18, 19],
    }
    let lastMonthMap = [null, 'max', 'min', 'max', 'med', 'max', 'med',
                        'max', 'max', 'med', 'max', 'med', 'max',];
    let lastDaysMap = {
      'max': [31, 30, 29, 28, 27, 26, 25],
      'med': [30, 29, 28, 27, 26, 25, 24],
      'min': [28, 27, 26, 25, 24, 23, 22],
    }
    let possibleDays = [];
    let lowerDesc = desc.toLowerCase();
    let correctedDaysOf;
    if (desc === 'last') {
      correctedDaysOf = lastDaysMap[lastMonthMap[this.m]];
    } else {
      correctedDaysOf = daysOf[lowerDesc];
    }

    for (let num of correctedDaysOf) {
      let day = this._dateAsString(this.y, this.m, num);
      if (day) {
        //GC: if day does not exist in month
        possibleDays.push(day);
      }
    }
    return possibleDays;
  }
  _findDay(dayIn, arrOfDays) {
    let actualDay = null;
    for (let day of arrOfDays) {
      if (day.slice(0, 3).toLowerCase() === dayIn.slice(0, 3).toLowerCase()) {
        actualDay = day;
        break;
      }
    }
    return actualDay;
  }
  _dateAsString(year, month, day) {
    let date = new Date(year, month - 1, day);
    return date.toString();
  }
  day(day, desc) {
    let invalidFifths = ['wednesday', 'thursday', 'friday', 'sunday'];
    if (desc === 'fifth' && invalidFifths.includes(day.toLowerCase())) {
      // GC - invalid days EOM?
      return null
    }
    let possibleDays = this._daysInDescriptor(desc);
    let actualDay = this._findDay(day, possibleDays);
    console.log(possibleDays)
    return actualDay;
  }

}
module.exports = Meetup;
