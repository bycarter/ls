class Clock {
  constructor(hour = 0, min = 0) {
    this.hour = Clock._numToString(hour);
    this.min = Clock._numToString(min);
    Clock._clocks[`${this.hour}:${this.min}`] = this;
  }
  toString() {
    return `${this.hour}:${this.min}`;
  }
  static _numToString(numIn) {
    return numIn > 9 ? String(numIn) : `0${String(numIn)}`
  }
  static _clocks = {};

  static _findClock (timeIn) {
    if (Clock._clocks[timeIn]) {
      return Clock._clocks[timeIn];
    }
    return false;
  }
  static _convertTime(currentTime, minIn, sym) {
    let hours = currentTime[0] + currentTime[1];
    let min = currentTime[3] + currentTime[4];
    let [ hourOut, minOut ] = ['', ''];
    if (sym === '+') {
      let totMin = Number(min) + minIn;
      if (totMin < 60) {
        minOut = totMin;
        hourOut = hours;
      } else {
        let overHours = Math.floor(totMin / 60);
        minOut = totMin % 60;
        let totHours = overHours + Number(hours);
        while (totHours >= 24) {
          totHours -= 24;
        }
        hourOut = totHours;
      }
    } else {
      let totMin = Number(min) - minIn;
      if (totMin > 0) {
        minOut = totMin;
        hourOut = hours;
      } else {
        let underHours = Math.abs(Math.floor(totMin / 60));
        minOut = Math.abs(totMin) === 60 ? 0 : 60 - Math.abs(totMin % 60);
        let totHours = Number(hours) - underHours;
        while (totHours < 0) {
          totHours += 24;
        }
        hourOut = totHours;
      }
    }
    return Clock.at(hourOut, minOut);
  }
  static at(hourIn, minIn) {
    let time = `${Clock._numToString(hourIn)}:${Clock._numToString(minIn)}`;
    return Clock._findClock(time) ? Clock._findClock(time) : new Clock(hourIn, minIn);
  }
  add(minIn) {
    return Clock._convertTime(this.toString(), minIn, '+');
  }
  subtract(minIn) {
    return Clock._convertTime(this.toString(), minIn, '-');
  }
  isEqual(clockin) {
    return this === clockin;
  }
}

module.exports = Clock;
let c = Clock.at(10);
console.log(Clock._clocks)