module.exports = function kishimyUiKit(string) {
  if (typeof string !== "string") throw new TypeError("It should be a string!");
  return string.replace(/\s/g, "");
};