
const inputUnit = document.querySelector('.input-unit');
const selStyleOperator = document.querySelector('.sel-style operator');
let inputStyle = document.querySelector('.inputstyle');
const operator = document.querySelector('.operator')
const calculate = document.querySelector('.calculate');
let resulte = document.querySelector('.result');
calculate.addEventListener("click",function calc(){
let sum = 0;
if(inputUnit.value == "L" && operator.value == "mL"){
    sum = Number(inputStyle.value) * 1000;
    console.log(Number(inputStyle.value) * 1000)
}
else if(inputUnit.value == "mL" && operator.value == "L"){
    sum = Number(inputStyle.value) / 1000 ;
    console.log( Number(inputStyle.value) / 1000)
}
else if(inputUnit.value == "m" && operator.value == "Km"){
    sum = Number(inputStyle.value) / 1000 ;
    console.log(Number(inputStyle.value) / 1000)
}
else if(inputUnit.value == "Km" && operator.value == "m"){
    sum = Number(inputStyle.value) * 1000 ;
    console.log( Number(inputStyle.value) * 1000)
}
else if(inputUnit.value == "g" && operator.value == "Kg"){
    sum = Number(inputStyle.value) / 1000 ;
    console.log(Number(inputStyle.value) / 1000)
}
else if(inputUnit.value == "Kg" && operator.value == "g"){
    sum = Number(inputStyle.value) * 1000 ;
    console.log( Number(inputStyle.value) * 1000)}
else{
    sum = "error";
}    

resulte.innerHTML= sum ;
console.log(sum);
}
)

   

