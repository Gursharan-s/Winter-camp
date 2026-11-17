
const { rejects } = require("assert");
const { log } = require("console");
const { promises, resolve } = require("dns");
const fs = require("fs");


// function fsReadFilePromise(filename, encoding) {
//     return new Promise ((resolve, reject) => {


//         fs.readFile(filename, encoding, function (err, data) {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(data);
//             }
//         });
//     });
// }
// fsReadFilePromise("a.txt", "utf-8")
//     .then(function (data) {
//         console.log(data);
//     })
//     .catch(function (err) {
//         console.log(err);
//     })

// function setTimeoutPromisefid(delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(function () {
//             resolve()
//         }, delay)
//     });
// }

// setTimeoutPromisefid(1000)
//     .then(function () {
//         console.log("heloooo jiii");
//     })

// function setTimeoutPromisefid (ms) {
//     return new Promise ((resolve , reject) => {
//         setTimeout (() => {
//             resolve();
//         }, ms);
//     });
// }

// async function solve() {
//     await setTimeoutPromisefid(1000);
//     console.log("hi");
//     await setTimeoutPromisefid(3000);
//     console.log("hello");
//     await setTimeoutPromisefid(5000);
//     console.log("Hello There")
// }

// solve();


// function cleanfile(filepath) {
//     return new Promise((resolve, reject) => {
//         fs.readFile(filepath, "utf-8", function (err, content) {
//             if (err) {
//                 reject();
//             }
//             else {
//                 const trimcontent = content.trim();
//                 fs.writeFile(filepath, trimcontent, function (err) {
//                     if (err) {
//                         return reject();
//                     }

//                     else {
//                         console.log (content);
//                         resolve("it's done'ssssssssssssssssss");
//                     }
//                 });
//             }
//         });
//     })
// }

// cleanfile("a.txt")
//     .then((message) => console.log(message))

//     .catch((err) => console.log(err));



function cleanfile(filepath, pp) {
    fs.readFile(filepath, "utf-8", function (err, content) {
        content = content.trim();
        fs.writeFile(filepath, content, function () {
            pp();
        });
    });
}

function doneo() {
    console.log ("file while done");
}
cleanfile("a.txt", doneo);