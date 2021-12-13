
// ARRAY METHODS

const dogs = ["Tore", "Clementine", "Doris"];

// push adds a new element to the last index of the array
// returns the new length of the array
dogs.push("Trasan");
console.log(dogs);

// unshift adds a new element to the first index 
// returns the new length
dogs.unshift("Kerstin");
console.log(dogs);

// pop removes the last element, cannot execute anything else so no argument needed
// does not return new length
dogs.pop();
console.log(dogs);

// shift removes the first element, cannot execute anything else so no argument needed
// does not return new length
dogs.shift();
console.log(dogs);

// index - returns the position of an element
// return -1 if the element does not exist in the array
console.log(dogs.indexOf("Doris"));

// includes - will return true if the element is in the array, false if it is not
// strict equality! no type coersion
console.log(dogs.includes("Doris"));
console.log(dogs.includes("therese"));


if (dogs.includes("Tore")) {
    console.log("You have a dog called Tore");
}