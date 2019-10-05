let Custumer = function () {
    this.setNameCustumer =function(name){
        this.nameCustumer=name;
    }
    this.getNameCustumer =function(){
       return  this.nameCustumer;
    }
    this.setIdCard =function(idCard){
        this.idCard=idCard;
    }
    this.getIdCard =function(){
        return   this.idCard;
    }
    this.setBirthdayCustumer =function(birthdayCustumer){
        this.birthdayCustumer=birthdayCustumer;
    }
    this.getBirthdayCustumer =function(){
        return   this.birthdayCustumer;
    }
    this.setEmailCustumer =function(emailCustumer){
        this.emailCustumer=emailCustumer;
    }
    this.getEmailCustumer =function(){
        return   this.emailCustumer;
    }
    this.setAddress =function(address){
        this.address=address;
    }
    this.getAddress =function(){
        return   this.address;
    }
    this.setTypeCustumer =function(typeCustumer){
        this.typeCustumer=typeCustumer;
    }
    this.getTypeCustumer =function(){
        return   this.typeCustumer;
    }
    this.setDiscount =function(discount){
        this.discount=discount;
    }
    this.getDiscount =function(){
        return   this.discount;
    }
    this.setNumberOfAccompanying =function(numberOfAccompanying){
        this.numberOfAccompanying=numberOfAccompanying;
    }
    this.getNumberOfAccompanying =function(){
        return   this.numberOfAccompanying;
    }
    this.setTypeRoom =function(typeRoom){
        this.typeRoom=typeRoom;
    }
    this.getTypeRoom =function(){
        return   this.typeRoom;
    }
    this.setRentday =function(rentday){
        this.rentday=rentday;
    }
    this.getRentday =function(){
        return   this.rentday;
    }
    this.setTypeService =function(typeService){
        this.typeService=typeService;
    }
    this.getSetTypeService =function(){
        return   this.typeService;
    }
    /**
     * function display information custumer
     * @param custumer
     */
    this.displayInfomationCustomer=function () {
        document.write("information custumer: </br>" +
            "1.Name: "+this.nameCustumer +"</br>" +
            "2.id card:"+this.idCard +"</br>"+
            "3.birthday:"+this.birthdayCustumer+"</br>" +
            "4.Email:"+this.emailCustumer+"</br>"+
            "5.Address:"+this.address+"</br>" +
            "6.type custumer:"+this.typeCustumer+"</br>"+
            "7.numer of accompanying:"+this.numberOfAccompanying+"</br>"+
            "8.type room:"+this.typeRoom +"</br>"+
            "9.rentday:"+this.rentday+"</br>"+
            "10.type service:"+this.typeService+"</br>");
    }
}