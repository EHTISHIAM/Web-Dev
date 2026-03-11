console.log("Prince");
// The console.log is used to print the message on the console and the single and double comma is used and semicolon is used for the best practice or your choice 
console.log("I Love Js");
//Varaible store the value like the name,age,price
Name="Ehtisham";
console.log(Name);
age = 24;
console.log(age);
Price=454.45;
console.log(Price);
x=null; // there is a value in it which is empty basically 
y=undefined;// there is no clue what is in it
// ALso Boolean Value in it like true or false 
// Js is a dynamically type any type of a varaible can store any type of a value like the above name
isFollow=false;
isFollow=true;//use boolean to is it he follows me on the app or not 
console.log(isFollow); 
Name = 45;
console.log(Name);
//Js is case Sensitive and no space bw twoo variables name and only underscores and $ is allowed and no other letter is allowed and not start with the numeric 

// Var 
// Var can be redeclared and updated and global variable 
var human = 67;
var human = 565;
console.log(human);

// let 
// Cannot be redeclared and can be update and block code 
let jack = 56;
jack =57;
console.log(jack);

// const
// Cannot be redeclare and reupdate . After declaring have to give a some value to its initilizer  
const hall = 34;
console.log(hall);
// Block Scope means this 
{
    const hall =34;
    console.log(hall);
    // const again declare with the same initilizer but in a separate block
}

// Data Types 
// Primitive and Non Primitive 
// Primitive are number , string ,boolean ,null , undefined ,symbol ,bright 
let Laptop=BigInt("123");
console.log(Laptop); // usually n in the last of this data type
console.log(typeof Laptop);
let Hang=Symbol(23);
console.log(Hang);
console.log(typeof Hang); //Symbol and Bigint are rare to use

// Non Primitive includes objects (Arrays and Functions)

// OBJECTS
const students ={
    Name:"Sahil" ,
    age:34,
    cgpa:3.4,
    isPass:true,
};
students["age"] =students["age"] + 1;
console.log(students);
console.log(students["age"]);
// const objects key value can be change while single const variable can not be change

// Example to store the price of a pen 
const product= {
    title:"Black Pen",
    rating : 4,
    offer : 5,
    Price : 320,
}
console.log(product);

// When sting is added in the anything it comes after the string 
number="abc";
d=3;
f=number+d;
console.log(f);

// Show the profile INsformation 
const profile = {
    username : " Ehtisham Ul Haq",
    isFollow : false ,
    followers : 200 ,
    following : 50,
    name : "EHTISHAM",
    About : " Enterpenuer "
}
console.log(profile);
console.log(typeof profile["username"]);