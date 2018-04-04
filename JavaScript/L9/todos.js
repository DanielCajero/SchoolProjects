// Array Todo List APP
/*
1. Declare an array
2. Prompt user on what they would like to do from the following options,
   then assign response to a variable
	- "new" will prompt to enter a new todo item and will then push
		user entry to the existing array
		Display the newly added todo item in the console to confirm that it has been added
	- "list" will print in console each todo item in the array with its
		corresponding index
		Example:
		-> 0 : Get the milk
		-> 1 : Pick up dry cleaners
		-> 2 : Wash clothes
	- "delete" will prompt the user to enter the index of a todo item they wish to delete
	- "quit" will end the program

Use functions for adding todo, printing the list, and deleting todo
*/

var arrayLol = [];
let item;
let arrayIndex = 0;
let arraySize = 0;
var secondArray = [];
var task = prompt('what would you like to do?');

while(task != 'quit'){
  if(task == 'new'){
    item = prompt('Add a todo item.');
    arrayLol.push(item);
    task = prompt('what would you like to do?');
  } else if (task == 'list') {
    for(let i = 0; i < arrayLol.length; i++){
       document.write('</br>['+ i + ']' + ': ' + arrayLol[i]);
    }
    task = prompt('what would you like to do?');
  } else if (task == 'delete') {
    arrayIndex = prompt('What item do you wish to delete? Input index.');
    if(arrayIndex == 0){
      arrayLol.shift();
    } else if (arrayIndex == (arrayLol.length - 1)) {
      arrayLol.pop();
    } else if (arrayIndex > 0 && arrayIndex < arrayLol.length) {
        while(secondArray.length){
          secondArray.pop();
        }
        for(let i = 0; i < arrayLol.length - 1;i++){
         if(i >= arrayIndex){
           secondArray[i] = arrayLol[i + 1];
         }
         else {
           secondArray[i] = arrayLol[i];
         }
        }
        arrayLol = secondArray;
    } else {
      console.log('Error');
    }
    task = prompt('what would you like to do?');
  } else {
    task = prompt('what would you like to do?');
  }
}
