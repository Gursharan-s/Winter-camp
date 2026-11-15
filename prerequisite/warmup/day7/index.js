const fs = require("fs");


function fsReadFilePromise(filename, encoding) {
    return new Promise ((resolve, reject) => {


        fs.readFile(filename, encoding, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}
fsReadFilePromise("a.txt", "utf-8")
    .then(function (data) {
        console.log(data);
    })
    .catch(function (err) {
        console.log(err);
    })