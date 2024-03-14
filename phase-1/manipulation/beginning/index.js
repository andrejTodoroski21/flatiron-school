/*

Phase 1 -> DOM Manipulation
by Sakib Rasul
Updated March 13, 2024
Created September 12, 2023

Core Deliverables
1. Select a node.
2. Modify a node.
3. Remove a node.
4. Append a node.

Challenges
1. Append a list.
2. Replace a node.

*/

// ~ APIs, CRUD, `document`

// ~ Read/Select a node
// -> querySelector is a DOM method that lets us look up nodes by CSS **selector**.
console.log(document.querySelector("#today"))
// -> querySelectorAll is a DOM method that returns an array-like list of nodes that match a CSS selector.
document.querySelectorAll("p").forEach(pElement =>{
    console.log(pElement)
});
// -> textContent is a property of text nodes (e.g. h1, p) that contain their text.
console.log(document.querySelector("#today").textContent)



// ~ Update/Modify a node's attributes
// -> To modify an attribute, just use = after the attribute name in object dot notation
document.querySelector("#today").textContent = "Today!";
document.querySelector("#today").style.color = "green";


// ~ Delete/Remove a node
// -> To remove an existing element, we can look it up and call the node's method `remove()`.
document.querySelector("#tomorrow").remove();


// ~ Create + Append a node
// -> createElement(), append()
const image = document.createElement("img");
image.src = ""
document.body.append(image)
// ~ Challenges
// 1. Write a function named displayList that takes a name and an array,
//    and appends a list to #dates. For example, given "Books" and "The Shining",
//    the function should append to #dates something like:
//        Books
//        • The Shining
// 2. Replace the <strong> element with a newly created one.
function displayList(name, items){
    const listName = document.createElement("h3")
    listName.textContent = name
    document.body.append(listName)

    const list = document.createElement("ul");
    document.body.appendChild(list);

    items.forEach(function(item){
        const unorderedList = document.createElement('li');
        unorderedList.textContent = item;
        document.querySelector("ul").append(unorderedList)
    });
}
const title = 'Ice Cream'
const content = ["vanilla", "choco", "strawberry"]
displayList(title, content )

//challange 2
const div = document.querySelector('strong')
div.remove()
const newAddress = document.createElement('img')
// newAddress.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Ftenor.com%2Fsearch%2Fpikachu-gifs&psig=AOvVaw0V26sSJxuegjQ_7sTTRR99&ust=1710447152774000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIjFuamG8oQDFQAAAAAdAAAAABAE.gif"
document.querySelector("div").append(newAddress)


