let email=prompt('Enter your email', '');
const minLenEmail=6;
const minLenPsw=5;
if (email===null || email===''){
    alert('Canceled');
} else if (email.length<minLenEmail){
    alert("I don't know any emails having name length less than 6 symbols");
} else if(email==='user@gmail.com'|| email==='admin@gmail.com'){
    let psw=prompt('Enter your password','');
    if (psw===null || psw===''){
        alert('Canceled');
    }
    if(email === 'user@gmail.com' && psw === 'UserPass' || email === 'admin@gmail.com' && psw === 'AdminPass'){
        if(confirm('Do you want to change your password?')){
            let oldPsw=prompt('Enter your password','');
            if (oldPsw===null || oldPsw===''){
            alert('Canceled');
            } else if (oldPsw===psw){
                psw = prompt('Enter new password','');
                if (psw.length<minLenPsw ){
                    alert('It’s too short password. Sorry'); 
                } else { 
                   let psw2=prompt('Enter new password','');
                   if (psw2!==psw) {
                    alert('You wrote the wrong password.');
                   } else {
                    alert('You have successfully changed your password.');
                   }
                } 
            } else {
                alert('Wrong password.'); 
            }
        } else {
            alert('You have failed the change.');
        }
    } else {
        alert('Wrong password.'); 
    }
} else {
    alert("I don't know you.");
}
