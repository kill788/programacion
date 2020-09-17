function sumar()
{

    //Recibir Los Datos

    let numeroU = parseInt(document.getElementById("nUno").value)
    let numeroD = parseInt(document.getElementById("nDos").value)

    //Procesar Los Datos

    let resultado = parseInt(numeroU + numeroD)

    //Entregar Resultados

    document.getElementById ("resulOperacion").innerHTML = resultado

}