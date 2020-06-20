class React {
    constructor(w, h) {
        this.width = w;
        this.height = h;
    }
    genLen() {
        return (this.width + this.height) * 2
    }

}
module.exports = React