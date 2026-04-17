// covering the topic  async await << promise chains << callback hell

//Synchronous in Js means that the code runs in series of instruction given in program . Each instruction waits for the previous instruction to complete its execution . Line to line code execution 

console.log("One");  //sync programming
console.log("Two");
console.log("Three");

//Asynchronous in Js means that sometimes the program takes the time and due to synchronous programming the next imp instruction gets bloocked which cause delay in UI and it allow to execute other instruction without blocking the code 

// settimeout () is a function which tells the delays to run the command 

function hello (){
    console.log("Time waits ");
}
setTimeout(hello,2000); // 2 sec 

//by using the arrow function
setTimeout(()=>{
    console.log("Wait Ended ");
},4000);

console.log("Four ");  //this code runs after the code line no 5 6 7 then the hello function and above arrow function will run and this is example of asynchronizing programming

console.log("Five");

