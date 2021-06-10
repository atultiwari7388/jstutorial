// Why we use function
// One Line Def.... Create the fundamental building blocks in js
// eg we create a login button then we click the button and perform the action (just like login)
// click the button and perform some action
// Then we store the logic of press the button we store the function or store the group
// Just like invoke or call
// reuse function

function login(username) {
  // Create your logic
  console.log(`${username},   Logged in successfully....`);
}
login("Joe");
login("lara");

const upperCase = (str) => {
  //   //   console.log(str.toUpperCase());
  return str.toUpperCase();
};
const result = upperCase("javascript");
console.log(result);

function calculateArea(width, height) {
  const area = width * height;
  return area;
}
const area = calculateArea(30, 40);
console.log(area);

// using ternary operator to set default value

const calculateArea = (width, height) => {
  height = height === undefined ? 20 : height;
  const area = width * height;
  return area;
};

const area = calculateArea(30);
console.log(area);

// using ES 6 Module to set default value

const calculateArea = (width, height = 2) => {
  const area = height * width;
  return area;
};

const area = calculateArea(40);
console.log(area);

// Variable scope in function

const download = () => {
  //   //download logic
  const fileName = "xyz.pdf";
  console.log(fileName);
};

download();

// function expression and function declaration

// declaration
function login() {}

// expression
// It is use to declare the function without name like anonymous function
// It also store in variables

const login = function () {
  console.log("logged in");
};

login();

// Callback function for user define the text value

const formatText = (text, formatCb) =>
  typeof formatCb === "function" ? formatCb(text) : text.toUpperCase();

const result = formatText(
  "hello from india",
  (text) => text.charAt(0).toUpperCase() + text.slice(1)
);
console.log(result);

// IIFE (Immediately Invoke Function Expression)

const setup = () => console.log("SetUp Done");
setup();

// Syntax Parser Error using arrow function
const setup = (() => console.log("SetUp Done"))();

// Syntax Parser Error using normal function
// you can also remove the function name , that will work as well

(function login() {
  console.log("Login Completed");
})();

// function means actions
// Arrow Functions
// It also called function expression

const login = () => console.log("logged in");
login();

const sum = (num1, num2) => num1 + num2;
const result = sum(10, 20);
console.log(result);

// Follow Good Practices

// Naming
// function start as a verb
// showUser, getUser, calArea, calDistance

// one function - one action
// function name should be descriptive or readable
