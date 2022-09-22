// input: float
// output: string
// data s: object
// rules:
//  convert decimal degrees to deg min sec
//  zero is equal to zero
//algo:
//  receive `angDeg`
//  declare `deg` initialize as floor of `angDec`
//  declare `min` initialize as floor of `angDeg` - `deg` * 60
//  declare `sec` initialize as toFixed of (`angDeg` - `deg` * 60) - `min` * 60
//  concat values into string

function dms(ang) {
  const MINDEG = 60;
  const SECMIN = 60;

  let deg = Math.floor(ang);
  let min = Math.floor((ang - deg) * MINDEG);
  min = String(min).padStart(2, '0');
  let sec = Math.round((((ang - deg) * MINDEG) - min) * SECMIN);
  sec = String(sec).padStart(2, '0');

  return console.log(`${deg}˚${min}'${sec}"`);
}


//tests:
dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"
