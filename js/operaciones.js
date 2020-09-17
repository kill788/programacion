function sumar()
{
    // Recibir Datos

    let numeroU = parseInt(document.getElementById("nUno").value)
    let numeroD = parseInt(document.getElementById("nDos").value)

    //Procesar Datos

    let resultado = parseInt(numeroU + numeroD)

    //Entregar Resultado

    document.getElementById("resulOperacion").innerHTML = resultado 

}

function multiplicar()
{
    // Recibir Datos

    let numeroU = parseInt(document.getElementById("nUno").value)
    let numeroD = parseInt(document.getElementById("nDos").value)

    //Procesar Datos

    let resultado = parseInt(numeroU * numeroD)

    //Entregar Resultado

    document.getElementById("resulOperacion").innerHTML = resultado 

}

function triangulo()
{
    // Recibir Datos

    let base = parseInt(document.getElementById("base").value)
    let altura = parseInt(document.getElementById("altura").value)

    //Procesar Datos

    let resultado = parseInt((base * altura) / 2);

    //Entregar Resultado

    document.getElementById("resulOperacion").innerHTML = resultado 

}

function circulo()
{
    // Recibir Datos
    var pi= 3.141595

    let radio = parseInt(document.getElementById("radio").value)

    //Procesar Datos

    let resultado = parseInt(pi * radio * radio);

    //Entregar Resultado

    document.getElementById("resulOperacion").innerHTML = resultado 

}

