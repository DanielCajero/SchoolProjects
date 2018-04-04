/* For Loops Problem Set */

var numArray = []:
// 1. Print all numbers betweeen -10 and 19
for(let index = -10; index < 20; index++){
  numArray.push(index);
}

console.log(numArray);
// 2. Print all even number between 10 and 40
var numEven = [];

for (let index = 10; index < 41; index++){
  if(index % 2 == 0){
    numEven.push(index);
  }
}
console.log(numEven);

// 3. Print all numbers between 300 and 333
var newNumArray = [];

for (let index = 300; index <= 333; index++){
  newNumArray.push(index);
}

console.log(newNumArray);
// 4. Print all numbers divisible by 5 AND 3, between 5 and 75
var divsFiveAndThree = [];
for (let index = 5; index <= 75; index++){
  if(index % 3 == 0 && index % 5 == 0){
    divsFiveAndThree.push(index);
  }
}

console.log(divsFiveAndThree);

// 5. Print all numbers divisible by 5 OR 3, but NOT both,  between 5 and 75

var fiveOrThree = [];
var fiveAndThree = false;
for (let index = 0; index <= 75; index++){
  if(index % 3 == 0 && index % 5 == 0){
    fiveAndThree = false;
  } else {
    fiveAndThree = true;
  }

  if(fiveAndThree){
    if(index % 3 == 0){
      fiveOrThree.push(index);
    }

    if(index % 5 == 0){
      fiveOrThree.push(index);
    }
  }
}

console.log(fiveOrThree);

/* 6. Even Numbers
Print out all even numbers between 1 and 50.
Write two solutions: one with awhile loop
and one with a for loop.*/
let evenIndex = 1;
while(evenIndex <= 50){
  if(evenIndex % 2 == 0){
    console.log(evenIndex);
  }
  evenIndex++;
}

for(let index = 1; index <= 50; index++){
    console.log(index);
}


// 7. ASCII Art
/*
Write code to create an ASCII art trianle like
the one below. Use for loops.

$
$$
$$$
$$$$
$$$$$
$$$$$$

Hint: You may want to use nested loops
*/
let n = 6;
for(let index = 0; index <= n; index++){
  for(let subIndex = 1; subIndex <= index; subIndex++){
    console.log('S');
  }
  console.log('\n');
}


// 7. Fizzbuzz
Write a program that prints the numbers from 1 to 100.
But for multiples of three print "Fizz" instead of the number
and for the multiples of five print "Buzz". For numbers which are
multiples of both three and five print "FizzBuzz"
Example:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
11
Fizz
13
14
FizzBuzz

for(let index = 1; index <= 100; index++){
  if(index % 3 == 0 && index % 5 == 0){
    console.log('FizzBuzz');
  } else if (index % 5 == 0) {
    console.log('Buzz');
  } else if (index % 3 ==0) {
    console.log('Fizz');
  } else {
    console.log(index);
  }
}
