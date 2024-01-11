// Even And Odd Number

function EvenOdd(inputNumber) {
  if (inputNumber % 2 === 0) {
    return true;
  } else {
    return "Number is Odd Number";
  }
}

const result = EvenOdd(4);
// console.log(result);

//-------------------------------------------------------------------------------------------------------------------------------------------

// first Character of String

function firstCharacterOFstring(InputString) {
  if (typeof InputString === "string") {
    return InputString[0];
  }
  return "Input is not a string";
}

// console.log(firstCharacterOFstring("ajaz"));

//-------------------------------------------------------------------------------------------------------------------------------------------

// Function to return Index of an element inside an Array

// function IndexOFElemnt(inputArray, element) {
//     for (let index = 0; index < inputArray.length; index++) {
//         if (inputArray[index] === element) {
//             return index;
//         }
//     }
//     return "Element Not Found"
// }

// console.log(IndexOFElemnt([1,78,65,"Ajaz"], "5"));

//-------------------------------------------------------------------------------------------------------------------------------------------

// FunctionExpression (Storing Function inside variable)

const IndexOFElemnt = function (inputArray, element) {
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] === element) {
      return index;
    }
  }
  return "Element Not Found";
};

// console.log(IndexOFElemnt([1,2,4,5,78], 5));

//-------------------------------------------------------------------------------------------------------------------------------------------

// Arrow Function

// Arrwo Function Without Parameters

let SingASong = () => {
  console.log("Happy Birthday 2 U");
};

// SingASong();

// Arrow Function With Parameters

const PositionOFElemnt = (inputArray, element) => {
  for (let index = 0; index < inputArray.length; index++) {
    if (inputArray[index] === element) {
      return index;
    }
  }
  return "Element Not Found";
};

// console.log(PositionOFElemnt([1,2,4,5,78], 5));

//-------------------------------------------------------------------------------------------------------------------------------------------

// Hoisting - When we call a function before its declaration then its called hoisting
// hoisting only works in the case of function decleration but not in the case of function expression or Arrow Function

// example :-

hello();
function hello() {
  // console.log("Hello");
}
//  -- It Works

// hello();
// const hello = function () {
//     console.log("Hello");
// }

// -- It thorws Error - ReferenceError: Cannot access 'hello' before initialization

// hello();
// const hello = ()=> console.log("hello");

// -- It thorws Error - ReferenceError: Cannot access 'hello' before initialization

//-------------------------------------------------------------------------------------------------------------------------------------------

// Functions Inside Function

const app = () => {
  const firstfuncAdd = function (num1, num2) {
    console.log(num1 + num2);
  };

  function mul(num1, num2) {
    console.log(num1 * num2);
  }

  console.log("Inside App");
  firstfuncAdd(5, 6);
  mul(5, 6);
};
// app();

//-------------------------------------------------------------------------------------------------------------------------------------------

// Default Parameters - we can set any of the function parameter as deafult for example when we created below function we were aware
// that second parameter in some sceanario may be undefined that why we assigned zero as the deafult value of the parameter during the function declaration

const defParam = (num1, num2 = 0) => {
  console.log(num1 + num2);
};

// defParam(4);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Rest Parameters

function funcRest(val1, val2, ...Vrest) {
//   console.log(val1);
//   console.log(val2);
//   console.log(Vrest);
}

// funcRest(1, 2, 3, 4, 5, 6, 7, 8);

// Taking All parameters as rest

function AddAllRestParams(...allRest) {
  console.log(allRest);

  let sum = 0;

  for (let index = 0; index < allRest.length; index++) {
    sum += allRest[index];
  }

  return sum;
}
// console.log(AddAllRestParams(1, 2, 3, 4, 5, 6));

//-------------------------------------------------------------------------------------------------------------------------------------------

// Parameter Destructuring 

const person = {
  firstName : "Ajaz",
  Age : 23,
  Gender : "Male"
};

function getDetails({firstName, Age, Gender, Profession = 'NotAvailable'}){
  console.log(firstName);
  console.log(Age);
  console.log(Gender);
  console.log(Profession);
}

// getDetails(person);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Call-Back Functions

// When We pass one function as an argument in another function then it is called as callBack Funnction 

// Now we will create two functions one function will add two numbers then using call back we will pass the addtion to another function 
// and multiply it with X number and display the result 

function addTwoNumbers(num1, num2, MultiplyCallBAck){
  let sum = num1 + num2;
  MultiplyCallBAck(sum);
}

function Multiply(num){
  let mul = num * 5;
  // console.log(mul);
}

addTwoNumbers(2, 3, Multiply);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Function returning a function 

function mainFunc(params) {
  console.log(params);

  function secondaryFunc(someparams){
    console.log(someparams);
    return "I am secondary function";
  }
  return secondaryFunc;
}

const test = mainFunc("abs");
console.log(test("BBC"));