// // Arrays in JavaScript
// // Array is object
// // Array is like a simple list
// // Firstly create array to pass Square Brackets first and passing the elements
// // In Array we passing objects, numbers, boolean, string

const languages = ["JavaScript", "Nodejs", "ReactJs", "MongoDB"];

// // Array Operations and Methods
// // check array length we pass (length Method)

console.log(languages.length);

// // Array Basically store in Index Value
// // Passing Index Value in Array using Square Brackets []

console.log(languages[0]);

// // How to add any item in Array

// // Push method add item in last element ofLoop the array
languages.push("React Native");

// // Unshift method add item in first element ofLoop the array
languages.unshift("Flutter");

console.log(languages);

// // How to delete last array ofLoop item using pop method
languages.pop();

console.log(languages);

// // pop method return a value ofLoop last array ofLoop item
// // for ex
console.log(languages.pop());
languages.shift();

// // Shift Method delete first array ofLoop item

console.log(languages.shift());
console.log(languages);

// // Loops in Array

// How Loop Work

for (let a = 0; a < 9; a++) {
  console.log("Mr. Darling");
}

// Create an Array []
// and add Object {}

const actors = [
  {
    Name: "Actor 1",
    Payment: 100,
  },
  {
    Name: "Actor 2",
    Payment: 200,
  },
  {
    Name: "Actor 3",
    Payment: 150,
  },
];

for (let i = 0; i < actors.length; i++) {
  actors[i].Payment = actors[i].Payment - 10;
}

// Using For Each Loop

actors.forEach((actor) => {
  actor.Payment = actor.Payment - 20;
});
console.log(actors);

// For ofLoop

for (let actor of actors) {
  //   console.log(actor);
  actor.Payment = actor.Payment - 20;
}

console.log(actors);

// Filter in Array

// Create a new array

const students = [
  {
    name: "student 1",
    marks: 45,
  },
  {
    name: "student 2",
    marks: 66,
  },
  {
    name: "student 3",
    marks: 35,
  },
];

// // 45 marks contain then student pass
// // filter method return true or false value
// // filter method return a new array

// const failed = students.filter((student) => {
//   //   console.log(student);
//   //   return true;

// //   //return boolean value
return student.marks < 45;
//     if (student.marks < 45) {
//       return true;
//     }
//     else {
//       return false;
//     }
//     return false;
// });

// // Second Method One line checking the value

const failed = students.filter((student) => student.marks < 45);
console.log(failed);

// Map Method in Array

const users = [
  {
    fname: "John",
    lname: "Doe",
  },
  {
    fname: "kalpa",
    lname: "pander",
  },
  {
    fname: "jane",
    lname: "Doe",
  },
];

const finalUsers = users.map((user) => {
  return {
    fullName: `${user.fname} ${user.lname}`,
  };
});

console.log(finalUsers);

// Reduce

const movies = [
  {
    name: " movie 1",
    budget: 100,
  },
  {
    name: "movie 2",
    budget: 150,
  },
  {
    name: "movie 3",
    budget: 200,
  },
];

let total = 0;
movies.forEach((movie) => {
  //   //   total = total + movie.budget;
  total += movie.budget;
});

// acc called accumulator

const total = movies.reduce((acc, movie) => {
  acc = acc + movie.budget;
  return acc;
}, 0);

console.log(total);

// Indexof

// Task - Check admin user
// create an array
const admins = [2, 1, 5];
// create a object

const user = {
  name: "XYZ",
  id: 5,
};

const isAdmin = admins.indexOf(user.id) > -1;

console.log(isAdmin);

// includes method
const admins = [2, 1, 5];
const user = {
  name: "xyz",
  id: 6,
};

console.log(admins.includes(user.id));

// find method

const users = [
  {
    name: "xyz",
    id: 1,
  },
  {
    name: "abc",
    id: 2,
  },
  {
    name: "pqr",
    id: 3,
  },
];

// search a user using his id
const myUser = users.find((user) => {
  if (user.id === 2) {
    return true;
  }
  return false;
});

// Second Method

const myUser = users.find((user) => {
  return user.id === 3;
});

// Third Method

const myUser = users.find((user) => user.id === 1);

console.log(myUser);

// Sort Method in Array
// sort method modified original array
const names = ["Darling", "Anurag", "Krishna", "Murari", "Varun"];
names.sort();
console.log(names);

// Splice Method
// delete any item in array
// In splice method we pass 2 parameter first index value and second is how many items are deleted
const names = ["Darling", "Anurag", "Krishna", "Murari", "Rakshit", "Hritik"];
names.splice(2, 3);
console.log(names);
