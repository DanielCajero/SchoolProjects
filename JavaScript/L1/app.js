var firstName = prompt('What is your first name?'),
    lastName = prompt('What is your last name?');

var  fullName = firstName + " " +  lastName;

output.innerHTML = 'Your full name is ' + fullName;

var line = document.getElementById(output);

line.innerHTML = 'Your full name is ' + fullName;

console.log('Your full name is ' + fullName);
