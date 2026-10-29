class square {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    area() {
        const area = this.width * this.height;
        return area;
    }
    permeter() {
        const permeter = 2 * (this.width + this .height);
    console.log ( "This Was the Answer" , this.width  + this.height, " this was the color " + this.color);
        
    return permeter;
    }
}

const tell = new square(2, 4, "yellow");
console.log(tell.area());

const ans = tell.permeter();

console.log(ans);