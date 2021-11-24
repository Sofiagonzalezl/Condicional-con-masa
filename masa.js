let masa=Number (prompt("Su peso en kg"))
let estatura=Number (prompt("Su estatura en m"))
let imc=masa /(estatura*estatura)
let clasificacion
if (imc <=18.5) {
    clasificacion = "Insuficiencia ponderal"
}else{
    if (imc <= 24.9) {
        clasificacion = "Intervalo normal"
    }else{
        if (imc <= 30) {
            clasificacion = "Sobrepeso o probesidad"
        }else{
            if (imc <= 34.9) {
                clasificacion = "Obesidad de clase I"
            }else{
                if (imc <= 39.9) {
                    clasificacion = "Obesidad de clase II"
                }else{
                    clasificacion = "Obesidad de clase III"
                    }
                }
            }
        }
    }
}
document.getElementById ("Respuesta").innerHTML = "Su IMC es "+imc+" y esta en la clasificacion"+clasificacion