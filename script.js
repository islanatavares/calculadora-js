function calcular() {

    const num1 = parseFloat(document.querySelector("#num1").value)
    const num2 = parseFloat(document.querySelector("#num2").value)

    const operacao = document.querySelector("#meuSeletor").value
    let calculo = 0;

    if (operacao == "somar") { calculo = somar(num1, num2) }
    else if (operacao == "subtrair") { calculo = subtrair(num1, num2) }
    else if (operacao == "multiplicar") { calculo = multiplicar(num1, num2) }
    else if (operacao == "dividir") { calculo = dividir(num1, num2) }

    document.querySelector("span").innerText = calculo
}

function somar(num1, num2) {
    return (num1 + num2)
}

function subtrair(num1, num2) {
    return (num1 - num2)
}

function multiplicar(num1, num2) {
    return (num1 * num2)
}

function dividir(num1, num2) {
    return (num1 / num2)
}
function limpar() {
    document.querySelector("span").innerText = ""
}


