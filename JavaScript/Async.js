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
setTimeout (hello ,2000); // 2 sec  This is also a callback function in which hello function is passed as an argument 

//by using the arrow function
setTimeout(()=>{
    console.log("Wait Ended ");
} , 2000 ); // both of the function run at the same time after 2s at once 

console.log("Four ");  //this code runs after the code line no 5 6 7 then the hello function and above arrow function will run and this is example of asynchronizing programming

console.log("Five");

//Call Function : is a function which is passed as argument to another function 

function sum (a,b) {
    console.log(a+b);
}

function caluculator (a,b,callback) {
    callback(a,b);
}
caluculator(3,5,sum);  // the function is passed as an argument 

//now using the the arrow function 

caluculator(5,5,(a,b) => {
    console.log(a+b);
})

//Call Back Hell : is nested callback stacked one over another making the pyramid shape

function data (getData) {
    setTimeout(()=>{
        console.log("Data is ",getData);
    },2000) //4s
}

 data (45);  // 4s 
 data (46);  //4s
 data (47);  //4s   
// all the three function runs at once after 4s but we want getdata(45) runs then after 2s the getdata(46) runs then after 2s getDAta(47) runs like we are logging into instagram then put the username then the instagram if this username exists in the database then check the password 

//To achoieve this code we are doing this 

function newData (getData , callBack){
    setTimeout(()=>{
        console.log("Data is ",getData);
        if(callBack){
        callBack();
        }
    } , 2000)
}

newData(4800,()=>{
    newData(4900,()=>{
        newData(5000);
    }); //this is called call back  hell even I  can add more function or console.log after this parenthesis { 
});

// Promises : To solve the issues of callBack Hell problem . Promises is for 'eventual' completion of the task . Eventually means it will be completed successfully or may it will give error before to completion
//let promises = new Promise(resolve, reject)=>{......} resolve and reject are the function handler 

//Promises has 3 state pending , fullfilled , rejected 

let promise = new Promise((resovle,reject) => {//reject and resolve are callbacks in Js 
    console.log("I am a promise");
    resovle("Success"); //It is the result of the promise and its state will become fullfiled
})
console.log(promise);

let prom = new Promise ((resolve,reject)=>{
    console.log("2nd Promise");
    reject("Error is Printed now ");// Now the result will be in error form and state will be rejected 
})
console.log(prom);

//Promises work to fetch the data by calling the  API request 

function getData (data,callBack){
    return new Promise((resolve,rejct)=>{ //Promise added 
        setTimeout(()=>{
            console.log("Data is :",data);
            resolve("Success");
            if(callBack){
                callBack();
            }
        },5000)//3s
    });
}

// write this code to check the getData function how wrok 1. let promises = getData(1) 2. promises  3.promises


//promise.then((resolve)=>{......})   promise.catch((error)=>{......})

const getPromise = () =>{
    return new Promise((resolve,reject)=>{
        console.log("Promise is called");
        resolve("Success found "); //The bracket argument is passed as argumetn to promise.then function 
        reject("Error here by");//Argument to reject function and both of reject and resolve can not pass at a same time and from both of them one will work for specific condition and other for other condition and I just passed to run the code and check the result 
    });
}

let prime = getPromise();
//when Promise is resolved then we promise.then and for the error we used the promise.catch and can not use the promise.then for error it will print the error and vice verse 

prime.then((res)=>{
    console.log("Resolve is that ", res );
})
prime.catch((err)=>{
    console.log("The rejection is ", err );
})


//PROMISE AWAITS 
const asynFun = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            console.log("Latest Data");
            resolve("FulFilled");
        }, 10000 );
    });
}

const asyncFunc = ()=>{
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
            console.log("Fetched");
            resolve("This also FullFilled ");
        },10000);
    })
}

console.log("Data 1 is going to Fetched");

asynFun().then((res)=>{
    console.log(res);
    console.log("Data 2 is goinng to Fetched");
    asyncFunc().then((res)=>{
        console.log(res);
    });
});