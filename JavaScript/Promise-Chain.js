function getData(ID) {
    return new Promise ( (resolve , reject )=>{
        setTimeout(()=>{
            console.log("Data is ",ID);
            resolve("Success")
        },3000);
    });
}

getData(1).then((res)=>{
    return getData(2);
}).then((res)=>{  //Promise Chain is better than the callback hell 
    console.log(res ,"Promise Chain one ");
})

//Asyn Awaits is more better than the Promises chains 

//Asyn Function always return the promises    async Function myFun(){..........}
async function HelloFun() {
    console.log("Say the Hello ");
}
console.log(HelloFun());  //Check the property of this function on the console log which returns the same three states of promises 

//Await keyword is for the async function only and awaits pauses the execution of its surrounding async function until the prommise is settled 

//Now I am calling the same function get data again using the await 

async function getAllData () {
    console.log("Getting Data 3 through the Await ");
    await getData(3);
    console.log("Getting Data 4 through the Await");
    await getData(4);
    console.log("Getting Data 5 through the Await");
    await getData(5).then((res)=>{  //uses then along the await 
        console.log(res , "Await One ");
    });
}

getAllData();  // during the aync await function we need to call the function which is unnessary step and this step is not made during the promises chain and call back hell 

//IIFE(Immediately Invoked Function Expression )is a method / function which is used to prevent the unnessary function call and is immediately call as soon as it is defined 
// In this function we enclose the whole function in a paranthesis () and do not add the name of the function and at the end again added the paranthesis () .

/* (  function (){.............}  
             ) () ;   */
