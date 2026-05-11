alert("Hello  World");
for(let i =0;i<5;i++){
    console.log("Hahah Loop ");
}
// Calculate the sum of 1 to  n numbers 
let n =5;
let count = 0;
for(let i = 0 ; i<=n;i++){
    count+=i;
}
console.log(count);

// While loop
let i=0;
while(i<5){
    console.log("Again the same loop");
    i++;
}

// Do While 
let j=0;
do{
    console.log("HAhaah Here we again ");
    j++;
}
while(j<2);


// For of loop and for in are the same loops but allows to apply the loop onto special data type like the strings and arrays(object)

// For of Loop and auto irritation and updation is done
// for(let var of strVar)     *strVar is name of the string 
// do some work

let str =" Tony staarks";
let size =0;
for(let i of str){
    // iterator -> Characters    like the iterator is the i
    console.log(i);
    size++;
}
console.log(size);

// For in loop 
// for(let key in objVar)     * objVar is the object 
// it only returns the value of the keys

let student = {
    name:"Ehtisham",
    age : 23 ,
    cgpa: 3.4,
}
for(let keys in student){
    console.log(keys ,"=", student[keys]);
}

// Print the number fromm the 1 to 100
for (let i = 0 ; i <=100; i++){
    if (i%2===0)console.log(i);
}
// A game user guess the correct number
let guess = 25;
let num = prompt ("Tell the number ");

while(num!=guess){
    num = prompt ("Tell the number agian ");
}
console.log (" You Guessed the Number Correct ");


// String   :Sequence of the characters to represent the text
let string = "It is the java Script";
let strinng = 'It is also a string ';
console.log(string);
console.log(strinng);


// Inbuilt Propeties is 
// Sting length which counts the number of variables in the string
console.log(string.length);

// String Position : Every variables has its a specific value which starts from the index 0 and so on 
console.log(string[0]); // it prints the I from the string

// Template Literals : A way to have the embedded expressions

let specialStr=`This is a template literals`;
console.log(specialStr);
console.log(typeof specialStr); // tells the type

let object = {
    item : "pen" ,
    price : 10,
}
console.log("The Price of ",object.item,"is ",object.price); // This even tells the type of the data of the number even but the template literals do not tell the type and change all the data into a sinngle string
let template = `The Price of ${object.item} is ${object.price}`; // these ${} are the string interpolation which are made by the embedment of placeholder
console.log(template);

let output = `It can tell the sum ${1+3+4}`;
console.log(output);

// Escape Letter : \n  to add the new line 
// Tag Space : \t
console.log("The Human\nare\t divided");
let strr = "The\tlenght"; // the \t counts as a single character and it is also called as the escape letter
console.log(strr.length);

// Strings Methods or Function : Built in the function to manipulate the strings 
let stri = "The String is the available ";
console.log(stri.toUpperCase);
console.log(stri.toUpperCase()); //() Are required to active the function
stri.toLocaleUpperCase();
console.log(stri);   // it does not change the real string or the actual string but it creates a new string and the new string can be save in a separate variable and that can be printed again
let newstr = stri.toUpperCase();
stri = stri.toUpperCase(); // it can also  apply the original variable of that string name 
console.log(stri);
console.log(newstr);

// Same as like we also have the str.toLowerCase

// Strigs are immutable

// str.trim(); it removes the starting and the ending white spaces from the string 
let sstr = "       The spaces     ";
console.log(sstr.trim());

// str.slice(starts,ends?) the starting index is included and the ending point is not inclusive and it slice the string 

let strng = "0123456789";
console.log(strng.slice(2,6));

// str1.concat(str2) is used to connect two strings
let str1 = "I am the ";
let str2 = "Human using the Js";
console.log(str1.concat(str2)); // the string comes first  which is written first 

// Another method
let res = "So the main reason ," + str1 + str2 + 243  ;
console.log(res);

// str.replace(serachVal,NewVal) serach one is the value we want to change and the new value is the new one we put in place of the search  value 
let men = "Here I am the bad player ";
console.log(men);
console.log(men.replace("bad","best"));

let all = "Hellollollo";
console.log(all.replaceAll("llo","mmo"));// ReplaceAll is used to replace all the llo characters in the string and alone replace function is only replace the first one llo into mmo

// To check the character str.charAt(index of that character)
let hello = "Hellloollo";
console.log(hello.charAt(2));

// The user inputs its name and the username is written along the length of  its name and the usrname is starting from teh  @
let take = prompt("Write your name ");
let rem = "@" + take + take.length;
console.log(rem);