//Booleans or Bools

let i = true;

let j = false;

console.log(i,j)

//Null

let test = null

//undefined

let myName = undefined;


//numbers

let degrees = 90;

let precise = 999999999999999
console.log(precise)

let overflow = 9999999999999999
console.log(overflow)
let notQuite =(0.1 + 0.2).toFixed(1)
console.log(notQuite)

let numbersAreHard = (0.2 * 10 + 0.1 *10)/10;
console.log(numbersAreHard)

let numbers = Number("123")
console.log(numbers)

//strings

let stringOne = "doubley bois";
let string2 ="singley bois";

let first = 1050 +100;
let second = "1050" + "100";

console.log(first,second);

console.log(typeof first, typeof second);

console.log(123 + '999');

//objects

let car1 = {
    color:"red",
    tires:4,
    extras: "A/c and radio",
    cool: true,
}
console.log(car1);
console.log(car1.tires);

car1.make = "ford";
console.log(car1.make)
car1['model'] = "bronco"
console.log(car1['model'])

//arrays
let burritos = ['large', 4 ,'true']
console.log(burritos)

console.log(burritos[1])

console.log(typeof Burritos)
console.log(burritos instanceof Array)
console.log(burritos.length)

let a ="Jello"
let b ='shots'

console.log(a+b)
console.log(a + " " + b)

let greet = "hey"
let name = "danielle"
console.log(`${greet} ${name}! How are you?`)

let firstName = "Karl";
let lastName = "Gironda";
let houseNumber ="1312";
let street = "Ohio";
let city = "Indianapolis";
let state = "Indiana";
let zipCode ="46202";


console.log('My Name Is' , firstName + " " + lastName + ". " + "I live at" , houseNumber + " " + street + " " + city + " " + state + " " +zipCode)