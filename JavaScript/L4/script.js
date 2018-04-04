// If age is negative print error message

// If age is 21 print "happy 21st birthday!"

// If age is odd print "your age is odd!"
//(not evenly divisible by two)

//BONUS If age is a perfect square print "perfect square!"
var age = prompt('What is you age');

if(age < 0){
  output.innerHTML = 'Impossible';
} else if (age == 21) {
  output.innerHTML = 'Happy 21st birthday!';
}else if (!(age % 2 == 0)) {
  output.innerHTML = 'Your age is odd!';
}else if (Math.sqrt(age) % 1 === 0) {
  output.innerHTML = 'perfect square';
}
