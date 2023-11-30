
function ingresa(v) {
    if ("false" === p) {
        num1 += v;
        document.getElementById('idmuestra').innerText = num1

    } else {
        num2 += v;
        document.getElementById('idmuestra').innerText = document.getElementById('idmuestra').innerText + v

    }
}
function operacion(op) {
    p = true
    switch (op) {
        case '+': cont = "+"
            break
        case '-': cont = "-"
            break
        case '/': cont = "/"
            break
        case '*': cont = "*"
            break
    }
    document.getElementById('idmuestra').innerText = document.getElementById('idmuestra').innerText + cont


}

function resultado() {
    document.getElementById('idmuestra').innerText = document.getElementById('idmuestra').innerText + "="

    switch (cont) {
        case '+': suma()
            break
        case '-': resta()
            break
        case '/': divicion()
            break
        case '*': multiplicacion()
            break

    }
}

function suma() {
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById('idmuestra').innerText = document.getElementById('idmuestra').innerText + resultado
}
function resta() {
    var resultado = parseInt(num1) - parseInt(num2);
    document.getElementById('idmuestra').innerText = document.getElementById('idmuestra').innerText + resultado
}
function divicion() {
    var resultado = parseInt(num1) / parseInt(num2);
    document.getElementById('idmuestra').innerText = document.getElementById('idmuestra').innerText + resultado
}
function multiplicacion() {
    var resultado = parseInt(num1) * parseInt(num2);
    document.getElementById('idmuestra').innerText = document.getElementById('idmuestra').innerText + resultado
}

function reset() {
    num1 = ""
    num2 = ""
    cont = ""
    p = "false"
    document.getElementById('idmuestra').innerText=0
}



var num1 = "";
var num2 = "";
var p = "false";
var cont = "";



