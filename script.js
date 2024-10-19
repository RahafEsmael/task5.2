
const inputUnit = document.querySelector('.input-unit');
const selStyleOperator = document.querySelector('.sel-style operator');
const inputStyle = document.querySelector('.inputstyle');
const output = document.querySelector('#output')
const calculate = document.querySelector('.calculate');
const resulte = document.querySelector('.resulte');
function calc(){
let sum = 0;
if(inputUnit.target.value = "L"){
    sum = Number(inputStyle.value) / 1000;
}
else if(inputUnit.target.value = "mL"){
    sum = Number(inputStyle.value) * 1000 ;
}
else if(inputUnit.target.value = "m"){
    sum = Number(inputStyle.value) / 1000 ;
}
else if(inputUnit.target.value = "Km"){
    sum = Number(inputStyle.value) * 1000 ;
}
else if(inputUnit.target.value = "g"){
    sum = Number(inputStyle.value) / 1000 ;
}
else(inputUnit.target.value = "Kg")
    sum = Number(inputStyle.value) * 1000 ;

resulte.innerHTML = sum ;
}
calculate.addEventListener("click",calc);
   

