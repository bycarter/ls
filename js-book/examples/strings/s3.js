let repeat = (n, str) => {
  let lngStr = str;
  for (let i=0; i < n; i++) {
    lngStr += str;
  }
  console.log(lngStr);
}

repeat(5, 'ha');
