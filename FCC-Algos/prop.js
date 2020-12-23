function Bird(name) {
    this.name = name;
}

Bird.prototype.numLegs = 2;

let duck = new Bird("Donald");

let ownProps = [];
let prototypeProps = [];

for (let property in duck) {
    console.log(property instanceof Bird);
    if (duck.hasOwnProperty(property)) {
        ownProps.push(property);
    } else {
        prototypeProps.push(property);
    }
}