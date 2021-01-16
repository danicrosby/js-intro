console.log("Greetings beautiful from main.js")


//***** ES5 FUNCTION/
// function sayHello() {
//   console.log('Hello!')
// }

// sayHello();  //This is how you CALL the function to make it run


//***** /

// const sayHello = function() {
//   console.log("Hello!")
// }

// sayHello();


//***** ES6 FUNCTION/ USE THIS WAY/ TO BE USED IN REACT AS WELL

const sayHello = () => {
  console.log("Hello!")  // Hello!
}

sayHello();

// Always CALL the function after. 
// If you move the CALL before the function then its not defined


// ********** FUNCTION WITH ARGUMENTS 

function logsHello(name) {
  console.log(`Hello, ${name}!`);
}

logsHello('Dani-o');


// ********** FUNCTION WITH 2 PARAMETERS AND RETURNING VALUE OF 2 NUMBERS

const addsTwoNumbers = (num1, num2) => {
  const sum = num1 + num2;
  console.log(sum);
  return sum;  
  // in order to get a value, you have to use a return statement within the code block, otherwise undefined
  // local scope ( inside the function ) doesnt care about global scope
}

console.log(addsTwoNumbers(11, 22));
console.log(sum);
// JS reads top to bottom
// if there is a global scope ( above the function ) the first console runs first
// then second console is run because the function called sectioned
