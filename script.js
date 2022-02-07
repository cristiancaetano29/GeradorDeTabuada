//Função statica
/*
function tabuada(){
    let num1 = window.document.querySelector('input#txtNum')
    let tabuada = window.document.querySelector('select#opcTabuada')
    let dig = Number(window.document.querySelector('input#txtDig').value)

    //Mudar a cor do section e label
    let cor = window.document.querySelector('section#cor')
    let CorLetters = window.document.querySelector('label#lb')

    if (num1.value.length == 0){
        cor.style.background = 'Red'
        window.alert('Digite algum numero')
        tabuada.innerHTML = ' '
        CorLetters.innerHTML = `deseja gerar de 0 a 0`
    }
    else{
        let c = Number(num1.value)
        tabuada.innerHTML = ' '
        for(let n = 0; n <= dig; n++){
            let opc = window.document.createElement('option')
            let mul = c * n
            opc.text = `${c} X ${n} = ${mul} \u{1F4AF}` 
            tabuada.appendChild(opc) 
        }
        tabuada.style.background = 'cyan'
        cor.style.background = 'Green'
        CorLetters.style.color = 'cyan'
        CorLetters.innerHTML = `Tabuada Gerada do 0 a ${dig}`
    }
}*/

//Função Anonima
/*
let tabuada = function(){
    let num1 = window.document.querySelector('input#txtNum')
    let tabuada = window.document.querySelector('select#opcTabuada')
    let dig = Number(window.document.querySelector('input#txtDig').value)

    //Mudar a cor do section e label
    let cor = window.document.querySelector('section#cor')
    let CorLetters = window.document.querySelector('label#lb')

    if (num1.value.length == 0){
        cor.style.background = 'Red'
        window.alert('Digite algum numero')
        tabuada.innerHTML = ' '
        CorLetters.innerHTML = `deseja gerar de 0 a 0`
    }
    else{
        let c = Number(num1.value)
        tabuada.innerHTML = ' '
        for(let n = 0; n <= dig; n++){
            let opc = window.document.createElement('option')
            let mul = c * n
            opc.text = `${c} X ${n} = ${mul} \u{1F4AF}` 
            tabuada.appendChild(opc) 
        }
        tabuada.style.background = 'cyan'
        cor.style.background = 'Green'
        CorLetters.style.color = 'cyan'
        CorLetters.innerHTML = `Tabuada Gerada do 0 a ${dig}`
    }
}*/

//Arrow Functiion
let tabuada = () =>{
    let num1 = window.document.querySelector('input#txtNum')
    let tabuada = window.document.querySelector('select#opcTabuada')
    let dig = Number(window.document.querySelector('input#txtDig').value)

    //Mudar a cor do section e label
    let cor = window.document.querySelector('section#cor')
    let CorLetters = window.document.querySelector('label#lb')

    if (num1.value.length == 0){
        cor.style.background = 'Red'
        window.alert('Digite algum numero')
        tabuada.innerHTML = ' '
        CorLetters.innerHTML = `A tabuada não pode ser gerada`
    }
    else{
        let c = Number(num1.value)
        tabuada.innerHTML = ' '
        for(let n = 0; n <= dig; n++){
            let opc = window.document.createElement('option')
            let mul = c * n
            opc.text = `${c} X ${n} = ${mul} \u{1F4AF}` 
            tabuada.appendChild(opc) 
        }
        tabuada.style.background = 'cyan'
        cor.style.background = 'Green'
        CorLetters.style.color = 'cyan'
        CorLetters.innerHTML = `Tabuada Gerada do 0 a ${dig}`
    }
}
