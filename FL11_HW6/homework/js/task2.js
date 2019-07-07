let a= +prompt('Enter the length of the first side of the triangle','');
let b= +prompt('Enter the length of the second side of the triangle','');
let c= +prompt('Enter the length of the third side of the triangle','');
if(a+b>c && a+c>b && b+c>a){
    if(a===b && c===b && a===c){
        console.log('Eequivalent triangle');
    } else if(a===b || c===b || a===c) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle'); 
    }
} else {
    console.log('Triangle doesn’t exist'); 
}

