console.log("CONNECTED");

// 01 printReverse()
/*
Write a function printReverse() that takes an array as an arguement
and prints out the elements in the array in reverse order
(don't actually reverse the array itself

Example:
printReverse([1,2,3,4]);
-> 4
-> 3
-> 2
-> 1
printReverse(["a","b","c","d"]);
-> d
-> c
-> b
-> a
*/

function printReverse(array) {
  let length = array.length;
  for(let i = length - 1; i >= 0; i--){
    console.log(array[i]);
  }
}

// 02 isUniform()
/*
Write a function isUniform() which takes an array as an argument
and returns true if all elements in the array are identical

Example:
isUniform([1,1,1,1])		-> true
isUniform([2,1,1,1])		-> false
isUniform(["a","a","a"])	-> true
isUniform(["a","b","p"])	-> false
*/

function isUniform(array) {
  let length = array.length;
  for (let i = 0; i < length - 1; i++){
    if(array[i] != array[i + 1]){
      return false;
    }
  }

  return true;
}


// 03 sumArray()
/*
Write a function sumArray() that accepts an array of numbers and
returns the sum of all numbers in the array

Example:
sumArray([1,2,3])			-> 6
sumArray([4,8,5,10])		-> 27
sumArray([-5,100])			-> 95
*/
function sumArray(array){
  let sum = 0;
  for(let i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

// 04 max()
/*
Write a function max() that accepts an array of numbers and
return the maximum number in the array

Example:
max([1,2,3])                -> 3
max([4,10,5,10])            -> 10
max([-5,100])               -> 100
*/

function max(array){
  let maxNum = array[0];
  for(let i = 0; i < array.length; i++){
    if(array[i] >= maxNum){
      maxNum = array[i];
    }
  }

  return maxNum;
}
