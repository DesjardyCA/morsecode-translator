// something to translate input text to morse code

// this will take the input to pass to translator
// returns the translated text
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
  for (character of text) {
    out += morse(character);
  }

  return out;
}

function translateText(text) {
  var out = "";
  for (character of text) {
    out += alpha(character) + " ";
  }

  return out.slice(0, -1);
}

function morse(str) {
  switch (str) {
    case ".-":
      return "a";
    case "-...":
      return "b";
    case "-.-.":
      return "c";
    case "-..":
      return "d";
    case ".":
      return "e";
    case "..-.":
      return "f";
    case "--.":
      return "g";
    case "....":
      return "h";
    case "..":
      return "i";
    case ".---":
      return "j";
    case "-.-":
      return "k";
    case ".-..":
      return "l";
    case "--":
      return "m";
    case "-.":
      return "n";
    case "---":
      return "o";
    case ".--.":
      return "p";
    case "--.-":
      return "q";
    case ".-.":
      return "r";
    case "...":
      return "s";
    case "-":
      return "t";
    case "..-":
      return "u";
    case "...-":
      return "v";
    case ".--":
      return "w";
    case "-..-":
      return "x";
    case "-.--":
      return "y";
    case "--..":
      return "z";
    case "/":
      return " ";
    default:
      return "";
  }
}

function alpha(char) {
  switch (char) {
    case "a":
      return ".-";
    case "b":
      return "-...";
    case "c":
      return "-.-.";
    case "d":
      return "-..";
    case "e":
      return ".";
    case "f":
      return "..-.";
    case "g":
      return "--.";
    case 'h':
      return "....";
    case 'i':
      return "..";
    case 'j':
      return ".---";
    case 'k':
      return "-.-";
    case 'l':
      return ".-..";
    case 'm':
      return "--";
    case 'n':
      return "-.";
    case 'o':
      return "---";
    case 'p':
      return ".--.";
    case 'q':
      return "--.-";
    case 'r':
      return ".-.";
    case 's':
      return "...";
    case 't':
      return "-";
    case 'u':
      return "..-";
    case 'v':
      return "...-";
    case 'w':
      return ".--";
    case 'x':
      return "-..-";
    case 'y':
      return "-.--";
    case 'z':
      return "--..";
    default:
      return "/";
  }
}

// test english -> morse
console.log(translate("Test") === "- . ... -");
console.log(translate("Test test") === "- . ... - / - . ... -");
// test morse -> english
console.log(translate("... --- ...") === 'sos');
console.log(translate("... --- ... / ... --- ...") === 'sos sos');