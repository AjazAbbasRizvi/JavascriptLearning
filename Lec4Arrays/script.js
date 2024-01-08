// Array
// Working on function of Array With Vanilla manner

// 1) Removing Element in the last index

let array = [1, 2, 3, 4, 5, 7, 8, 10];

function RemoveLastElementOfArray(arr) {
  for (let i = 0; i <= arr.length; i++) {
    if (i == arr.length) {
      array.length = array.length - 1;
    }
  }
  return array;
}

// console.log(RemoveLastElementOfArray(array));

// 2) Removing the element from starting

function RemoveElementFromStarting(array) {
  let newarr = [];

  for (let i = 1; i < array.length; i++) {
    newarr[i - 1] = array[i];
  }
  return newarr;
}

// let optArr = RemoveElementFromStarting(array);
// array = optArr;
// console.log(array);

// -------------------------------------------------------------------------------------------------------------------------------------------

// 3) Splice Vanilla Method

function Spilce(array, startIndex, EndIndex) {
  let newArray = [];
  var positon = 0;

  for (let j = 0; j < array.length; j++) {
    let hasElement = false;
    for (let k = startIndex; k <= EndIndex; k++) {
      if (array[j] == array[k]) {
        hasElement = true;
        break;
      }
    }
    if (hasElement == false) {
      newArray[positon] = array[j];
      positon++;
    }
  }
  return newArray;
}

// console.log(Spilce(array, 2, 4));

// -------------------------------------------------------------------------------------------------------------------------------------------

// Spread Opretaors 

let spArray = [1,2,3]
let spArray1 = ["A", "B"]

let SpreadArray = [...spArray, ...spArray1, "NewItem"];
// console.log(SpreadArray);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Const Use to Store Array , All the methods of Array will work on Const

const DArray = ["Apple", "Mango"];
DArray.push("Little");
// console.log(DArray);

// Till here everything Will Work fine

// Now If we try to assign the Value to DArray in the below way it will throw Error 

// DArray = ["Kilo"];
// console.log(DArray);
// Error - TypeError: Assignment to constant variable. at Object.<anonymous>

// Where as This can be allowed in Let DataType 

// -------------------------------------------------------------------------------------------------------------------------------------------

// For Of loop in Array 

for (let fruit of DArray) {
  // console.log(fruit);
}

// -------------------------------------------------------------------------------------------------------------------------------------------

// Array Destructuring

const myArray = [1, 2, 3, 4];

// let[val1, val2, val3, val4] = myArray;
// console.log(val1);
// console.log(val2);
// console.log(val3);
// console.log(val4);

// Now Saving First two values only

// let [val1, val2] = myArray
// console.log(val1);
// console.log(val2);

// Now Skiping the second value and saving the rest 

// let[val1, ,val3,val4] = myArray
// console.log(val1, val3, val4);

 //Now Skiping the  and third value and saving the rest 

//  let[val1, , ,val4] = myArray
//  console.log(val1, val4);

//  Making New Array from array Destructuring 

// let [value1, value2, ...newArray] = myArray;
// console.log(value1, value2);
// console.log(newArray);

// Skiping the first value and storing the rest in new Array 

// let [, ...newArray] = myArray;
// console.log(newArray);

// Peforming the simple operation on the valriables which we got from array destructuring i.e. 
// we can modify the variable which we get from destructuring in the same manner like we play with normal variable

// let [val1] = myArray;
// console.log(val1);
// val1 = val1 + 10;
// console.log(val1);
// val1 = "Hello World";
// console.log(val1);





