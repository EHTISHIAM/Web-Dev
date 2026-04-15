// Objects are the entities which have the state and the behavior (property and method)
const student = {
    fullName : "Ehtisham" ,
    marks : 67,
    prntMarks : function () {
        console.log("Marks",this.marks) // this means the student.marks
    },
};
console.log(student);

// Js Object have a special property which is called the protoype which means itself have the assigned some methods and property and it is the object inside the object 
let arr = ["Bananan","Apple"];
arr.push("Ilichi"); // this is the example of the prototype
// Array is an object which has special property callled as prototype and it autmatiilay inherit when we created 
console.log(arr);

// Method to acces the prototype of other class

const employe = {
    cal1() {
        console.log("The tax rate is 10%");
    },
}

console.log(employe.cal1())

const Amir = {
    salary : 5000,

}
Amir.__proto__ = employe;

console.log(Amir.cal1());
console.log(Amir);

// if the object and prototype have the same method then the its own object method is used

const Sahil = {
    salary : 5000,
    cal1() {
        console.log("The tax rate is 20%");
    }
}
Sahil.__proto__ = employe;

console.log(Sahil.cal1());

/* CLASSES : 
these are the template code program for creating objects 
Those objects  will have some  state/variable and same  behavior (methods) in it
It is actually a blueprint for the object


class myClass {
constructor(){...}
myMethod(){...}
}*/

class toyota  {
    start () {
        console.log("This is start ");
    }

    stop () {
        console.log("This is stop")
    }
    set(brand) {
        this.brandName = brand;
    }
}
console.log(toyota);

// The above is the blueprint
// let newObj = new MyClass()
let fortuner = new toyota;
fortuner.set("Fortuner");
console.log(fortuner);


/* Constructor is a special method which is automatically  invokked and its name is reserved which is constructor itself and automatically initialize the myMethod() {..} ; */

class suzuki  {
    constructor (brand , mileage) {
        console.log("Created New Object");
        this.BrandName = brand ;
        this.mileage = mileage;
    }

    start () {
        console.log("This is start ");
    }

    stop () {
        console.log("This is stop")
    }
}
console.log(suzuki);

let mehran = new suzuki("Mehran" , 20) ; // the bracket strings goes to constructor parameter and the new is the keyword which finds the constructor
console.log(mehran);


