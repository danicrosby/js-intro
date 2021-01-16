console.log("Greetings beautiful from main.js")


//********* FUNCTION WITH CONDITIONAL AND ARGUMENT */


// FUNCTION DELARE ARGUMENT
function thisIsTrue(arg) {
  if (arg) {
    console.log('true');
  } else {
    console.log('false')
  }
}

thisIsTrue(false); //false


// TEMPLATE LITERAL
function thisIsTrue(arg) {
  if (arg === 'nice') {
    console.log(`You are ${arg}`);
  } else {
    console.log('false')
  }
}

thisIsTrue('nice'); // make sure to have same casing or defaults to false


// LOWER CASE
function thisIsTrue(arg) {
  if (arg === 'nice' || arg === 'Nice') {
    console.log('true');
  } else {
    console.log('false')
  }
}

thisIsTrue('Nice'); // now it takes in both capital and lower casing


function thisIsTrue(arg1, arg2) {
  if (arg1 === 'nice' && arg2 === 'Nice') {
    console.log(`You are ${arg}`);
  } else {
    console.log('false')
  }
}

thisIsTrue('Nice','nice'); // arugments comes in order arg1 = 'nice'  arg2 = 'Nice'


// BANG OPERATOR

function thisIsTrue(arg1, arg2) {
  if (arg1 !== 'nice' && arg2 !== 'Nice') {
    console.log(`You are ${arg}`);
  } else {
    console.log('false')
  }
}

thisIsTrue('Nice','nice'); //Opposite ! registers false


// LENGTH

function thisIsTrue(arg1, arg2) {
  if (arg1.length < 3) {
    console.log(`You are ${arg1}`);
  } else if (arg2.length > 3) {
    console.log('false');
  } else {
    console.log('You are NOTHING!');
  }
}

thisIsTrue('nice','mickeymouse');  //double check this one!!!



const canDrive = (age) => {
  if (age >= 15) {
    return true;
  }
    return false;
}

console.log(canDrive(15)); // or you can call it like this:

// const answer = (canDrive(15);
// console.log(answer);
