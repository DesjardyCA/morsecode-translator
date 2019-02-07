// something to translate input text to morse code

// this will take the input to pass to translator
// returns the translated text
var dictionary = {
  a: ".-",
  b: "-...",
  c: "-.-.",
  d: "-..",
  e: ".",
  f: "..-.",
  g: "--.",
  h: "....",
  i: "..",
  j: ".---",
  k: "-.-",
  l: ".-..",
  m: "--",
  n: "-.",
  o: "---",
  p: ".--.",
  q: "--.-",
  r: ".-.",
  s: "...",
  t: "-",
  u: "..-",
  v: "...-",
  w: ".--",
  x: "-..-",
  y: "-.--",
  z: "--..",
  " ": "/"
}

function translate(text) {
  var text = text.toLowerCase();

  if (text.charAt(0) === '-' || text.charAt(0) === '.') {
    text = translateMorse(text.split(" "));
  }
  //else assuming its alphabet
  else {
    text = translateText(text.split(""));
  }

  return text;
}

function translateMorse(text) {
  var out = "";
  text.forEach(character => {
    out += getKeyByValue(dictionary, character);
  });

  console.log(out);
  return out;
}

function translateText(text) {
  var out = "";
  text.forEach(character => {
    out += dictionary[character] + " ";
  });

  console.log(out.slice(0, -1));
  return out.slice(0, -1);
}

function getKeyByValue(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

// test english -> morse
console.log(translate("Test") === "- . ... -");
console.log(translate("Test test") === "- . ... - / - . ... -");
// test morse -> english
console.log(translate("... --- ...") === 'sos');
console.log(translate("... --- ... / ... --- ...") === 'sos sos');