let PTBacHai= function () {
    this.setA= function (a) {
        this.a=a;
    }
    this.getA=function () {
        return this.a;
    }
    this.setB= function (b) {
        this.b=b;
    }
    this.getB=function () {
        return this.b;
    }
    this.setC= function (c) {
        this.c=c;
    }
    this.getC=function () {
        return this.c;
    }
    this.getDelta= function () {
        return this.b*this.b -4*this.a*this.c;
    }
    this.getX1=function () {
        return (-this.b+ Math.sqrt(this.getDelta()))/(2*this.a);
    }
    this.getX2=function () {
        return (-this.b- Math.sqrt(this.getDelta()))/(2*this.a);
    }
}