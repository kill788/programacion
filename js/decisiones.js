function mostrarMensaje()
{
    //<!-- let edad = parseInt(document.getElementById('edad').value)

    //if (edad >= 18)
   // {
       // mensaje = "Eres Mayor De Edad"
    //}
    //else
   // {
    //    mensaje = "Eres Menor De Edad"
    //}

    //alert(mensaje)
    //document.write(mensaje)

    // If Con Operador Ternario

    let edad = parseInt(document.getElementById('edad').value)

    let mensaje = (edad >= 18) ? "Eres Mayor De Edad" : "Eres Menor De Edad"

    //document.write(mensaje)
    alert(mensaje)
}

function mostrarMensajeDos() 
{
    let edadP = parseInt(document.getElementById('edadP').value)
    let estaturaP = parseFloat(document.getElementById('estaturaP').value)
    let pesoP = parseInt(document.getElementById('pesoP').value)

    let parametroEdad = 80
    let parametroEstatura = 1.40
    let parametroPeso = 70
    let mensajeDecision = ""

    //if (edadP <= parametroEdad) 
 //{
        //if (estaturaP >= parametroEstatura) 
        //{
            //if (pesoP == parametroPeso) 
           //{
              //  mensajeDecision = "Apto para realizar el disparo"
            //} 
            //else 
            //{
               // mensajeDecision = "No apto. Peso no valido"
            //}
        //} 
       // else 
       // {
           //  mensajeDecision = "No apto. Estatura no valida"
       // }
   // } 
    //else 
   // {
    //    mensajeDecision = "No apto. Edad no permitida"
   // }

    //alert(mensajeDecision)

    // If Con Operador Logico AND(&&)

    if (edadP <= parametroEdad && estaturaP >= parametroEstatura && pesoP == parametroPeso) 
    {
        mensajeDecision = "Apto para realizar el disparo"
    }
    else
    {
        mensajeDecision = "No apto para realizar el disparo"
    }

     // If Con Operador Logico AND(&&)

     if (edadP <= parametroEdad || estaturaP >= parametroEstatura || pesoP == parametroPeso) 
     {
         mensajeDecision = "Apto para realizar el disparo"
     }
     else
     {
         mensajeDecision = "No apto para realizar el disparo"
     }
    alert(mensajeDecision)
}