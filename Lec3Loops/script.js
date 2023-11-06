// While Loop

// Find the sum of N number from zero till number given in num variable using while loop

function sumOfFirstNNumbers(number) {
  let sum = 0;
  let i = 0;
  while (i <= number) {
    sum = sum + i;
    i++;
  }
  return sum;
}
const result = sumOfFirstNNumbers(10);
// console.log(result);

// DoWhile Loop with continue

let i = 0;
do {
  if (i == 4) {
    i++;
    continue;
  }
  // console.log(i);
  i++;
} while (i <= 10);

// Sum of First N odd number using do while Loop

function sumOfFirstNOddNumbers(number) {
  let sum = 0;
  let i = 1;
  do {
    if (i % 2 === 0) {
      i++
      continue;
    }
    sum += i;
    i++;
  } while (i <= number);
  return sum;
}

let output = sumOfFirstNOddNumbers(5);
console.log(output);
