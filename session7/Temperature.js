let Temperature = function () {
    this.setCelcius= function (celcius) {
        this.celcius=celcius;
    }
    this.CeiciusToFahrenheit= function () {
        return (this.celcius - 32)/1.8;
    }
    this.celciusToKenvin=function () {
        return this.celcius+ 273.15;
    }
}