let Apple = function () {
    this.weight=10;
    this.getWeight= function () {
        return this.weight;
    }
    this.decrease= function () {
        if(this.weight>0)
            return this.weight -= 1;
        else
            return 0;
    }
    this.isEmpty=function () {
        if(this.weight>0)
            return false;
        else
            return true;
    }
}