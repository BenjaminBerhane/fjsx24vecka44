// console.log("Hello funtions Thursday");

// Code along thursday.

// Vad är en function?

// Deklarera och anropar man funktioner?

// Syntax för att deklarera en funktion:

// function nameOfTheFunction(params) {
//   // Här innanför {} sker kod som ska utföras
//   // return resutl
// }

// skapa enkel funktion utan parameters

// function sayHello() {
//   console.log("Hej världen!");
// }

// sayHello();

// skapa en funktion med parameter

// function sayHello(name) {
//   console.log("Hej världen! Hälsningar från " + name);
// }

// let promtName = prompt("säg ditt namn");
// console.log(promtName);

// sayHello(promtName);
// sayHello("Hans");
// sayHello("Thomas");

// Vad return och varför används det?

// Tidigt avslut avslut av en funktion

// function findSquareRot(x) {
//   if (x < 0) {
//     return "Kan inte beräkna kvadratroten av negativa tal.";
//   } else {
//     return Math.sqrt(x);
//   }
// }

// console.log(findSquareRot(9));
// console.log(findSquareRot(-11));

// function sayHello() {
//   return console.log("Hej världen!");
// }

// let greeting = sayHello();

// console.log(greeting);

// function add(a, b) {
//   return a + b;
// }

// console.log(add(5, 85));
// // add(5, 85);

// anynoma funktioner, namngivna funktioner och arrow funktioner

// let person = {
//   firstName: "Alice",
//   gretting: function () {
//     console.log("hej jag heter " + this.firstName);
//   },
// };

// console.log(person.gretting());

// syntax för arrow functions

// let functionName = (param1, param2) => {
// // kod som ska utföras
// return resultat;
// }

// let add = (a, b) => a + b;

// let add2 = (a, b, string1) => {
//   return a + b;
// };

// console.log(add(1, 2));
// console.log(add2(1, 2, "hej"));

// let num = [1, 2, 3, 4, 5];

// let multiply = num.map((mandus) => mandus * 2);

// console.log(multiply);

// let radie = 5;
// let omkrets = 2 * Math.PI * radie;
// let area = Math.PI *+ radie * radie;
// console.log(`Omkretsen är: ${omkrets}`);
// console.log(`Arean är: ${area}`);

// function beräknaOmkrets(radie) {
//     return radie * 2 * Math.PI
// }
// console.log(`Omkretsen är: ${beräknaOmkrets(5)}`);

// function beräknaArea(radie) {
//     return radie * radie * Math.PI
// }
// console.log(`Arean är: ${beräknaArea(5)}`);

// let beräknaOmkrets2 = radie => radie * 2 * Math.PI
//     console.log(beräknaOmkrets2(5));
    
// ;

// console.log(`Omkretsen är: ${beräknaOmkrets(5)}`);

// const arrays = [1, 2, 3, 4, 5];

// array.forEach(( value, index) => {
//     setTimeout(() => {
//         console.log(value);
//     },index * 1000);
// });
// counter(array);

// const arraySquared = arrays.map(array => array * array);
// const numbers = [10, 15, 20, 25, 30];
// const evenNumbers = numbers.filter(number => number % 2 === 0 );
// console.log(evenNumbers)

const add = (a, b) => a + b;
console.log(add(2));
