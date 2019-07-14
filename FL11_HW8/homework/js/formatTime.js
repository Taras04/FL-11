function formatTime(number) {
    if (parseInt(number) !== number || number < 0 ) {
        return alert(`Incorrect date entered.`);
    } 
    let m = number % 60;
    let h = parseInt(number / 60) % 24;
    let d = parseInt(number / 1440) % 365;
    return `${d} day(s) ${h} hour(s) ${m} minute(s).`
}

console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));