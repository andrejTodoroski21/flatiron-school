/*

Phase 1 -> GET
Updated March 14, 2024
Created May 25, 2023
by Sakib Rasul

Objectives
1. Make a GET request to an external API.

*/
// fetch
// create = post
// read = Get
// update = patch
// delete = delete

// A synchronous request to https://cat-fact.herokuapp.com/facts/random.
fetch("https://cat-fact.herokuapp.com/facts/random")
// fetch is a promise so we'll use .then() to handle successful states
// here we'll convert our json response int usable js
.then(response => response.json())
.then(fact => {
    document.querySelector("#cat").textContent = fact.text
})
//catch is a promise so we'll use .then() to handle successful states
.catch(error => console.log(error));

// A snchronous request to https://anapioficeandfire.com/api/books.
fetch("https://anapioficeandfire.com/api/books")
.then(response => response.json())
.then(books => {
    books.forEach(book => {
       const li = document.createElement("li");
       li.textContent = book.name;
        document.querySelector('#got').append(li)
    });
    

})

// An asynchronous request to https://pokeapi.co/api/v2/pokemon/[name]"
async function getPokemon(name){
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    const pokemon = await response.json()
    console.log(pokemon)
    document.querySelector("#pokemon").textContent = 
        pokemon.name[0].toUpperCase() + pokemon.name.slice(1) + "(" + pokemon.id + ")";
}
getPokemon("dialga") 

// ~ Challenge: Make a GET request to an API of your choice!