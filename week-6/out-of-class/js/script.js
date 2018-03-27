"use strict";

function renderOutput(output) {
    let output_element = document.getElementById("output");
    output_element.innerHTML += "<div>" + output + "</div>"
}

/* This is what we want to see later:
On Monday the hours are 9a - 9p
On Tuesday the hours are 9a - 9p
On Wednesday the hours are 9a - 9p
On Thursday the hours are 9a - 9p
On Friday the hours are 9a - 5p
On Saturday the hours are 9a - 5p
On Sunday the library is closed
*/

/* keep in mind splits - split(separator)
let original_name = "Florin, Ben";
let parts_of_name = original_name.split(", ");
console.log(parts_of_name[1], parts_of_name[0]);
*/

let hours = [
    "Monday: 9a - 9p",
    "Tuesday: 9a - 9p",
    "Wednesday: 9a - 9p",
    "Thursday: 9a - 9p",
    "Friday: 9a - 5p",
    "Saturday: 9a - 5p",
    "Sunday: closed"
];

function displayOneDaysHours(one_days_hours) {
  let parts_of_hours = one_days_hours.split(": ");
  
  if (parts_of_hours[0] === "Sunday") {
    renderOutput("On Sunday the library is closed");
  } else {
    renderOutput("On " + parts_of_hours[0] + " the hours are " + parts_of_hours[1]);
  }
}

function dailyHours(hours) {
  hours.forEach(displayOneDaysHours);
}

dailyHours(hours);


//departments.forEach(writeDepartment)

/*    let output = call_number = call_number + " - ";

let output = "On " + parts_of_hours[0] + " the hours are " + parts_of_hours[1];

    // Depending on what the call number prefix is, append the appropriate
    // classification to the end of the output.
    if (call_number.includes('PR')) {
        output = output + " English literature";
    } else if (call_number.includes('PS')) {
        output = output + " American literature";
    } else if (call_number.includes('PQ')) {
        output = output + " French literature";
    } else {
        output = output + " Other literature";
    }

    // Print out the output using the renderOutput() function
    renderOutput(output);
    */

