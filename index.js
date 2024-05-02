// document.getElementById("count-el").innerText = 5

// let count = 0; 
// console.log(count);


// 5. Basic Mathematical Operations
/* cmd + k + c
let firstBatch = 5;
let secondBatch = 7;

let count = firstBatch + secondBatch;

console.log(count); */



/* let myAge = 17;
humanDogRatio = 7;

let myDogAge = myAge * humanDogRatio;

console.log(myDogAge);   */


// 7. Reassigning and Incrementing

/* let count = 5;

count = 3; // Reassigning

console.log(count);

count = count + 1
console.log(count); // Incrementing */

/* 
let bonusPoints = 50;
console.log(bonusPoints);

bonusPoints = bonusPoints + 50;
console.log(bonusPoints);

bonusPoints = bonusPoints - 75;
console.log(bonusPoints);

bonusPoints = bonusPoints + 45;
console.log(bonusPoints);
 */


// 9. The onclick event listener
// initialize the count as 0
// listen for the clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

/* function increment(){
    console.log("The button was clicked")
} */

//10. Using functions to write css code
function countDown(){
    console.log(5);
    console.log(4);
    console.log(3);
    console.log(2);
    console.log(1);
}

// Setting up the new race

countDown();

// GO
// Players are running the race
// Race is finished

// Get ready for new race
countDown();

//11. Write your first function

function forty_two(number) {
    return number;
}

console.log(forty_two(42));

function myNumber(){
    console.log(42);
}

console.log(myNumber());

//12. Write the function that logs out the sum of all the lap times 

let lap1 = 34;
let lap2 = 33;
let lap3 = 36;

function mySum() {
    console.log(lap1 + lap2 + lap3);
}

mySum();

//13. Create a function that increments the lapsCompleted variable with one
let lapsCompleted = 0;

function myLaps() {
    lapsCompleted++
}

myLaps();
myLaps();
myLaps();
console.log(lapsCompleted);

//14. Increment on clicks

/* count = 0

function increment() {
    count++
    console.log(count);
}
 */
//15. Display the count

document.getElementById("count-el").textContent = 0;

let countEl = document.getElementById("count-el");

count = 0

function increment() {
    // count++
    count += 1
    countEl.textContent = count;
}



// 16 The Document Object Model
// This is how you use javascript to modify a website

// 17. Recap on 15

// 18 Create the save button

document.getElementById("save-el");

let saveEl = document.getElementById("save-el");


function save(){
    let countAndDash = count + " - "; 
    saveEl.textContent = saveEl.textContent + countAndDash;
    console.log(count);
    countEl.textContent = 0;
    count = 0;
}

//19. What is a string 

//20. Write your first string variable
/* let username = "per";
let message = "You have three new notifications";

let messageToUser = message + ", " + username + "!";
 
console.log(messageToUser); */

//21. Log a greeting to the console

/* let name = "Tim"
let greeting = "Hi, my name is "

let myGreeting = greeting + name;
console.log(myGreeting); */

//22. Strings vs Numbers

    //String always wins

//23. Render a welcome message
 
/* document.getElementById("welcome-el").innerText = "Yoo";

let welcomeEl = document.getElementById("welcome-el");

let name = "Tim";
let greeting = "Welcome Back, ";

 
welcomeEl.innerText = greeting + name;
 */
//24. Improve the message with string concatenation

/* welcomeEl.innerText = welcomeEl.innerText + "👋"; */
// welcomeEl.innerText += "👋";

//25. Use plus equal for count 

//26. Create the save feature



//27. Debugging online

//28. Set the count to zero