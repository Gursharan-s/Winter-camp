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



class recantagle extends change {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }
    permeter() {
        const permeter = 2 * (this.width + this.height);
        console.log("This Was the Answer", this.width + this.height, " this was the color " + this.color);

        return permeter;
    }
}

class sqaure extends change {
    constructor(side, color) {
        this.side = side
        super(color);
    }

    area() {
        const area = this.side * this.side;
        return area;
    }
    permeter() {
        console.log("This Was the Answer", this.width + this.height, " this was the color " + this.color);
        return 4 * this.side;
    }
}

class circle extends change {
    constructor(radius, color) {
        this.radius = radius;
        super(color);
    }

    area() {
        const area = this.radius * this.radius * Math.PI;
        return area;
    }
    permeter() {

        return `A circle with radius ${this.radius} and color ${this.color}`;

    }
}

class change {
    constructor(color) {
        this.color = color;
    }
    paint() {
        console.log("this paint the color " + this.color);

    }
}

const ans = (4, 4, "yellow");
console.log(recantagle.area());

const per = ans.permeter();
console.log(per);





