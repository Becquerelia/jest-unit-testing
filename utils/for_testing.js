const palindrome = (string) => {
  if (typeof string === "undefined") return undefined;
  return string.split("").reverse().join("");
};

const average = (array) => {
  let sum = 0;
  array.forEach((eachNum) => {
    sum += eachNum;
  });
  return sum / array.length;
};

module.exports = { palindrome, average };
