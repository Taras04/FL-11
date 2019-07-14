function isInteger (a) {
    a *= 10;
    return a % 10 === 0;
}
console.log(isInteger(5));
console.log(isInteger(5.1));