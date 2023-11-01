let input = "JavaScript";
let strLength;
// console.log(input);

for (let i = 0; i < input.length; i++) {
  // Finding the length of the string
  strLength = i;

  //Printing each element of the string
  // console.log(input[i]);
}

//Finding last element of the string
// console.log(input[strLength - 1]);

//Finding the length of the string
// console.log(strLength);

//String Functions In JavaScript
// Trim - will remove all the space from starting to end, trim always gives new string
// let trimstr = "   JavaScript     ";
// let newstr = trimstr.trim();
// console.log(trimstr);
// console.log(newstr);

//Concating string without string function

// let constr1 = "Java";
// let constr2 = "Script";
// let finalconstr = "";

// for (let i = 0; i < constr1.length; i++) {
//     finalconstr = finalconstr + constr1[i];
// }
// for (let j = 0; j < constr2.length; j++) {
//     finalconstr = finalconstr + constr2[j];
// }
// console.log(finalconstr);

// Finding the index of a character in a string
// let istr = "Java Script";
// let inp = "c";

// for (let i = 0; i < istr.length; i++) {
//   if (istr[i] == inp) {
//     console.log(i);
//     console.log(istr[i]);
//   }
// }

// Finding the last Occurence & First Occurence of character in the string
let occstr = "Java Script";
let char = "a";
let occ;

function lastOccurence(str, char) {
  let lastOccurence;
  for (let i = 0; i < occstr.length; i++) {
    if (str[i] == char) {
      lastOccurence = i;
    }
  }
  return lastOccurence;
}
function firstOccurence(str, char) {
  let firstOccurence;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == char) {
      firstOccurence = i;
      break;
    }
  }
  return firstOccurence;
}

// Finding SubString

let originalStr = "Java Script";
let startChar = "a";
let endChar = "i";
let subStr;

function SubString(originalStr, startChar, EndChar) {
  let startIndex = firstOccurence(originalStr, startChar);
  let EndIndex = lastOccurence(originalStr, EndChar);
  let subStr = "";

  console.log(startIndex);
  console.log(EndIndex);

  for (let i = startIndex; i <= EndIndex; i++) {
    if (originalStr[i] == " ") {
      continue;
    }
    subStr = subStr + originalStr[i];
  }

  // console.log(subStr);
  return subStr;
}

// console.log(SubString(originalStr, startChar, endChar));

// Making array fo words from a sentence
//ex- "This is Js Tut"
//op- ["This", "is", "Js", "Tut"]

function ArrayOfWrods(inputstr) {
  let OptString = "";
  let OptArray = [];
  for (let i = 0; i < inputstr.length; i++) {
    if (inputstr[i] == " ") {
      OptArray.push(OptString);
      OptString = "";
      continue;
    }
    OptString = OptString + inputstr[i];
  }
  OptArray.push(OptString);

  return OptArray;
}

// let inputstr = "This is JS Tut";
// let opt = ([] = ArrayOfWrods(inputstr));
// console.log(opt);
