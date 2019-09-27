let Telephone = function () {
    This.setPower=function (power) {
        this.power=power;
    }
    this.getPower=function () {
        return this.power;
    }
    This.setStatusPower=function (statusPower) {
        this.statusPower=statusPower;
    }
    this.getStatusPower=function () {
        return this.statusPower;
    }
    this.setMessWriting = function (mes) {
        this.messWriting=mes;
    }
    this.getMessWriting = function () {
        return this.messWriting;
    }
    this.setInbox= function (arr=new Array()) {
        this.inbox=arr;
    }
    this.getInbox= function () {
        return  this.inbox;
    }
    this.setInboxWatched= function (arr=new Array()) {
        this.inboxWatched=arr;
    }
    this.getInboxWatched= function () {
        return  this.inboxWatched;
    }
    this.setStatus= function (status) {
        this.status=status;
    }
    this.getStatus= function () {
        return  this.status;
    }
    //--------------
    this.status=function () {

    }
}