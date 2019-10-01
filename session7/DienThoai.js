let Telephone = function (phoneNumber) {
    this.phoneNumber=phoneNumber;
    this.setPower = function (power) {
        this.power = power;
    }
    this.getPower = function () {
        return this.power;
    }
    this.setStatusPower = function (statusPower) {
        this.statusPower = statusPower;
    }
    this.getStatusPower = function () {
        return this.statusPower;
    }
    this.setMessWriting = function (mes) {
        this.messWriting = mes;
    }
    this.getMessWriting = function () {
        return this.messWriting;
    }
    this.getReceivedMesseger = function (arr = new Array()) {
        this.receivedMesseger = arr;
    }
    this.setInbox = function (arr) {
            this.inbox = arr;
    }
    this.getInbox = function () {
        return this.inbox;
    }
    this.setInboxWatched = function (arr = new Array()) {
        this.inboxWatched = arr;
    }
    this.getInboxWatched = function () {
        return this.inboxWatched;
    }
    this.setStatus = function (status) {
        this.status = status;
    }
    /**
     * function ch  eck telephone
     */
    this.getStatus = function () {
        return this.status;
    }
    //--------------
    /**
     * function turn on telephone
     */
    this.turnOn = function () {
        this.status = true;
    }
    /**
     * function turn off telephone
     */
    this.turnOff = function () {
        this.status = false;
    }

    this.setMesseger= function (msg) {
        this.messWriting = msg;
    }

    this.getMesseger=function () {
        return this.messWriting;
    }

}