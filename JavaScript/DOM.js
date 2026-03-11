alert("Hello It's Me !");
/*Window Object
The window object represents an open window in a browser. It is browser's object (not JavaScript's) & is automatically created by browser.
It is a global object with lots of properties & methods. */
console.log(window);
window.console.log("Heello");  //console, others are a part of window object and we as such specify 

/* All  the html code can be acces in the javaScript which is available in the document object of the window 
which can be seen */
console.dir(window.document); // dir is used to print the methods and properties of the document

/*DOM is  like as tree model which is given in the table and every box is the node like window ,body head , div ,img */

console.log(document.body); //it prints the whole body of our html
console.dir(document.body); // it prints the properties and in these properties there is the chid notes which tells the the number of each nodes

console.log(document.body.childNodes[1]);

// Now chnage the text of the h1 of html through JS
console.log(document.body.childNodes[1].innerText="ABCD"); //DOM brings the dynamically changes / manipulation

// To change the background color using the DOM 
console.log(document.body.style.background ="green");
// If the script link in the html is written in the header tag then it loads first and then the body parts loads so the java s code do  not implement on the body parts 

// DOM Manipulation 

// Method to acces element 
// Selecting the element by their ID 
let heading = document.getElementById("heading");
console.log(heading);
console.dir(heading);

// Selecting the element by the class
let headings = document.getElementsByClassName("heading-class");
console.log(headings);
console.dir(headings); // html collection smilar to array and returns the all classes with the same name and have the indexes of the classes

// Selscting with the tags 
let para = document.getElementsByTagName("p");
console.log(para);
console.dir(para);

// The better method to select from all the above is query selector and return the nodelist and for class . is wriiten before name and # for the ID
// document.querySelector(id/tag/class);
let quwery = document.querySelector("p"); //first element only 
console.dir(quwery);
 
let quwe = document.querySelectorAll("p"); // all elements with that name
console.log(quwe);

// TagName 
let the = document.querySelector("#myId");
console.dir(the.tagName); // IT  PRINTS the name of the tag 


console.dir(document.body.firstChild); // IN Dom tree there are three types of nodes 1st is text 2nd is comments 3rd is the elements and we basically work on the elements nodes

let col = document.querySelector("div").children; // it prints the children of all div element
console.dir(col);

// Inner text and Inner html (it prints even the html tags )
let div = document.querySelector("div");
console.dir(div.innerText);
// div.innerText = "ABCD";  This  code changes the whole of the div into ABCD 
// div.innerHTML ="<ol>Hye<ol>" ; This code changes the even the tag and there is only div in the Div tag which is the given 

let we = document.querySelector("h2");
we.innerText = "New Heading ";
we.innerHTML = "<i>New Heading</i>";

// Text COntent  It shows the text of the tags even hidden
let hidd=document.querySelector("h3");
console.log(hidd);
console.log(hidd.textContent);
