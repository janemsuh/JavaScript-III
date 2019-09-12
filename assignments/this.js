/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window/Global (Console) Object Binding:
Whenever a function is contained in the global scope, the value of "this" inside of the function is the window/console object because functions in the global scope are methods on the window/console object.
* 2. Implicit Binding:
Whenever a function is called by a preceding dot, the value of "this" is the object before the dot.
* 3. New Binding:
Whenever a constructor function is used, the value of "this" is the specific instance of the object that is created and returned by the constructor function.
* 4. Explicit Binding:
It's possible to override constructor functions/objects and explicitly define the value of "this" using the .call or .apply methods.
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding
function sayHi(name) {
    console.log(this);
    return name;
}
sayHi('Mom');

// Principle 2
// code example for Implicit Binding
const myObj = {
    greeting: 'Good evening',
    welcomeMessage: function(place) {
        console.log(`${this.greeting}, welcome to ${place}.`);
        console.log(this);
    }
};
myObj.welcomeMessage('Union Square Cafe');

// Principle 3
// code example for New Binding
function Pet(gender, name) {
    this.praise = 'Good ';
    this.gender = gender;
    this.name = name;
    this.sit = function() {
        console.log(this.praise + this.gender + ', ' + this.name + '!');
        console.log(this);
    };
}

const peggy = new Pet('girl', 'Peggy');
const steve = new Pet('boy', 'Steve');

peggy.sit();
steve.sit();

// Principle 4
// code example for Explicit Binding
peggy.sit.call(steve);
steve.sit.apply(peggy);