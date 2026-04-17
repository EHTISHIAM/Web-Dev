//Inheritance means passing downs the methods and properites from the parent class to child class and a key word is used to inherit the properties and method which is extend
class parent {
    hello (){
        console.log("I am the parent ");
    }
}

class child extends parent {} 

let obj = new child();

console.log(child);

console.log(obj.hello()); //accessing the data from the parent using the extend 


/* The code defines classes for a human, engineer, and doctor, with methods for eating, sleeping,
working (coding for engineer, treating for doctor), and creates instances to demonstrate their
functionality. */
class human {
    constructor (){
        this.spices = "Homo Sapiens ";
        console.log(this.spices);
    }
    eat () {
        console.log("Eats");
    }
    sleep () {
        console.log("Sleep");
    }
}

class engineer extends human {
    constructor (brand){
        super(); // super is used to invoke the parent constructor first otherwise error comes 
        this.brand=brand;
        console.log(this.brand);
    }
    work () {
        return "Code"; // it return the code to console.log
    }
}

class doctor extends human {
    work () {
        super.eat(); // this will call the function first of parent then next block of code will run 
        return "Treat";
    }
}

let object1 = new human();
console.log(object1.eat());

let object2 = new engineer("Chemical Eng");
console.log(object2.eat(),object2.work()); //the eat is from the human parent class

let object3 = new doctor();
console.log(object3.work()); 

//if the parent and class have the function with samee name then the function of child class will be used 
// This is called method overide 

let DATA = "Data which Secret ";
class user {
    constructor (name , email){
        this.name=name;
        this.email=email;
    }
    showData(){
        console.log(this.name);
        console.log(this.email);
        console.log("Secret : ",DATA);
    }
}

let student = new user("Ehtisham","ehtihsam@gmail.com")
console.log(student.showData());

class admin extends user {
    constructor(name,email){
        super(name,email)
    }
    editData(){
        DATA = "New Secrets are here ";
    }
}

let adm = new admin ("Admin","admin@gmail.com");
console.log(adm.showData());//the same data calls from the parent 
adm.editData();//this calls the function to edit data
console.log(adm.showData());//Now the value of the data variable is changed here 


//ERROR HANDLING : 
let a = 5;
let b = 5;
console.log("a : ",a,"b : ", b);
console.log("a+b=",a+b);
console.log("a-b=",a-b); // sometimes error comes to a some line in whole code then the code stops at console at that line and the rest of the does not run then we write the specific code of block in error handling statement 

console.log("a*b=",a*b);