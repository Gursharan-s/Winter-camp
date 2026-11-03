// class square {
//     constructor(width, height, color) {
//         this.width = width;
//         this.height = height;
//         this.color = color;
//     }

//     area() {
//         const area = this.width * this.height;
//         return area;
//     }
//     permeter() {
//         const permeter = 2 * (this.width + this .height);
//     console.log ( "This Was the Answer" , this.width  + this.height, " this was the color " + this.color);

//     return permeter;
//     }
// }

// const tell = new square(2, 4, "yellow");
// console.log(tell.area());

// const ans = tell.permeter();

// console.log(ans);


// class change {
//     constructor(color) {
//         this.color = color;
//     }
//     paint() {
//         console.log("this paint the color " + this.color);

//     }
// }

// class recantagle extends change {
//     constructor(width, height, color) {
//         super(color);

//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         const area = this.width * this.height;
//         return area;
//     }
//     permeter() {
//         const permeter = 2 * (this.width + this.height);

//         console.log("This Was the Answer", this.width + this.height, " this was the color " + this.color);

//         return permeter;
//     }
// }

// class sqaure extends change {
//     constructor(side, color) {
//         super(color);
//         this.side = side;
//     }

//     area() {
//         const area = this.side * this.side;
//         console.log("this is the area", area);
//         return area;
//     }
//     permeter() {
//         const sid = 4 * this.side;
//         console.log(" This is the side ", sid);

//         return sid;
//     }
// }

// class circle extends change {
//     constructor(radius, color) {
//         super(color);
//         this.radius = radius;
//     }

//     area() {
//         const area = this.radius * this.radius * Math.PI;
//         console.log("this is the area ", this.radius);

//         return area;
//     }
//     permeter() {
//         const pp = Math.PI * this.radius;
//         console.log("This is the radius ", pp);

//         return pp;

//     }
// }


// const ans = new recantagle(4, 4, "yellow");
// console.log(ans.area());

// const per = ans.permeter();
// console.log(per);

// const sq = new sqaure(5, "red");
// console.log(sq.area());

// const per1 = sq.permeter();
// console.log(per1);


// const cr = new circle(4, " blue");
// console.log(cr.area());

// const per2 = sq.permeter();
// console.log(per2);

const fs = require("fs");

function fsReadfilePromisified(filepath, encodeing) {
    let p = new Promise((resolve, reject) => {


        fs.readFile(filepath, encodeing, (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data);
            }
        })
    })
    return p;
}

function callback(data) {
    console.log(data);

}
function callbackerr(err) {
    console.log("error while reading the file" );

}

fsReadfilePromisified("file.txt", "utf-8")
    .then(callback)
    .catch(callbackerr);