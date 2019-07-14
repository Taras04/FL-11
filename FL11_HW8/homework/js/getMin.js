function getminValue() {
    let minValue = arguments[0];
    for(let i = 1; i<arguments.length; i++){
        if (isBigger(minValue, arguments[i])){
            minValue = arguments[i];
        }
    }
    return minValue;
}
function isBigger(a, b) {
    return a>b;
}
getminValue(3, 0, -3);