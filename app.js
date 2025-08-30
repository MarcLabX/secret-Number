// Script for the game
alert('Welcome to a Secret Number Game!');
let maxNumber = 10
let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
let kick;
let attemps = 1;

do {
    kick = prompt(`Choose a number between 1 and ${maxNumber}`);

    if (Number(secretNumber) == Number(kick)) {
        break;
    } else if (Number(kick) == '') {
        alert('Enter a valid number!')
    } else {
        if (kick > secretNumber) {
            alert(`The secret number is less than ${kick}`);
        } else {
            alert(`The secret number is greater than ${kick}`);  
            }
            attemps++;
    }
} while (kick != secretNumber);

let attempWord = attemps > 1 ? 'attemps' : 'attemp';
alert(`Perfect! You found the secret number: (${secretNumber}) and you make ${attemps} ${attempWord}.`);