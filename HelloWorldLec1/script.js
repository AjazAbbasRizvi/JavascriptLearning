console.log("Hello World");

function varLetScope() {
  console.log(x); // It will print Undefined
  var x = 10;

  if (1 == 1) {
    let levelScope = 15;
    let x = 2;
    console.log(x); //It Will print 2
    console.log(levelScope); // It will print 15
  }

//   console.log(levelScope); // It Will Throw Error

  console.log(x); // It Will print 10
  var x = 2;
  console.log(x); // It Will print 2 
}

varLetScope();
