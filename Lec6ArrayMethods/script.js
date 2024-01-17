const firstArray = [4, 2, 5, 6, 8];

// 1) ForEach

firstArray.forEach((number) => {
  // console.log(number + 'x' + 2 + '=' + number*2 );
});

const user = [
  { name: "Ajaz", age: 28 },
  { name: "samar", age: 19 },
  { name: "vishal", age: 21 },
];

user.forEach((user) => {
  // console.log(user['name']);
  // console.log(user.age);
});

// -------------------------------------------------------------------------------------------------------------------------------------------

// Map Method

const number = [1, 34, 56, 3, 4, 8];

// first Method creating a seprate callback function for map method

const findSquare = function (number) {
  return number * number;
};

const square = number.map(findSquare);
// console.log(square);

// if we dont return value from callback function in MapMethod

const findSquare2 = function (number) {
  // console.log(number*number);
};

const square2 = number.map(findSquare2);
// console.log(square2); -> [ undefined, undefined, undefined, undefined, undefined, undefined ] this will return undefined element array

// Creating call backfunction insdie map method

const square3 = number.map((number, index) => {
  return number * number + "+" + index;
});

// console.log(square3);

const user1 = [
  { name: "Ajaz", age: 28 },
  { name: "samar", age: 19 },
  { name: "vishal", age: 21 },
];

const firstNameArray = user1.map((user) => {
  return user.name;
});

// console.log(firstNameArray);

//-------------------------------------------------------------------------------------------------------------------------------------------

// filter Method

const number1 = [1, 2, 4, 5, 8, 9];

const filterEvenNumber = number1.filter((number) => {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
});

// console.log(filterEvenNumber);

const filterOddNumber = number1.filter((number) => {
  return number % 2 != 0;
});

// console.log(filterOddNumber);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Reduce Method

const number2 = [1, 2, 3, 4, 5];

const sum = number2.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});

// console.log(sum);

// accumulator     currentValue        return
//    1                 2                  3
//    3                 3                  6
//    6                 4                  10
//    10                5                  15

const UserCart = [
  { productId: 1, productName: "Mobile", Price: 12000 },
  { productId: 1, productName: "Laptop", Price: 22000 },
  { productId: 1, productName: "TV", Price: 32000 },
];

const cartTotal = UserCart.reduce((totalValue, CurrentProduct) => {
  return totalValue + CurrentProduct.Price;
}, 0);

// console.log(cartTotal);

// totalPrice act as Variable which store the value
// 0 is the initail value for totalProce
// CurrentProduct is the element of the UserCart Array

//-------------------------------------------------------------------------------------------------------------------------------------------

// Sort Method

// Sort Method do the changes in the original array

const sortNum = [500, 250, 4, 8, 230];

// Ascending sort (for asc sort we return "a-b")
sortNum.sort((a, b) => {
  return a - b;
});
// console.log(sortNum);

// Descending Sort (for desc sort we return "b-a")
sortNum.sort((a, b) => {
  return b - a;
});
// console.log(sortNum);

const Products = [
  { productId: 1, productName: "IPhone", Price: 40000 },
  { productId: 2, productName: "RealMe", Price: 25000 },
  { productId: 3, productName: "SamSung", Price: 50000 },
  { productId: 4, productName: "Lenovo", Price: 70000 },
];

Products.sort((a, b) => {
  return a.Price - b.Price;
});

// console.log(Products);

// sort the products in descending order and store them into a new array

const HighToLow = Products.slice(0).sort((a, b) => {
  return b.Price - a.Price;
});

// console.log(HighToLow);
// console.log(Products);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Find Method

const Animals = ["Elephant", "Lion", "Whale", "cat", "Parrot", "dog"];

const reqAnimal = Animals.find((element) => {
  return element.length === 4;
});

// console.log(reqAnimal);

const findUsers = [
  {userId : 1, userName: "Ajaz", Age : 27},
  {userId : 2, userName: "mohit", Age : 28},
  {userId : 3, userName: "rohit", Age : 22},
  {userId : 4, userName: "sohit", Age : 26},
];

// we will find three user first by UserId, seconf by UserName and thrid by Age

const reqUser = findUsers.find((element)=>{
  return element.userId === 3
});

// console.log(reqUser);

const reqUser2 = findUsers.find((element)=>{
  return element.userName === 'Ajaz'
});

// console.log(reqUser2);

const reqUser3 = findUsers.find((element)=>{
  return element.Age === 22
});

// console.log(reqUser3);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Every Method

const userCart = [
  {productName: "Mobile", Price:28000},
  {productName: "TV", Price:15000},
  {productName: "Laptop", Price:25000}
];

// In the above array we will check whether all the elements have price lower than 30000 
// if all the element satisfy the condition we will get true other wise we will get false 

const ans = userCart.every((element)=>{
  return element.Price < 30000;
});

// console.log(ans);

// now if we change the condtion in the below commented code it will return fals ebcoz none of the element's 
// price in user cart is greater than 30000

// const ans = userCart.every((element)=>{
//   return element.Price > 30000;
// });

// console.log(ans); -> false;

//-------------------------------------------------------------------------------------------------------------------------------------------

// Some Method

// we wwil check if any elements price exceeds 100000 if this happensa we will get true otherwise false 

const someCart = [
  {productName: "Mobile", Price:28000},
  {productName: "TV", Price:15000},
  {productName: "Laptop", Price:250000}
];

const someAns = someCart.some((element)=>{
  return element.Price > 100000
});

// console.log(someAns);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Splice Method

// Delete 
const splArray = [1, 2, 3, 'Item1', 'Item2', 'Item3'];
// const delelement = splArray.splice(1,2);
// console.log(delelement);
// console.log(splArray);

// Insert 

splArray.splice(2, 0, "new Inserted Item");
// console.log(splArray);

// Delete & Insert Together 

splArray.splice(3, 2, "Item10", "Item11", "Item12");
console.log(splArray);





