//JS Prompt Exercise
/* INSTRUCTIONS
Create your own HTML file
Using the prompt() method do the following
1. Ask for the user's first name
2. Ask for the user's last name
3. Ask for the user's age
4. Print out the user's full name in a sentence
5. Print out the user's age in a sentence
*/

var firstName = prompt('What is your first name?'),
    lastName = prompt('What is your last name?'),
    age = prompt('What is you age?');

var  fullName = firstName + " " +  lastName;

output.innerHTML = 'Your full name is ' + fullName;
output_age.innerHTML = 'Your are ' + age + ' years old.';

var line = document.getElementById(output);
var line2 = document.getElementById(output_age);

console.log(line);
console.log(line2);
