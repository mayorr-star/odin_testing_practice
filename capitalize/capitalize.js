function capitalize(string) {
  if (typeof(string) !== "string") return "Only strings are accepted";
  if (string.trim().length === 0) return "";
  return string.charAt(0).toUpperCase() + string.slice(1);
}
module.exports = capitalize;
