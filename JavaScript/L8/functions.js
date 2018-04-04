/*Functions Problem Set*/

/*
isEven()
Write a function isEven() which takes a single numeric argument and
return true if the number is even, and false otherwise
Example:
isEven(42)     //true
isEven(555)    //false
*/
function isEven(num){
  if(num % 2 == 0){
    return true;
  }

  return false;

}

/*
factorial()
Write a function factorial() which takes a single numeric argument
and returns the factorial of that number
6! is 6 x 5 x 4 x 3 x 2 x 1
0! is 1
Example:
factorial(5);   //120
factorial(10);  //3628800
*/
function factorial(num){
  let fact = 1;
  if(num == 0){
    return 1;
  }
  else{
    for(let index = 1; index <= num; index++){
      fact *= index;
    }
    return fact;
  }
}

/*
kebabToSnake()
write a function kebabToSnake() which takes a single kebab-cased
string argument and return the sanke_cased version
Basically, replace "-" with "_"
Example:
kebabToSnake("hello-world");    //"hello_world"
*/
function kebabToSnake(str){
  let snake = str.replace('-','_');
  return snake;
}
