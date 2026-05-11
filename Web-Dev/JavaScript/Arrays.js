// Arrays are the collection of the items for the same type of the information and the special type of the object 
let marks = [13 , 24 ,34 , 21 , 26 ];
console.log(marks);
console.log(marks.length);
console.log(typeof marks); // In objects we use the key of the object but in the array we use the index of the array 

// Strings are immutable but arrays are mutable and the data can be change as well
marks[0] = 88;
console.log(marks);

// Loops over the array and we should know about the stopping condition of the array which is known by the length
let heros = ["Ironman","Antman","Hulk","Spiderman"];
for (let idx =0 ; idx<heros.length;idx++){
    console.log(heros[idx]);
}

// Another Method using the for of loop
for(let index of heros){
    console.log(index);
}

let number=[85,97,44,37,76,60];
let sum =0;
for(let ind of number){
    console.log(ind);
    sum += ind;
}
let avg = sum/number.length;
console.log(avg);
console.log(`The avg of the numbers are = ${avg} `);


// The 10 % on the value of these values of array and create a new array after the discount 
let arr=[250,300,900,500];
for(let val of arr){
    let dis = 0;
    dis = val ;
    val = (val*10)/100;
    dis -= val;
    console.log(dis);
}
//  using the for loop
for(let i=0 ; i<arr.length;i++){
    let offer = (arr[i]*10)/100;
    arr[i] -= offer;
}
console.log(arr);

// Arrays Methods 

// Pus () it is used to add new item in the end  and bring changes in the original arrays
let veggies =[ "Potato","Tomato","Onion","Brinjal"];
console.log(veggies);
veggies.push("Turnip","Chili");
console.log(veggies);

// pop() it is used to delete from the end and it value can be return using to store in a separate variable
// veggies.pop();
let delte = veggies.pop();
console.log(veggies);
console.log("Delete item is ", delte);

// toString () is uesd to convvert the strings data or the number data of a array in a single string
console.log(veggies.toString());  // this mehtod does not change the original array as well

// concat() is used to connect two or more arrays 
let fruit = ["Apple","Banana"];
let nuts = ["Almond","Walnut"];
let foods = veggies.concat(fruit,nuts);
console.log(foods);

// unshift( ) is used to add the item from the start 
fruit.unshift("Dates");
console.log(fruit);  

// shift ( ) is used to delete from the start and also store
let delta = fruit.shift();
console.log(fruit);


// slice(starting index,ending index) if the ending index is not mentioned than it autmatically goes to the end of that array and do not change the original array 
console.log(veggies.slice(1,3));

// splice(startingIndex,number of the element to be deleted , newEl1,newEl2,..) if you do not want to add the element than it will on delete the selected element and bring the change in the original array 
let sp = [1,2,3,4,5,6,7,8];
sp.splice(2,3,33,44,55);
console.log(sp);

sp.splice(2,0,22); // THis method only add the number after position 2
console.log(sp);

sp.splice(4,1); // It only deletes the item 
console.log(sp);

sp.splice(0,1,101); // This method only replace the item
console.log(sp);

sp.splice(4); // Only returns the element after 4 index
console.log(sp);

// Practice Question 
let comp = ["Bloomberg","Microsoft","Uber","Google","IBX","Netflix"];
comp.unshift();
console.log(comp);
comp.splice(0,1);
console.log(comp);
comp.splice(1,1,"Ola");
console.log(comp);
comp.splice(5,0,"Amazon");
console.log(comp);