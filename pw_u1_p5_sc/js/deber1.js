
function ingresa(v) {
    if ("false" === p) {
        num1 += v;
    } else {
        num2 += v;
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
}

function resultado() {
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
    document.getElementById('idmuestra').innerText = resultado
}
function resta() {
    var resultado = parseInt(num1) - parseInt(num2);
    document.getElementById('idmuestra').innerText = resultado
}
function divicion() {
    var resultado = parseInt(num1) / parseInt(num2);
    document.getElementById('idmuestra').innerText = resultado
}
function multiplicacion() {
    var resultado = parseInt(num1) * parseInt(num2);
    document.getElementById('idmuestra').innerText = resultado
}

function reset() {
    num1 = "0"
    num2 = "0"
    cont = ""
    p = "false"
    document.getElementById('idmuestra').innerText = 0
}



var num1 = "0";
var num2 = "0";
var p = "false";
var cont = "";


