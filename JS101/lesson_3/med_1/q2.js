let munstersDescription = "The Munsters are creepy and spooky.";
let nDesc = '';
for (val of munstersDescription) {
  val.match(/[A-Z]/) ? nDesc += val.toLowerCase() : nDesc += val.toUpperCase();
}

console.log(nDesc);
