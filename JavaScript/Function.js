// Function is the block of the code that perform a specific code , can be invoked whenever needed and minimize the redundancy  ANd When a function is associated with the some objects like arrays it becomes a mehtods 
[1,2,3].push(4); // Function Example
"abc" .toUpperCase; // This is a method 

// Function consists of two parts one is the Function Definition
/*  Function functionName (){          Sometime in () we give parameters which are local variables not a global
    to do some work
}  */
/* The other is the function call which 
    functionName() ; */

function myFunc() {
    console.log("Here we are discussing the function");
    console.log("Yes these are the function");
}
myFunc();

// Using the Parameter
function myFun(msg){
    // parameter -> input
    console.log(msg);
}
myFun("I Love the JS");  // Argument

//Function to claculate the sum of two numbers
function add(a , b){
    console.log(a+b);
}
add(9,1);

// The function which returns the value 
function retu(a,b){
    s = a+b;
    console.log("Before Return");
    return s;
    console.log("After Return") ; // This can be printed because it comes after the return after return keyword no line executes
}
let val = retu(5,15);
console.log(val);  

/* Arrow Function : A compact way of writing a function 
const/let/var functionName = (Parameters ) => {
    to do some work
    }
When we write the functionName it prints the whole function 
When we call the functionName along giving the parameters it return the value
And it works like a normal variable whose value can be changes  */ 

const arrowSum =(a,b) => {
    return a+b ;
}
console.log(arrowSum);
let vaal = arrowSum(55,45);
console.log(vaal);

// Create a function which takes the string and gives the vowels from the string 
const vowels = (str) => {
    let count = 0;
    for(const val of str ){
        if (val==="a"|| val==="e"|| val==="i"|| val==="o"|| val==="u"){
            console.log(val);
            count ++;
        }
    }
    console.log(count);
}
vowels("Ehtisham");

/* Only in Javascript  
Function can be pass as a parameter in another function and can return the value  */
function innerParamet () { 
    console.log("Hello");
}
function outerFunction(funcc) {
    innerParamet();
}
outerFunction(innerParamet);  

// A function is called as a call back function which is passed by argument in to another function

/*forEach Loop 
arr.forEach(callBackFunction) 
CallBackFunction : Here it is used to  excute the every element of the array*/

let arr = [1,2,3,4,5];
arr.forEach(function innerFunction(value){  //value is passed by the forEach by each index and forEach take the value from the array
    console.log(value);
})

// Another Method 
let ar=[6,7,8,9];
ar.forEach((vel) => {
    console.log(vel);
});

let ara=["Punjab","Sindh","Kpk"];
ara.forEach((veel,idx,ara) => {     //idx,ara are optional parameters idx is used to print the index number and ara is the name of the array which is used 
    console.log(veel.toUpperCase(),idx,ara);
});

// Higher order function are those  which used the function as a parameter or return the fucntion so forEach is  the higher order function


// Take the square of each number of the loop
let num = [1,2,3,4,5];
num.forEach((value)=>{
    console.log(value*value);
});

// Another method
let calSpuare = (number) => {
    console.log(number*number);
}
num.forEach(calSpuare);

// Map Method : it is same as forEach but it prints the new array 
let hum = [2,3,5,6];
let red = hum.map((vsl)=>{
    return vsl + 3;
})
console.log(red);

// Filter Method : It is used to print the value of each index with the true condition
let reed =red.filter((values)=>{
    return values%2==0;
})
console.log(reed);

// Reduce : It is used to reduce the array using operations and returns a single value 
let hte = [1,2,3,4];
let output = hte.reduce((results,current)=>{  // results is the first value and the current is the 2nd one and they perform the sum action and the result is that sum and the current moves to the 3rd value 
    return results + current ;   
});
console.log(output);

// To return the largest number 
let large = hte.reduce((prev , curent )=>{
    return prev > curent ? prev : curent ;
})
console.log(large);

// Take a array and tell the students who secure 90+ marks
let marks = [91,89,90,94,95];
let counnt = 0;
let student = marks.reduce((prev , cur)=>{
    if (prev > 90 && cur < 90 || cur > 90 ) {
        counnt ++ ;
    }
    return counnt ;
})
console .log (student);
//  Better Answer
let better = marks.filter ((value)=>{
    return value > 90;
})
console.log(better);

// Take a number from a user and make array to 1 to n number and calculate the total sum of array 
let user = prompt("tell a number");
let arana = [];
for (let i  =1 ;i<=user ;i++){
    arana [i-1]= i ;
}
console.log(arana);
let put = arana.reduce((pre,curr)=>{
    return pre+curr;
});
console.log(put);