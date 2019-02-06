// something to translate input text to morse code

// this will take the input to pass to translator
// returns the translated text
function translate(text) {
    text = text.toLowerCase().split("");

    console.log(text);
}

// translate to morse code
// returns the morse code
function translateNow(char) {}

// translate to english
// returns english
function translateNow(char) {}

// test english -> morse
console.log(translate("Test") === "- . ... -");
// test morse -> english
console.log(translate("... --- ...") === 'sos');