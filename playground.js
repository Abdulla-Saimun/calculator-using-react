var number = [23, 52, 523];

var newNumber = [...number, 20, 52]; // create new array
// console.log(newNumber); [ 23, 52, 523, 20, 52 ]

// exact copy immutably
const a = [...newNumber];
newNumber.push(100);
// console.log(a);
// console.log(newNumber);

// concat of array
const num1 = [1, 2, 3, 4, 6];
const num2 = [5, 6, 7, 8];

const newArr = [...num1, ...num2];
// console.log(newArr);

// object spreeding

const myobj = {
  x: 1,
  y: 2,
};

const myobj2 = {
  a: 3,
  b: 4,
};

const finalObj = {
  ...myobj,
  ...myobj2,
};

// console.log(finalObj); { x: 1, y: 2, a: 3, b: 4 }

// rest operation

function myFunction(a, ...params) {
  console.log(params);
  console.log(a);
}

myFunction(3, 5, 2, 6, 1);
