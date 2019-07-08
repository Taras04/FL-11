let tentative = 3;
const p = 2;
let possiblePrize = 100;
let maxNumber = 8;
let prize = 0;       
let card = confirm('Do you want to play a game?');
if(!card) {
    alert('You did not become a billionaire, but can.');
} else {
    while(card) { 
        let play = true;       
        while (play) {
            let numberRandom = Math.floor(Math.random() * (maxNumber + 1));
            let guessed = false;            
            for (let i = 1; i < tentative + 1; i++) {
                let enterNumber = Number(prompt(
                    `Choose a roulette pocket number from 0 to ${maxNumber}.
                         Attempts left:  ${tentative - i + 1}
                         Total prize: ${prize}$
                         Possible prize on current attempt: ${possiblePrize / Math.pow(p, i - 1)}$`),'');
                if (enterNumber < 0 || enterNumber > maxNumber || isNaN(enterNumber)){
                    alert('Chosen a roulette pocket number is incorrect.');
                } else if (numberRandom === enterNumber) {
                    prize += possiblePrize / Math.pow(p, i - 1);
                    break;
                } else {
                    if (i === tentative) {
                        guessed = true;
                        break;
                    }
                }
            }
            if (guessed) {
                break;
            }
            play = confirm(`Congratulation, you won! Your prize is: ${prize}$. 
                Do you want to continue?`);
            if (play) {
                maxNumber += p*p;
                possiblePrize *= p;
            } else {
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${prize}$`);
        card = confirm('Do you want to play again?');
    }
}