// Typesafe function that only allows string values
function printHelloWorld(person, element) {
    document.getElementById(element).innerHTML = "Hello " + person;
}
// Create a user object of type string
var user = "Daniel";
// Selector for find HTML element to replace text in.
var element = "welcome-text";
// Bonus variable for learning
var age = 12;
// Run typesafe function that replaces HTML with input.
printHelloWorld(user, element);
//# sourceMappingURL=solutionHello.js.map