const palindrome = (string) => {
    return string
    .split("")
    .reverse()
    .join("")
}

const average = (array) => {
    let sum = 0;
    array.forEach((eachNum) => {
        sum += eachNum;
        return sum / array.lenght
    })
}

module.exports = { palindrome, average }