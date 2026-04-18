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
setTimeout(hello,2000); // 2 sec  This is also a callback function in which hello function is passed as an argument 

//by using the arrow function
setTimeout(()=>{
    console.log("Wait Ended ");
} , 2000); // both of the function run at the same time after 2s at once 

console.log("Four ");  //this code runs after the code line no 5 6 7 then the hello function and above arrow function will run and this is example of asynchronizing programming

console.log("Five");

//Call Function : is a function which is passed as argument to another function 

function sum (a,b){
    console.log(a+b);
}

function caluculator(a,b,callback){
    callback(a,b);
}
caluculator(3,5,sum);  // the function is passed as an argument 

//now using the the arrow function 

caluculator(5,5,(a,b)=>{
    console.log(a+b);
})

//Call Back Hell : is nested callback stacked one over another making the pyramid shape

function data (getData) {
    setTimeout(()=>{
        console.log("Data is ",getData);
    },4000) //4s
}

data (45);  // 4s 
data (46);  //4s
data (47);  //4s   
// all the three function runs at once after 4s 