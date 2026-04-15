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


class human {
    eat () {
        console.log("Eats");
    }
    sleep () {
        console.log("Sleep");
    }
}

class engineer extends human {
    work () {
        console.log("Code");
    }
}

class doctor extends human {
    work () {
        console.log("Treat");
    }
}

let object1 = new human();
console.log(object1.eat());

let object2 = new engineer();
console.log(object2.eat(),object2.work()); //the eat is from the human parent class

let object3 = new doctor();
console.log(object3.eat(),object3.work()); 

//if the parent and class have the function with samee name then the function of child class will be used 
// This is called method overide 
