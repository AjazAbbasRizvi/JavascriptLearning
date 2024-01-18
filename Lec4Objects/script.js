// Creating Objects

// const person = {
//     Name : "Ajaz",
//     Age : 28
// };
// console.log(person, typeof(person));

// Storing Array Inside Object

const Person = {
  Name: "Ajaz",
  Age: 27,
  Hobbies: ["Sleeping", "Dancing"],
};

// console.log(Person.Hobbies);

// for (let Hobbies of Person.Hobbies) {
//     console.log(Hobbies)
// }

// Adding New KeyValue Pair in Person Object

Person.Gender = "Male";
// console.log(Person);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Different Ways of Accessing Data From Object
//  Using Brackets
// console.log(Person["Name"]);

// Use of Bracket when Compared With Dot

// we have a case where we want to store key in the form of two words
// ex- "Person Hobbies1" - Like This

Person["Person Hobbies2"] = ["Fighting", "shouting"];
// console.log(Person);

// Now Accesing Such kind of Key

// console.log(Person.Person Hobbies2) - This Will Throw Error

// console.log(Person["Person Hobbies2"]);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Itrating the Object
// USing For In Loop

for (let key in Person) {
  //   let element = Person[key];
  //   console.log(element);
  //Getting Both Key Value Pair
  // console.log(key, ":", Person[key]);
}

//Object.keys Method

// this Will Give Us the keys in the form of Array then We can Use that to Itrate all the values
// console.log(Object.keys(Person));

for (let key of Object.keys(Person)) {
  //   console.log(Person[key]);
}

// -------------------------------------------------------------------------------------------------------------------------------------------

// Computed Values

// Creating Object USing Variable Values

const Key1 = "ObjectKey1";
const Key2 = "ObjectKey2";

const Val1 = "Value1";
const Val2 = "Value2";

const Obj = {
  [Key1]: Val1,
  [Key2]: Val2,
};

// console.log(Obj);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Spread Operators

const Obj1 = {
  Key1: "Val1",
  key2: "Val2",
};

const Obj2 = {
  Key1: "ValUnique",
  Key3: "Val3",
};

// const NewObj = {...Obj1, ...Obj2};
// console.log(NewObj);

// Key1 Value Will be taken from the Object kept last in Spread

// const NewObj = {...Obj2, ...Obj1};
// console.log(NewObj);

// Adding New KEy  in the new Obj Whhich is getting created by Spread Operator

const NewObj = { ...Obj1, ...Obj2, Key4: "Value4" };
// console.log(NewObj);

// -------------------------------------------------------------------------------------------------------------------------------------------

// Creating Object Using Spread Operator on String And Array (Converting Array Into Object)

const SpreadObj = { ..."ABCD" };
const SpreadArrObj = { ...["Item1", "Item2", "Item3"] };

console.log(SpreadObj);
console.log(SpreadArrObj);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Object Destructuring

const band = {
  bandName: "Led",
  Song: "Stairways",
  Year: 1968,
  Member: 4,
};

// const bandName = band.bandName;
// const Fsong = band.Song;

// console.log(bandName, Fsong);

// 2nd Method

let { bandName, Song } = band;
// console.log(bandName, Song);
// The Variable name inside the curlybracket should be same as the key

// Want to have different variable name other than key
let { bandName: ChoiceName, Song: ChoiceSong } = band;
// console.log(ChoiceName, ChoiceSong);

// Making Some Key into variable and rest of the keyValue Pair into Object

let { bandName: Value1, Song: Value2, ...restoftheValues } = band;
// console.log(Value1, Value2);
// console.log(restoftheValues);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Array Of Object

const User = [
  { Name: "Ajaz", Age: 27 },
  { Name: "Abbas", Age: 28 },
  { Name: "Rizvi", Age: 29 },
];

// console.log(User);

for (const user of User) {
  // console.log(user.Name);
}

//--------------------------------------------------------------------------------------------------------------------------------------

// Nested Destructuring

const User1 = [
  { Name: "Ajaz", Age: 27 },
  { Name: "Abbas", Age: 28 },
  { Name: "Rizvi", Age: 29 },
];

// Now first we will get all the object in the seprate form

let [FUser, SUSer, THUSer] = User1;
// console.log(FUser);
// console.log(SUSer);
// console.log(THUSer);

// Now Destructuring the Name OF the First USer and rest of the value in the allvalue varibale and Age of the Seocnd User and the entire third Object

let [{ Name: UserName, ...allvalue }, { Age: UserAge }, User3] = User1;
// console.log(UserName);
// console.log(UserAge);
// console.log(User3);
// console.log(allvalue);

// Now Skiping the first USer and Grabbing the SecondUSer Age and ThirdUSer NAme

let [, { Age: UserAge2 }, { Name: UserName3 }] = User1;
// console.log(UserAge2);
// console.log(UserName3);

//--------------------------------------------------------------------------------------------------------------------------------------

// Optional Chaining

// We have a object called person which have a property name and another object(address) in the person which have property house number
// now we have a condition were we will get the adress property in future, To avaoid any error we use optional chaining

const person = {
  name: "ajaz",
};

const address = {
  housenumber: 1234,
};

// console.log(person?.name);
// console.log(person?.address?.housenumber); -> for this one we will not get error instead we will get undefined

person.Address = address;

// now person have a new property address if we do this again 

console.log(person?.name);
console.log(person?.Address?.housenumber);

// now this time everything works fine 


