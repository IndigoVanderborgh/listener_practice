// 1. Grab the box from the DOM and store it in a variable
// 2. Add a click event listener to the box 
// 3. Log out "I want to open the box!" when it's clicked

// This challenge is to explore DOM and methods, specifically the event handler
// addEventListener()
// Think of it as a listener for a specific event like when a user clicks a box
// or scrolls down (ie activates an event)

let box = document.getElementById("box")

// variable declared for connection between JS and html
// let box = document.getElementById("box")

box.addEventListener("click", function() {
    console.log("I want to open the box")
})

// box -> element ties to line 10
// first parameter is the type of event (click, mousedown) -> "click"
// second parameter is the function we want to call when the event occurs -> "(function())"
// third parameter is a boolean value -> this is optional

// element.addEventListener (1st parameter, 2nd parameter) {
//     ...
// }
// box.addEventListener("click", function() {
//     console.log("I want to open the box")
// })
