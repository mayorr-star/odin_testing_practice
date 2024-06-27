function reverseString(string) {
    if (typeof string !== "string") return "Only strings are accepted";
    if (string.length === 0) return "";
    return string.split("").reverse().join("");
}
module.exports = reverseString