let originalText = document.getElementById("originalText").value;
let finalText;

function content(val) {
  originalText = val;
}

function encrypt(txt) {
  finalText = txt
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

  return finalText;
}

function decrypt(txt) {
  finalText = txt
    .replace(/enter/gi, "e")
    .replace(/imes/gi, "i")
    .replace(/ai/gi, "a")
    .replace(/ober/gi, "o")
    .replace(/ufat/gi, "u");

  return finalText;
}

function btnEncrypt() {
  console.log(encrypt(originalText));
  let replaceText = (document.getElementById("finalText").value = finalText);
}

function btnDecrypt() {
  console.log(decrypt(originalText));
  let replaceText = (document.getElementById("finalText").value = finalText);
}
