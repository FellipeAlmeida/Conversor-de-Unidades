
function converterParaF() {
    const inputF = Number(document.getElementById("converter-para-f").value)
    const formula = (inputF * 9/5) + 32
    const resultado = `Esse valor em Fahrenheit é: ${formula.toFixed(1)}`
    const resultado1 = document.querySelector(".resultado1")

    resultado1.innerText = resultado
}

const btnConverterF = document.querySelector("#btn-converte-paraF")
btnConverterF.addEventListener('click', converterParaF)




function converterParaC() {
    const inputC = Number(document.getElementById("converter-para-c").value)
    const formula = (inputC - 32) * 5/9
    const resultado = `Esse valor em Celsius é: ${formula.toFixed(1)}`
    const resultado2 = document.querySelector(".resultado2")

    resultado2.innerText = resultado
}

const btnConverterC = document.querySelector("#btn-converte-paraC")
btnConverterC.addEventListener('click', converterParaC)



function converterMParaCm() {
    const inputCm = Number(document.getElementById("converter-para-cm").value)
    const formula = inputCm * 100
    const resultado = `Esse valor em centímetro é: ${formula}`
    const resultado3 = document.querySelector(".resultado3")

    resultado3.innerText = resultado
}

const btnConverterMParaCm = document.querySelector("#btn-converte-paraCM")
btnConverterMParaCm.addEventListener('click', converterMParaCm)



function converterCmParaM() {
    const inputM = Number(document.querySelector("#converter-para-m").value)
    const formula = inputM / 100
    const resultado = `Esse valor em metros é: ${formula}`
    const resultado4 = document.querySelector(".resultado4")

    resultado4.innerText = resultado
}

const btnConverterCmParaM = document.querySelector("#btn-converte-paraM")
btnConverterCmParaM.addEventListener('click', converterCmParaM)