let temperature = new Temperature();
let celcius = document.getElementById("txtCelcius");
let result="";
function CToF() {
    temperature.setCelcius(celcius.value*1);
    result= celcius.value +" C = "+ temperature.CeiciusToFahrenheit()+"F";
    document.getElementById("result").innerText=result;
}
function CToK() {
    temperature.setCelcius(celcius.value*1);
    result= celcius.value +" C = "+ temperature.celciusToKenvin()+"F";
    document.getElementById("result").innerText=result;
}