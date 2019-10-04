let Human=function () {
    this.setName= function (name) {
        this.name=name;
    }
    this.getName= function () {
        return this.name;
    }
    this.setGender= function (gender) {
        this.gender=gender;
    }
    this.getGender= function () {
        return this.gender;
    }
    this.setWeight= function (weight) {
        this.weight=weight;
    }
    this.getWeight= function () {
        return this.weight;
    }
    this.eating= function () {
        this.weight+=1;
    }
    this.say=function (mes) {
        document.write(mes);
    }
    this.checkedApple= function (apple) {
        if(apple.weight>0) return true;
        else  return  false;
    }
}