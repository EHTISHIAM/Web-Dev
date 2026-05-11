// getAttribute() is used to get the value of the attribute of the tags
let the = document.querySelector("div");
console.log(the);
let value = the.getAttribute("id");
console.log(value);

let name = the.getAttribute("name");
console.log(name);

let dig = document.querySelector("p");
console.log(dig.getAttribute("class"));

// setAttribute(attributeName,newAttributeName) is used to set the value attribute to a new value
console.log(the.setAttribute("name","human"));

// node.style is used to change the style of the tags and it is the inline style
the.style.backgroundColor = "black";
the.innerText="Text Changed";

// let el=document.createElement("") is used to create a new tag / element
let newBtn = document.createElement("button");
newBtn.innerText ="Click Me !";
console.log(newBtn);

// Insert Method is used to add the element in the DOM tree 
// node.append(el) is used to add element in the inside of that node but at the end 
// node.prepend(el) is used to add the element inside at that node but at the start
the.append(newBtn);

// node.before(el) is used to add the new el before of that node 
// node.after(el) is used to add the new el after of that node 
let heading = document.createElement("h1");
heading.innerHTML = "<i>This Heading is added by using the JS</i>"
heading.style.textAlign = "center";
the.before(heading);

// Create a button in the JS and give it a text BG Color and text color and make it the first element of the body 
let btn = document.createElement("button");
btn.innerText = "Click It ";
btn.style.color = " Brown ";
btn.style.backgroundColor= "Purple";
btn.style.align = "center"
the.before(btn);

// Create a p tag in the class ......... Practice Question 
let hap = document.querySelectorAll("p");
console.log(hap[1]);
// console.log(hap[1].setAttribute("class","doc"));   THis method removes the class completely 
// classList.add("el") is used to add the class in the already present class without removing the prevoius one 
// classList.remove("el") is used to remove the class 
hap[1].classList.add("doc");