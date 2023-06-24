/*
in: letter
out: diamond
rules:
- 'A' top and bottom
- horiz sym
- vert sym
implicit rules:
-

data structure:
'1A1' = space == idx
'B1B' space == idx
'1A1'

'22A22' space == idx
'1B1B1' outer = p
'C333C' space == idx + 1
'1B1B1'
'22A22'

'D55555D'
'1C333C1'
'22B1B22'
'333A333'

Center Space:
B -> 1
C -> 3
D -> 5
E -> 7

A Space:
B -> 1
C -> 2
D -> 3
E -> 4
----> always idx on either side

algo:
- 'aMap' array of letters
- `oddMap` obj letters with increasing odd numbers

- SET `baseIdx` to `aMap` indexOf `letIn`


A spacing is always letter `idx` on both sides
Center:
 If Even, idx
 If Odd, idx + 1

 */
class Diamond {
  st
  static _makeA(idxIn) {
    return ' '.repeat(idxIn) + 'A' + ' '.repeat(idxIn);
  }

  static makeDiamond(letIn) {
    let letArr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    let letInIdx = letArr.indexOf(letIn);
    if (letIn === 'A') return `${this._makeA(letInIdx)}\n`;

    let midSpace = -1;
    for (let idx = 0; idx < letInIdx; idx ++) {
      midSpace += 2;
    }

    let diamond = '';
    let outerSpace = 0;
    let innerSpace = midSpace;

    for (let idx = letInIdx; idx >= 0; idx--) {
      if (idx === letInIdx) {
        diamond = diamond.concat(`${letArr[letInIdx]}${' '.repeat(innerSpace)}${letArr[letInIdx]}\n`);
        outerSpace += 1;
        innerSpace -= 2;
      } else if (idx !== 0) {
        let line = `${' '.repeat(outerSpace)}${letArr[idx]}` +
                   `${' '.repeat(innerSpace)}` +
                   `${letArr[idx]}${' '.repeat(outerSpace)}\n`;
        diamond = diamond.concat(`${line}`);
        diamond = line.concat(`${diamond}`);
        outerSpace += 1;
        innerSpace -= 2;
      } else {
        diamond = diamond.concat(this._makeA(letInIdx), '\n');
        diamond = this._makeA(letInIdx).concat('\n').concat(diamond);
      }
    }
    return diamond;
  }
}

module.exports = Diamond;