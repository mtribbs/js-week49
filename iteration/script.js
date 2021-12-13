//ITERATION

// loops are controlled structures and a fundamental part of programming

// console.log("Lifting weights rep 1");
// we want to do 10 reps

// FOR LOOP
// three parts
// 1. initial value of the counter (rep = 1)
// 2. condition: value of reps we want to do, reps should stay below or equal to 10 (stops at 10)
// 3. push the loop forward, increment rep by 1
// loop will go 10 times, until we reach 10, as soon as rep is above 10, it will stop

// for (let rep = 1; rep <= 10; rep++) {
//     console.log("Lifting weights rep 1");
// }

// more dynamic way of doing it:

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights rep ${rep}`);
// }


// LOOPING THROUGH ARRAYS

const therese = ["Therese", "Ranegie-Ribbas", 2021 - 1992, "Gothenburg"];

for (let i = 0; i < therese.length; i++) {
    console.log(therese[i]);
}

// empty array
const types = [];

console.log(types);

// reading from the therese array
// fill the new array
for (let i = 0; i < therese.length; i++) {
    console.log(therese[i], typeof therese[i]);
    // types[i] = typeof therese[i];
    types.push(typeof therese[i]);
}

console.log(types);



// CONTINUE & BREAK

// CONTINUE
// used to exit the current iteration in the loop and get to next one

console.log("ONLY STRINGS!");

// if the current index of therese is not a string, skit it and move on to next iteration
for (let i = 0; i < therese.length; i++) {
    if (typeof therese[i] !== "string") continue;
    console.log(therese[i], typeof therese[i]);
}


// BREAK
// completely terminates the whole loop

console.log("BREAK WITH NUMBERS!");

// when the code hits a number, it terminates the loop
for (let i = 0; i < therese.length; i++) {
    if (typeof therese[i] === "number") break;
    console.log(therese[i], typeof therese[i]);
}


// LOOP ARRAY BACKWARDS

for (let i = therese.length -1; i >= 0; i--) {
    console.log(therese[i]);
}


// LOOP INSIDE LOOP

// 3 different exercises, 5 reps each

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`Starting exercise ${exercise}`);

//     for (let rep = 1; rep < 6; rep++) {
//         console.log(`Exercise ${exercise}: Doing rep number ${rep}`);
//     }
// }


// WHILE LOOP
// another way to loop (instead of for loop)

for (let rep = 1; rep <= 10; rep++) {
    console.log(`Doing rep nr ${rep}`);
}

// loop will run while the condition is true
let rep = 1;
while (rep <= 10) {
    console.log(`Doing rep nr ${rep}`);
    rep++;
}

// same output

// for loop needs counter, while loop does not need a counter

// this will give us a random number
let dice = Math.trunc(Math.random() * 6);

console.log(dice);

// condition 'not 6'
// when value is 6 - loop will stop

while(dice !== 6) {
    console.log(`You rolled ${dice}`);
    dice = Math.trunc(Math.random() * 6) +1;
    if (dice === 6) {
        console.log("Loop is about to end...");
    }
}
