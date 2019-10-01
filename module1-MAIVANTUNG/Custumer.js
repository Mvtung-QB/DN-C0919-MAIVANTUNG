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
            "Name: "+this.nameCustumer +"</br>" +
            "id card:"+this.idCard +"</br>"+
            "birthday:"+this.birthdayCustumer+"</br>" +
            "Email:"+this.emailCustumer+"</br>"+
            "Address:"+this.address+"</br>" +
            "type custumer:"+this.typeCustumer+"</br>"+
            "numer of accompanying:"+this.numberOfAccompanying+"</br>"+
            "type room:"+this.typeRoom +"</br>"+
            "rentday:"+this.rentday+"</br>"+
            "type service:"+this.typeService+"</br>");
    }
}