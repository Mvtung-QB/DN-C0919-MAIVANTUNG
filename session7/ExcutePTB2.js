
let numberA = document.getElementById("txta");
let numberB = document.getElementById("txtb");
let numberC = document.getElementById("txtc");
let result="";
let delta=0.0;

function xetNghiem() {
    let phuongTrinhBacHai= new PTBacHai();
    phuongTrinhBacHai.setA(numberA.value*1);
    phuongTrinhBacHai.setB(numberB.value*1);
    phuongTrinhBacHai.setC(numberC.value*1);
    if (numberA.value*1===0){
        if (numberB.value*1===0){
            if (numberC.value*1===0){
                result = "Vô số nghiệm";
            }else result= "vô nghiệm";
        }else {
            result = "Một nghiệm x= " + (-numberC.value*1 / numberB.value*1);
        }
    }else {
        if (phuongTrinhBacHai.getDelta()<0){
            result ="vo nghiem";
        }else if(phuongTrinhBacHai.getDelta()===0){
            result= "phuong trinh co nghiem kep: "+ phuongTrinhBacHai.getX1();
        }else {
            result ="x1= "+ phuongTrinhBacHai.getX1()+" x2= "+phuongTrinhBacHai.getX2();
        }

    }
    document.getElementById("result").innerText = result;
}