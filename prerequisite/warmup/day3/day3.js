// function add(a, b) {
//     return a + b;
// }
// function subtract(a, b) {
//     return a - b;
// }
// function multiply(a, b) {
//     return a * b;
// }
// function division(a, b) {
//     return a / b;
// }

// function total(a, b, op) {
//     return op (a,b);
// }
// console.log(add(1,2));
// console.log(subtract(1,2));
// console.log(multiply(1,2));
// console.log(division(1,2));


// const { log } = require("console");
// const fs = require("fs");

// const content = fs.readFileSync ("a.txt" , "utf-8" );
// console.log(content);

// const content1 = fs.readFileSync ("b.txt" , "utf-8" );
// console.log(content1);



// const fs = require("fs");

// const content = fs.readFileSync ("a.txt" , "utf-8" );
// console.log(content);

// const content1 = fs.readFileSync ("b.txt" , "utf-8" );
// console.log(content1);
// const content2 = fs.readFileSync ("a.txt" , "utf-8" );
// console.log(content2);



// ead a file asynchronously

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, content) {
    console.log(content)
});
fs.readFile("a.txt", "utf-8", function (err, content) {
    console.log(content)
});
fs.readFile("b.txt", "utf-8", function (err, content) {
    console.log(content)
});

for (let i = 0; i < 19; i++) {
    console.log(i);
}