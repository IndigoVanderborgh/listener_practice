// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

// This challenge comes with an index on both html and javascript.

let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want to open the box")
})