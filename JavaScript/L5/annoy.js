//Annoy-omatic
// Create your own index.html
// 1. Ask the user " Are we there yet"
// 2. Keep asking again and again until they enter "yes" OR "yeah"
// 3. Then, alert "Yay, we finally made it!"

var confirm = prompt('Are we there yet?');

while(!(confirm == 'yeah' || confirm == 'yes')){
  confirm = prompt('Are we there yet?');
}

output.innerHTML = 'Yay, we finally made it!';
