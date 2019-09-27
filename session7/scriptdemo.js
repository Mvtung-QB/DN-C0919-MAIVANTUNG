let HinhChuNhat = function (dai,rong) {
    this.dai=dai;
    this.rong = rong;
    this.setDai= function (dai) {
        this.dai= dai;
    }
    this.getDai= function () {
        return this.dai;
    }
    this.setRong= function (rong) {
        this.rong= rong;
    }
    this.getRong = function () {
        return this.rong;
    }
    this.chuVi = function () {
        return (this.dai+this.rong)*2;
    }
    this.dienTich = function () {
        return  this.dai*this.rong;
    }
}