let Rat = function () {
    this.setName = function (name) {
        this.name=name;
    }
    this.getName = function () {
        return  this.name;
    }
    this.setSpeed = function (speed) {
        this.speed = speed;
    }
    this.getSpeed = function () {
        return  this.speed;
    }
    this.setWeigh = function (weigh) {
        this.weigh = weigh;
    }
    this.getWeigh = function () {
        return this.weigh;
    }
    this.setStatus = function (status) {
        this.status = status;
    }
    this.getStatus = function () {
        return this.status;
    }
    this.said = function (mess) {
        return mess;
    }
}

let Cat = function () {
    this.setName = function (name) {
        this.name=name;
    }
    this.getName = function () {
        return  this.name;
    }
    this.setSpeed = function (speed) {
        this.speed = speed;
    }
    this.getSpeed = function () {
        return  this.speed;
    }
    this.setWeigh = function (weigh) {
        this.weigh = weigh;
    }
    this.getWeigh = function () {
        return this.weigh;
    }
    this.setStatus = function (status) {
        this.status = status;
    }
    this.getStatus = function () {
        return this.status;
    }
    this.said = function (mess) {
        return mess;
    }
    this.Capture = function (rat) {
        if(rat.getSpeed() < this.speed){
                return true;
        }
        return false;
    }
    this.eat
}