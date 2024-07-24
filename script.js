function limparDisplay() {
    document.querySelector(".calculadora-screen").value = ""
}

function addDisplay(value) {
    if((value !== null) && (value !== undefined)){
        // addDisplay( localStorage.getItem("memoria"))
        document.querySelector(".calculadora-screen").value += value
    }else{
        addDisplay("")
    }
    
}

function pegarDisplay(){
    return document.querySelector(".calculadora-screen").value
}


try {
    const calculadora = document.querySelector(".calculadora-keys")
    if (calculadora) {

        calculadora.addEventListener("click", function (event) {

            if ((event.target.value != "=") && (event.target.value != "all-clear") && (event.target.value != "M+") && (event.target.value != "M-") && (event.target.value != "Mr") && (event.target.value != "Mc")) {
                addDisplay(event.target.value)
            }

            if (event.target.value == "all-clear") {
                limparDisplay()
            }
            else if (event.target.value == "M+") {
                localStorage.setItem("memoria", pegarDisplay())
                limparDisplay()
            }
            else if(event.target.value == "M-"){
               const memoriaSubitraida = localStorage.getItem("memoria") - pegarDisplay()
               localStorage.setItem("memoria" , memoriaSubitraida)
               addDisplay(localStorage.getItem("memoria"))
               limparDisplay()
            }
            else if (event.target.value == "Mr") {
                limparDisplay()
                addDisplay(localStorage.getItem("memoria"))

              

            }
            else if (event.target.value == "Mc") {
                localStorage.removeItem("memoria")
                limparDisplay()
            }

        

            else if (event.target.value == "=") {
                if (document.querySelector(".calculadora-screen").value != "") {

                    const resultado = eval(document.querySelector(".calculadora-screen").value)
                    document.querySelector(".calculadora-screen").value = resultado
                }
            }
        })
    }

}
catch (error) {
    // console.error("error", error)
    if (error.name == "TypeError") {
        console.error("Erro de tipo.", error)
    }

}

 pegarDisplay()

