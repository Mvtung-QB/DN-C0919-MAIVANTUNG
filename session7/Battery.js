let Battery = function () {
    this.setEnergy= function (energy) {
        this.energy = energy;
    }
    this.getEnergy = function () {
        return  this.energy;
    }
    this.decreaseEnergy = function () {
        if (this.energy>0)
            this.energy--;
    }
}


let FlashLamp = function () {
    this.setStatus = function (status) {
        this.status = status;
    }
    this.getStatus =    function () {
        return this.status;
    }
    this.setBattery = function (battery) {
        this.battery = battery;
    }
    this.getBattery = function () {
        return  this.battery;
    }
    this.getbatteryInfor = function() {
        return this.battery.getEnergy();
    }
    this.turnOn = function () {
        this.status = true;
        this.battery.decreaseEnergy();
    }
    this.turnOff = function () {
        this.status = false;
    }
    this.light = function () {
        if (this.status) alert("lightting");
        else alert("not lightting");
    }
}