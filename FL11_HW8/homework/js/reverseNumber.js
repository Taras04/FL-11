function reverseNumber (a){
    let string = Math.abs(a).toString();
    let newa = '';
    for (let i = string.length - 1; i >= 0; i--){
        newa += string[i];
    }
    return newa * Math.sign(a);
}
console.log(reverseNumber (1000));