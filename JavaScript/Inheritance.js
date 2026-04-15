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
        console.log("Doctor");
    }
}
