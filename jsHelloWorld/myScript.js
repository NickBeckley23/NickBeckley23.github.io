document.writeln("Hello World"); //This writes it to the page as html


console.log("Hello World"); //This writes it to the console

let x = ["Hello", 2, false, 3.14, car = {seats: "bucket", color: "white", price: 35000}];

console.log(x); //color of car is white. The types of the items in the array are color coded which is nice to look at in the console. The console also has the size of the element next to it automatically.

x[car.color = "red"]; //change color to red.

console.log(x); //color is now red.


function toSum(x, y) {return x+y;}
console.log(toSum(3,5)); //this is nice and short but I would have to assign the output to a variable if I wanted to use it elsewhere.

let myFunc = function sumThese(x, y){return x+y;};
console.log(myFunc(3,4)); //this is nice because I can call the function using the variable name.

console.log(toSum("Hello", "there")); //using function adding strings

console.log(myFunc(3.141, 3.141)); //using functions adding floats

//it's easy to add different types using this function. You don't have to specify in the function definition what types of parameters to take it just adjusts for them automatically