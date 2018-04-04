/*
Guessing Game
Create your own index page.
*/

//1. create secretNumber
let num = 9;
var guess = prompt('Guess a number!');
let isRight = false;

while(isRight == false){
  if(guess == num){
    isRight = true;
  } else if (guess > num) {
    isRight = false;
    guess = prompt('Guess is to high! Guess again!');
  } else if (guess < num) {
    guess = prompt('Guess is to low! Guess again!');
  } else {
    prompt = ('Not a number guess again!');
  }
}

if(isRight) {
  output.innerHTML = 'Correct';
}
