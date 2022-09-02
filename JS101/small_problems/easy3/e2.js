// in: string
// out: string in a box
// tst: see graphic below
// ds: string
// alg:
// find string length
// calc and create header and footer
// concate boarders to string
// log to console

function logInBox(str) {
  let len = str.length
  let topBottom = '+' + '-'.repeat(len + 2) + '+';
  let spacer = '|' + ' '.repeat(len + 2) + '|';
  let framedStr = '| ' + str + ' |';

  console.log(topBottom);
  console.log(spacer);
  console.log(framedStr);
  console.log(spacer);
  console.log(topBottom);
}


logInBox('To boldly go where no one has gone before.');
/*
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+
*/
