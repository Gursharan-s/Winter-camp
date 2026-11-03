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


class change {
    constructor(color) {
        this.color = color;
    }
    paint() {
        console.log("this paint the color " + this.color);

    }
}

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
        super(color);
        this.side = side;
    }

    area() {
        const area = this.side * this.side;
        console.log("this is the area" , area);
        return area;
    }
    permeter() {
        const sid = 4 * this.side;
        console.log(" This is the side " , sid);
        
        return sid;
    }
}

class circle extends change {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }

    area() {
        const area = this.radius * this.radius * Math.PI;
        return area;
    }
    permeter() {

        return `A circle with radius ${this.radius} and color ${this.color}`;

    }
}


const ans = new recantagle(4, 4, "yellow");
console.log(ans.area());

const per = ans.permeter();
console.log(per);

const sq = new sqaure(5, "red");
console.log(sq.area());

const per1 = sq.permeter();
console.log(per1);


con

