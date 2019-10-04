let Employee = function  (){
    this.setNameEmployee= function (name) {
        this.nameEmployee = name;
    }
    this.getNameEmployee= function () {
        return  this.nameEmployee;
    }
    this.setBirthdayEmployee= function (birthday) {
        this.birthdayEmployee = birthday;
    }
    this.getBirthdayEmployee= function () {
        return  this.birthdayEmployee;
    }
    this.setIDcard= function (idcard) {
        this.idcard = idcard;
    }
    this.getIDcard= function () {
        return  this.idcard;
    }
    this.setPhoneNumber= function (number) {
        this.phoneNumber = number;
    }
    this.getPhoneNumber= function () {
        return  this.phoneNumber;
    }
    this.setSalary= function (salary) {
        this.salary = salary;
    }
    this.getSalary= function () {
        return  this.salary;
    }
    this.setEmailEmployee= function (email) {
        this.emailEmployee = email;
    }
    this.getEmailEmployee= function () {
        return  this.emailEmployee;
    }
    this.setRegency= function (regency) {
        this.regency = regency;
    }
    this.getRegency= function () {
        return  this.regency;
    }
    this.setLocaEmployee= function (location) {
        this.location = location;
    }
    this.getLocaEmployee= function () {
        return  this.location;
    }
    this.caculatorSalary = function () {
        if(this.location === "Manager"){
            return this.salary + 500;
        }else if(this.location === "Sale"){
            return this.salary + 300;
        }else if (this.location === "Marketing") {
            return this.salary + 200;
        }
        return this.salary;
    }
    this.displayInfomationEmployee = function () {
        document.write("information Employee: </br>" +
            "Name: "+this.nameEmployee +"</br>" +
            "id card:"+this.idcard +"</br>"+
            "birthday:"+this.birthdayEmployee+"</br>" +
            "Email:"+this.emailEmployee+"</br>"+
            "Regency:"+this.regency+"</br>" +
            "Phone number:"+this.phoneNumber+"</br>"+
            "Location:"+this.location+"</br>"+
            "Salary:"+this.salary +"</br>");
    }
}