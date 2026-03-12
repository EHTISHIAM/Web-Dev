// The change in the state of the object is called an event. It helps to make the interesting changes in the code that may effect code execution

//Always the priority is given to the Java Event Handling code over the inline code handling  

/* node.event = () =>m{
    handle here
}*/

let btn = document.querySelector("button");
 let i = 35;
btn.onclick = () => {
    console.log("You Just click the button");
    i++;
    console.log(i);
}
let din = document.querySelector(".content");
din.onmouseover = () => {
    console.log("You Just hover the mouse");
}

// Event Object 
// It is special object that has all the details about the event e.g. event is on the button or on the mouse 
// And the additional information about the event is stored in it

/* node.event = (evt) =>m{
    handle here
}*/

let btn1 = document.querySelector("button");
btn1.onclick = (evt) => {
    console.log("You Just click the button");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
}

// By this method we can only handle the event only one time this is the draw back

// Event Listner 
// node.addeventListner(event ,callback)  call back is the function and also called as a handler 
// by this we can execute the same event many times 

let btnn = document.querySelectorAll("button");
btnn[1].addEventListener("click",function() {
    console.log("Button Clicked 1");
    });
btnn[1].addEventListener("click",function() {
    console.log("Button Clicked 2");
    });

// This is function which is created separately and called in event listner and by this method it is removed 
const funct1 = () => {
    console.log("Button Clicked 3");
    };

btnn[1].addEventListener("click",funct1);

// node.removeEventListner("event",callBack) callback  here is that function we want to remove 
// the callback should be same to the refernce 

btnn[1].removeEventListener("click",funct1);

// Create a toogle button that changes the light mode into the dark mode when clicked back it changes the white mode again
let body = document.querySelector("body");
let curMode = "light";
const mode = () => {
if(curMode==="light"){
    curMode = "dark";
    body.classList.add("dark");
    body.classList.remove("light");
}
else{
    curMode="light";
    body.classList.add("light");
    body.classList.remove("dark");
}
console.log(curMode);
}

btnn[2].addEventListener("click",mode);