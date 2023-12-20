const valorHoraInput = document.querySelector("#valor-hora");
const horasTrabalhadasInput = document.querySelector("#hora-job");
const textResult = document.querySelector(".para");
const minTrabalhadosInput = document.querySelector("#min-job");
const btnCalc = document.querySelector(".btn");

btnCalc.addEventListener("click", calc);

function calc(){

let valorHora = parseFloat(valorHoraInput.value);
let horasTrabalhadas = parseFloat(horasTrabalhadasInput.value);
let minTrabalhados = parseFloat(minTrabalhadosInput.value);

if(isNaN(valorHora) || isNaN(horasTrabalhadas)){
    textResult.innerHTML = 'Por favor, insira valores válidos.';
    return;
}

if(isNaN(minTrabalhados)){
    minTrabalhados = 0;
}


let tempoTrabalhado = horasTrabalhadas + minTrabalhados / 60;

let resultCalc = valorHora * tempoTrabalhado;

let total = resultCalc.toFixed(2);

textResult.innerHTML = `Valor a receber: <strong>${total}</strong>`;



}



window.addEventListener("load", ()=>{
valorHoraInput.value ="";
horasTrabalhadasInput.value ="";
minTrabalhadosInput.value = "";
valorHoraInput.focus()

});

window.addEventListener("keydown", (e)=>{
    if(e.key === "Enter"){
        calc();
    }
});



