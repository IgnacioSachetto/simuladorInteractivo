var i = 0
var acumulado = 0
var iva = 0

alert("BIENVENIDO")

while (i == 0){
    var precioProducto = parseFloat(prompt("Ingrese el precio de su producto"))
    var cantidad = parseFloat(prompt("Ingrese la cantidad de su producto"))        
    var acumulado = calcularSubTotal(precioProducto,cantidad) + acumulado

    alert("Su subTotal es de: $" + calcularSubTotal(precioProducto,cantidad))

    i = parseInt (prompt("¿Desea ingresar un producto? 0 Si , 1 No"))
}

alert("Su Total es de: $" + acumulado)

iva = parseInt (prompt("¿Desea añadir IVA? 0 Si , 1 No"))

if (iva == 0){
    alert("Su Total incluyendo IVA es de: $" + calcularIVA(acumulado))

    acumulado = calcularIVA(acumulado)

    envio = parseInt(prompt("¿Desea añadir envio? 0 Si , 1 No"))

    if (envio == 0){
        var precioEnvio = parseFloat(prompt("Ingrese el precio de su envio"))

        alert("Su Total Final es de: $" + parseInt(calcularEnvio(acumulado,precioEnvio)))
    } else {
        alert("Su Total Final fue de: $" + acumulado)
    }


} else {

    envio = parseInt (prompt("¿Desea añadir envio? 0 Si , 1 No"))

    if (envio == 0){
        var precioEnvio = parseFloat(prompt("Ingrese el precio de su envio"))
        alert("Su Total Final es de: $" + calcularEnvio(acumulado,precioEnvio))
    } else {
        alert("Su Total Final fue de: $" + acumulado)
    }
}


/*Funciones*/

function calcularSubTotal(precioProducto,cantidad){
    return(precioProducto * cantidad)
}

function calcularIVA (acumulado){
    return (acumulado + (acumulado* 0.21))
}

function calcularEnvio(acumulado,precioEnvio){
    return(acumulado+precioEnvio)
}













