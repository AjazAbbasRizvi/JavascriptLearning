const person = new Map();
person.set('firstName', "Ajaz");
person.set('Age', "28");
person.set(1, "Storing key as number");

// console.log(person.get('firstName')); -> It give the value of the key 
// console.log(person.get('Age'));
// console.log(person.get(1));

// for loops on Map 

for(let key of person.keys()){
    // printing the value of the 
    // console.log(person.get(key));

    // print the keys only
    // console.log(key);
}
// Printing the key value pair togther 

for (let eachElement of person) {
    // We will get each key value pair in the form of array 
    // console.log(eachElement);
}

// Creating a object with some value and then using map method to add some more new values 

const Person1 = {
    Id : 1,
    FirstName : "Ajaz"
};
const Person2 = {
    Id : 2,
    FirstName : "Anamta"
};

const extraInfo = new Map();
extraInfo.set(Person1, {'age': 28, 'gender': 'male'});
extraInfo.set(Person2, {'age': 24, 'gender': 'female'});

console.log(extraInfo.get(Person1).age);
console.log(extraInfo.get(Person2).gender);

console.log(extraInfo.get(Person1));

