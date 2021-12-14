// Select DOM elements
const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionairesBtn = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

// initialize array
let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

// GET RANDOM USER
// fetch user from an open API

// long complicated way
// function getRandomUser() {
//     fetch("https://randomuser.me/api").then(res => res.json()).then()
// }

// sync away instead
// when using async, need to add await

async function getRandomUser() {
   const res = await fetch("https://randomuser.me/api");

   const data = await res.json(); 

//    console.log(data);

    const user = data.results[0];

    const newUser = {
        // grabbing the first and last name of the user in the results array
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000),
    }

    // console.log(newUser);

    addData(newUser);
}


// DOUBLE THE USER'S MONEY
// map array on mdn web docs
// for each loops through but does not return anything, 
// map method returns another array and runs a function for each array
function doubleMoney() {
    data = data.map((user) => {
        return {...user, money: user.money * 2};
    })
    updateDOM();
} 
/// ... spread array, copy whatever was in user, keep that and add to it


// SORT BY RICHEST USER
// look up mdn sort array
// sort converts into strings, need to add compare function to work with numbers
function sortByRichest() {
    data.sort((a, b) => b.money - a.money);

    updateDOM();
}

// SHOW ONLY MILLIONAIRES
// filter method - mdn filter array method
function showMillionaires() {
    data = data.filter((user) => user.money > 1000000);

    updateDOM();
}


// CALCULATE TOTAL WEALTH
// reduce - advanced method
// reduce will return a single value, take all the money and clump it together in a single value
// returns the sum of all elements in an array




// add new user to data array
// using push method to add new user object onto the empty array
// update the DOM
function addData(obj) {
    data.push(obj);
    
    updateDOM();
}


// UPDATE THE DOM
// parameter has default value of whatever data array contains
// if no parameter is passed it is set to whatever is in the data array
function updateDOM(providedData = data) {

    //clear main div
    main.innerHTML = `<h2><strong>Person</strong>Wealth</h2>`

    providedData.forEach((person) => {
        // create a brand new element for each person
        const element = document.createElement("div");
        // add a css clas onto a new div
        element.classList.add("person");
        element.innerHTML = `<strong>${person.name}</strong> ${formatMoney(
            person.money
        )}`;
        
        //insert into the DOM
        main.appendChild(element);
    });
}


// longer way, within the updateDOM function
// providedData.forEach(function(person){
        
// })

// FORMAT MONEY
// https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// EVENT LISTENERS

// get a random user when clicking the button add user
addUserBtn.addEventListener("click", getRandomUser);

// double money when clicking that button
doubleBtn.addEventListener("click", doubleMoney);

// sort by richest when clicking that button
sortBtn.addEventListener("click", sortByRichest);

// show only millionaires
showMillionairesBtn.addEventListener("click", showMillionaires);