// Methods :- Functions inside objects 

const userInfo = {
    Name : "Ajaz",
    Age : 25,
    about : function () {
        // console.log("user Name is " + this.Name + " Age is " + this.Age);
    }
};

// userInfo.about();

//-------------------------------------------------------------------------------------------------------------------------------------------

// Call()

// Case 1 When the method is presentr in one object and we want to use it for another object

const Person1 = {
    Name : "Ajaz",
    Age : 28,
    About: function(hobby, favSong){
        // console.log(this.Name, this.Age, hobby, favSong);
    }
};

const Person2 = {
    Name : "Abbas",
    Age : 24
};

// Person1.About("Bike", "OneTwo");

// Now we want to use About Function for another Object "Person2" so inorder to achieve this we have to use call() 
// -> In the belowe line "call(Person2)" - now the argument inside call will act as the "this" keyword for the About function of Person1 
// rest of the parameters will be passed about object refering in the call 
Person1.About.call(Person2, "bike", "3-4");

//-------------------------------------------------------------------------------------------------------------------------------------------

// Apply()

// There is no difference between call and bind the only difference is that in call we pass all the function argument one by one
// But in apply we can pass all of them together in an array

Person1.About.apply(Person2, ["ApplyHobby", "ApplySong"]);

//-------------------------------------------------------------------------------------------------------------------------------------------

// Bind ()

const func = Person1.About.bind(Person2, "BindHobby", "BindSong");
func();

//-------------------------------------------------------------------------------------------------------------------------------------------

// Create a functions to create multiple object

// we have one Object for refrence now we will create a function which will help us to create multiple objects of the same type 

const User = {
    firstName : "Ajaz",
    lastName : "Rizvi",
    email : "ajaz.rizvi@lenovo.com",
    age : 27,
    address : "HouseNumber, Colony, City, State",
    about : function(){
        return `${this.firstName} is ${this.age} Years Old`;
    },
    is18 : function(){
        return this.age>=18;
    }
};

function CreateUser(firstName, lastName, email, age, address) {
    const user = {};
    user.firstName  = firstName;
    user.lastName  = lastName;
    user.email  = email;
    user.age  = age;
    user.address = address;
    user.about =  function(){
        return `${this.firstName} is ${this.age} Years Old`;
    };
    user.is18 =  function(){
        return this.age>=18;
    };

    return user;
};

const newUser = CreateUser("Bonny", "Garry", 'bonnygarry@bot.com', 25, 'Kanpur');
// console.log(newUser);
// console.log(newUser.about());
// console.log(newUser.is18());

// Proto (__proto__);

const obj1 = {
    key1 : 'value1',
    key2 : 'value2',
};

const obj2 = Object.create(obj1);
// console.log(obj2); -> {} - this is the empty object which is obj2 &
// [[Prototype]]:Object
// key1: "value1"
// key2: "value2"
//we get obj2 as empty object but in the [[prototype]] or __proto__ of obj2 we have properties of Obj1

obj2.key3 = 'Vlaue3';
// now obj2 also have a key of its own 
// console.log(obj2.key1); // -> Value1
// console.log(obj2.key2); // -> Value2
// console.log(obj2.key3); // -> Value3

// now improving our function of create user

const userMethods = {
    about :  function(){
        return `${this.firstName} is ${this.age} Years Old`;
    },
    is18 : function(){
        return this.age>=18;
    },
    favSong : function(){
        return 'Light Up Skechers'
    } 
};

function CreateUserNew(firstName, lastName, email, age, address) {
    const user = Object.create(userMethods);
    user.firstName  = firstName;
    user.lastName  = lastName;
    user.email  = email;
    user.age  = age;
    user.address = address;
    return user;
};

const protoUser = CreateUserNew("protoName", "protoLastName", 'user@proto.com', 56, 'JavaScript Heap');
console.log(protoUser);
console.log(protoUser.about());
console.log(protoUser.is18());
console.log(protoUser.favSong());










