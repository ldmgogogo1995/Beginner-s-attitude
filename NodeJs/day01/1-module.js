console.log('hallo world')
class React {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    genLen() {
        return (this.width + this.height) * 2
    }

}
var react1 = new React(20, 30)
const len = react1.genLen()
console.log(len)