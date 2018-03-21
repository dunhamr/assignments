// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

//variables

let my_name = "Becca"
let your_name = "Cynthia"


//let name=prompt("What's your name?");
//renderOutput("That's me");


if (my_name === "Becca") {
  renderOutput("That's me!");
}
else if (my_name === "Cynthia") {
  renderOutput("That's Cynthia!"); 
}
else {
  renderOutput("Womp, womp, I must be someone else.");
}

function helloWorld() {
  renderOutput("Hello World");
}

helloWorld();
helloWorld();
helloWorld();

function helloName(name) {
  renderOutput("Hello " + name);
}

helloName("Ben");
helloName("George");
helloName("Martha");

/* 
function helloName(first_name, last_name) {
  let greeting = "Hello " + first_name + " " + last_name
  return greeting;
}
*/

function todaysHours(days_hours) {
  renderOutput(days_hours);
}

//todaysHours("Tuesday: 9a - 5p");

hours.forEach(todaysHours);


function callNumbers(letters_numbers) {
  renderOutput(letters_numbers);
}

call_numbers.forEach(callNumbers);

