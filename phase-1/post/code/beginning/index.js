/*

Phase 1 -> Creating data with JSON Server and POST requests
Updated March 15, 2024
Created May 26, 2023
by Sakib Rasul

Objectives
1. Run an instance of JSON Server that hosts a dataset.
1. Make a GET request to display a dataset.
2. Make a POST request to add to that dataset.

*/
// when we want a user to send data to an external resource like json server we often have them fill out a form

// const { getRandomValues } = require("crypto");

// once the user submits the form we construct an object with what the user submitted
// form.addEventListener("submit", () => {


//     const person = {
//         name: event.target.value,
//         address: event.target.address.value
//     }
// });
// // next we send the object by calling fetch (url, options)
// form.addEventListener("submit", () => {
//     const formdata = {/*...*/};
//     fetch("https://localhost:3000/objecets", {
//         method: "post",
//         headers: {
//             "content-type": "application/json",
//             "Accept": "application/json"
//         },
//         // body JSON.stringify(object);
//     })
// })

// next we send the object by calling fetch(URL, OPTIONS)
// HANDELING THE RESPONSE
// finally we attach one or more .then() clauses to handle a successful Response
// our first .then() will always be reserved for parsing a successful response
// our second .then() will always be reserved for using the newly sent data i.e. the object we just added to our database.
// optionally we can attach a .catch() clause to handle errors

// Let's try making a GET request to display existing data on the page.

// Now, let's trigger a POST request when the user submits the form,
// so that they can add data to the database! Remember to think about
// the event, the target, and the handler when planning a listener.


// ~ Challenges
// 1. There are a handful of awfully similar lines in our requests. Try abstracting them
//    into a function!
// 2. Try writing your own POST request.
// 3. Try writing PATCH and DELETE requests! 

// do a get request and display on the page
// async function getPokemon(name){
//     const response = await fetch(`http://localhost:3000/pokemon${name}`)
//     const pokemon = await response.json()
//     console.log(pokemon)
//     document.querySelector("#pokemon").textContent = 
//         pokemon.name.slice(1) + "(" + pokemon.id + ")";
// }
// getPokemon("Ditto")
// async function getPokemonByName(name){
//     const response = await fetch(`http://localhost:3000/pokemon/${name}`)
//     const pokemon = await response.json();
//     console.log(pokemon)
//     document.querySelector("#pokemon").textContent = pokemon.name.slice(1)
// }
// getPokemonByName("Ditto")x
fetch('http://localhost:3000/pokemon')
.then(response => response.json()) 
.then(pokemon => { 
    pokemon.forEach(pokemon => {
        const li = document.createElement("li") //creating an element
        li.textContent = pokemon.name;
        document.querySelector("#pokemon").append(li); 
    })
})
document.querySelector("form").addEventListener("submit", event => {
    event.preventDefault();
    fetch('http://localhost:3000/pokemon', {
        method: "POST",
        headers:{
            "Content-Type" : "application/json", // type of caontent we are posting 
            "Accept" : "application/json" // the type of content we hope to receive
        },
        //... and the body
        body: JSON.stringify({
            name:  document.querySelector("form").name.value,
            type: [
                document.querySelector("form").type1.value,
                document.querySelector("form").type2.value
            ]

        })
    })
    .then(response => response.json())
    .then(pokemon => {
        const li = document.createElement("li") //creating an element
        li.textContent = pokemon.name;
        document.querySelector("#pokemon").append(li);
    })
    
})

