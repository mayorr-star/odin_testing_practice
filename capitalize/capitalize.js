function capitalize(string) {
  if (typeof(string) !== "string") return "Only strings are accepted";
  if (string.trim().length === 0) return "";
  const firstChar = string.charAt(0).toUpperCase();
  const splitStr = string.slice(1);
  return firstChar.concat(splitStr).join("");
}
module.exports = capitalize;
