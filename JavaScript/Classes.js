// Objects are the entities which have the state and the behavior (property and method)
const student = {
    fullName : "Ehtisham" ,
    marks : 67,
    prntMarks : function () {
        console.log("Marks",this.marks) // this means the student.marks
    },
};
console.log(student);

// Js Object have a special property which is called the protoype which means itself have the assigned some methods and property 
let arr = ["Bananan","Apple"];
arr.push("Ilichi");
// Array is an object which has special propert callled as prototype and it autmatiilay inherit when we created 
console.log(arr);

// Method to acces the prototype of other class

const employe = {
    cal1() {
        console.log("The tax rate is 10%");
    },
}

const Amir = {
    salary : 5000,
}

