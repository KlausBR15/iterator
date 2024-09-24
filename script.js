const resultado = document.getElementById("result")



let lista = []

document.body.addEventListener("click", function(event) {
    

    let clicknumber = event.target.closest(".number")
    let submit = event.target.closest("#submit")

    if (clicknumber) {
        let number = Number(clicknumber.innerHTML)
        lista.push(number)
        resultado.innerHTML = ''
        
    }

    if (submit) {
        let it = lista[Symbol.iterator] ()

        for(let n = 0; n < lista.length; n++) {
            resultado.innerHTML += ` ${it.next().value} `
        }

        lista = [] 
       
        
    }
    

})