function caesarCipher(str, shiftFactor = 1) {
  if (!str || typeof str !== "string") return false;
  return [...str].map((char, i) => {
    let charCode = str.codePointAt(i);
    if (charCode >= 65 && charCode <= 90) {
      charCode += shiftFactor;
      if (charCode > 90) {
        charCode = charCode - 90 + 64;
      } else if (charCode < 65) {
        charCode = charCode - 65 + 89;
      }
    } else if (charCode >= 97 && charCode <= 122) {
      charCode += shiftFactor;
      if (charCode > 122) {
        charCode = charCode - 122 + 96;
      } else if (charCode < 97) {
        charCode = charCode - 97 + 121;
      }
    }
    return charCode
  }).map(char => String.fromCharCode(char)).join("");
}
module.exports = caesarCipher;
