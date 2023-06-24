/*
rules:
- each robot has different name
-- if `name` exists return name, otherwise generate
 */

class Robot {
  constructor() {
    this.robotName = this.name();
  }
  static existingNames = [];

  static _invalidName(nameIn) {
    return Robot.existingNames.includes(nameIn);
  }

  static _generateName() {
    let chars = 'QWERTYUIOPASDFGHJKLZXCVBNM'.split('');
    let newName = '';
    newName += chars[Math.floor(Math.random() * chars.length)];
    newName += chars[Math.floor(Math.random() * chars.length)];
    let validNum = Math.floor(Math.random()*1000);
    while (validNum < 100) {
      validNum = Math.floor(Math.random()*1000);
    }
    newName += String(validNum);
    return newName;
    }

  name() {
    if (!this.robotName) {
      this.robotName = Robot._generateName();
      while (Robot._invalidName(this.robotName)) {
        this.robotName = Robot._generateName();
      }
      Robot.existingNames.push(this.robotName);
    }
    return this.robotName;
  }
  reset() {
    this.robotName = null;
    this.name();
  }
}

module.exports = Robot;
