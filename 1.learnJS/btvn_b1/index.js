let electric = prompt();
let total = 0;
const LV1 = 50;
const LV2 = 100;
const LV3 = 200;
const LV4 = 300;
const LV5 = 400;
const PRICE1 = 1678;
const PRICE2 = 1734;
const PRICE3 = 2014;
const PRICE4 = 2536;
const PRICE5 = 2834;
const PRICE6 = 2927;

if (0<= electric) {
    if(electric <= LV1 ){
        total=electric*PRICE1;
    }else if(electric > LV1 && electric <=LV2){
        total = (LV1 * PRICE1) + (electric-LV1)*PRICE2; 
    }else if(electric > LV2 && electric <=LV3){
        total = (LV1 * PRICE1) + ((LV2-LV1) * PRICE2) + ((electric-LV2)*PRICE3); 
    }else if(electric > LV3 && electric <=LV4){
        total = (LV1 * PRICE1) + ((LV2-LV1) * PRICE2)+ ((LV3-LV2) * PRICE3) +(electric-LV3)*PRICE4; 
    }else if(electric > LV4 && electric <=LV5){
        total = (LV1 * PRICE1) + ((LV2-LV1)* PRICE2)+ ((LV3-LV2) * PRICE3)+ ((LV4-LV3) * PRICE4) +(electric-LV4)*PRICE5; 
    }else if(electric > LV5){
        total = (LV1 * PRICE1) + ((LV2-LV1) * PRICE2)+ ((LV3-LV2 )* PRICE3)+ ((LV4-LV3 )* PRICE4)+ ((LV5-LV4) * PRICE5) +(electric-LV5)*PRICE6; 
    }
    console.log(total);
} else {
    console.log("số không hợp lệ")
}
