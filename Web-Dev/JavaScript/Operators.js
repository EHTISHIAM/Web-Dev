console.log("Hello World");
alert("Hello  me !"); // It is a one time pop up message 
// prompt    This allows the user to input the value which can be safe shown then
let me = prompt("Hyee You !");
console.log(me); // Prompt always return the string
// Expression a+b a & b are operands and + is the operators
let a = 5;
let b= 4;
let c = 3;
console.log( "a =",a,"b =",b,"c =",c)
console.log("a+b = ",a+b);
console.log("a-b = ",a-b);
console.log("a*b = ",a*b);
console.log("a/b = ",a/b);
console.log("a%b = ",a%b);

// For Exponentiation means a the power b 
console.log("a**b = ",a**b);
console.log("a++ = ",a++); //These are the urinary operators a++ is the post increment 
console.log("b-- = ",b--); //These are the urinary operators --b is the pre increment 
console.log("++c = ",++c);

// Assigment Operators 
let d=6;
let e=3;
console.log("d=",d,"e=",e);
d+=4;
console.log("d + =",d);
e**=3;
console.log("e**=",e);

// Comparison Operators 
let x =3 ;
let y=5;
console.log("x==y",x==y) //It will return the value of true or False
console.log("x!=y",x!=y) //True

// In Java during the comparison , the string is changed into the number to compare 
let g =5 ; // Number
let h="5"; // String 
console.log("g==h",g==h) // True

// == ONly check the value and not the data type while === also checks the data type and same for the !== . Shortly means to check stictly

let k =5 ; // Number
let l="5"; // String 
console.log("k===l",k===l) // False due  to the data type 

// Some are also operators which are the < , > , <= , >=

// Logical Operators && , || , ! 
// If both expression are the true then && returns the true value 


let q = 3 ;
let w = 4 ;

let cond1 = q<w;// True 
let cond2 = q===3;// True 
 
console.log(cond1&&cond2);// True 

// The || is true if any of the condition is true 

let cond3 = q<w;// True 
let cond4 = q===3;// False 
 
console.log(cond3||cond4);// True

// ! it prints the opposite of the answer 
console.log("!(q<w)",!(q<w));//False 


// Conditional Statement like the if else 

let age = 25 ;
if (age>=18){
    console.log(" He can vote now ");
} // This statement is true because of the given age fits only this statement only

if (age<18){
    console.log(" He cannot  vote now ");
}

// Now make the mode method 
let mode =" black";
let color ;
if(mode==="black"){
    color="Black";
}
else{
    color="white";
}
console.log(color);

// Now make the program which tells the number is even or odd 
let number = 10;
if(number%2===0){
    console.log("It is the even number ");
}
else{
    console.log("It is the odd number");
}

// else if statement
if(age<18){
    console.log("Junior");
}
else if(age>18 && age < 50){
    console.log("Senior");
}
else{
    console.log("Old Aged");
}

// Mode on the else if 
let moode = "Blue";
let coolor;
if(moode==="black"){
    coolor="Black";
}
else if (moode==="Blue"){
    coolor="Blue";
}
else{
    coolor="White";
}
console.log(coolor);

// Ternary Operators which works on the three condition  and called simpler compact if and else 
// condition ? true output : false output
let aage = 25 ;
let result = aage > 18 ? "Adult" : "Not an adult ";
console.log (result);

// Usong the prompt method take a number form a user and tell it is the multiple  of the 5 or not 
let user = prompt ("write a number ");
if(user%5===0){
    console.log("Multiple of the 5");
}
else {
    console.log("Not a multiple of the 5");
}

// to check the grade 
let results = prompt("YOur Score");
if(results>=80 && results<100){
    console.log("Youur Grade is the A");
}
else if(results>=60 && results<80){
    console.log("Youur Grade is the B");
}
else if(results>=40 && results<60){
    console.log("Youur Grade is the C");
}
else {
    console.log("Failed");
}