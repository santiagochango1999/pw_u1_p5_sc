function ingresa(v) {
    if ("false" === p) {
        num1 += v;
        document.getElementById('muestra').innerText = num1

    } else {
        num2 += v;
        document.getElementById('muestra').innerText = document.getElementById('muestra').innerText + v

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
    document.getElementById('muestra').innerText = document.getElementById('muestra').innerText + cont


}

function resultado() {
    document.getElementById('muestra').innerText = document.getElementById('muestra').innerText + "="

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
function borrar(){
    console.log(p)
    if("false" === p){

    }else{
        con=document.getElementById('muestra').innerText
        console.log(con)
        document.getElementById('muestra').innerText = con.slice(0,-1)
        console.log(document.getElementById('muestra').innerText);
    }
}

function suma() {
    var resultado = parseInt(num1) + parseInt(num2);
    document.getElementById('muestra').innerText = document.getElementById('muestra').innerText + resultado
}
function resta() {
    var resultado = parseInt(num1) - parseInt(num2);
    document.getElementById('muestra').innerText = document.getElementById('muestra').innerText + resultado
}
function divicion() {
    var resultado = parseInt(num1) / parseInt(num2);
    document.getElementById('muestra').innerText = document.getElementById('muestra').innerText + resultado
}
function multiplicacion() {
    var resultado = parseInt(num1) * parseInt(num2);
    document.getElementById('muestra').innerText = document.getElementById('muestra').innerText + resultado
}

function reset() {
    num1 = ""
    num2 = ""
    cont = ""
    p = "false"
    document.getElementById('muestra').innerText=0
}



var num1 = "";
var num2 = "";
var p = "false";
var cont = "";



