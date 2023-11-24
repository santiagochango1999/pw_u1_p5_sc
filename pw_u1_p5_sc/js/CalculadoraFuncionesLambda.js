const sumar = (n1, n2) => n1 + n2;

const sumarCompleto = () => {

    var resultado = parsear('idnumero1') + parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}

const restarCompleto = () => {

    var resultado = parsear('idnumero1') - parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}
const dividirCompleto = () => {

    var resultado = parsear('idnumero1') / parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}
const multiplicarCompleto = () => {

    var resultado = parsear('idnumero1') * parsear('idnumero2');
    console.log(resultado);
    document.getElementById('idResultado2').innerText = resultado;
}
const cambiarCompleto = () => {
    document.getElementById('idimg1').src = 'https://raulperez.tieneblog.net/wp-content/uploads/2015/09/tux.jpg'

}

const parsear = (id) => parseInt(document.getElementById(id).value)


function conceptosJS() {
    let var1 = 10;
    let var1texto = 'texto1';
    console.log(var1);
    console.log(var1texto);

    /*var esta quedando en desuso*/
    var var2 = 10;
    var var2texto = 'texto2';
    console.log(var2);
    console.log(var2texto);

    const const1 = 10;
    const const1texto = 'texto3';
    console.log(const1);
    console.log(const1texto);

    //DECLARACION de arreglos
    const diasSemana = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];
    console.log(diasSemana)
    console.log(diasSemana[0])
    console.log(diasSemana[4])
    console.log(diasSemana[5])
    diasSemana[5] = "Sabado"
    console.log(diasSemana[5])
    diasSemana.push("Domingo")
    console.log(diasSemana)
    diasSemana.unshift("Feriado")
    console.log(diasSemana)

    const edades = [1, 2, 3, 4, 5]
    console.log(edades)

    const edades2 = [6, 7, 8]
    const edadesfinales = edades.concat(edades2)
    console.log(edadesfinales)

    for (const dia of diasSemana) {
        console.log(dia)
        if (dia === 'MARTES') {
            console.log('martes dos por uno')
        }
    }

    //DECLARACION DE OBJETOS
    const estudiante = {
        Nombre: "Santiago",
        Apellido: "Chango",
        Edad: "24",
        Genero: "M",
        Ciudad: "Quito"
    }

    console.log(estudiante)
    console.log(estudiante.Apellido)
    estudiante.Nombre = "Daniel"
    console.log(estudiante.Nombre)

    const Persona = {
        Nombre: "Santiago",
        Apellido: "Calvopiña",
        Edad: "31",
        Direccion: {
            callePrincipal: "Salvador ortega",
            calleSegundaria: "Accion Civica",
            Numeracion: "E6411",
            Barrio: "La ferroviaria"
        }
    }

    console.log(Persona)
    console.log(Persona.Direccion.Barrio = "Solanda")

    //Arreglo de 4 pacientes
    const Pacientes = {
        p1: {
            Nombre: "Alex",
            Apellido: "Chango",
            Edad: "31",
        },
        p2: {
            Nombre: "Marlene",
            Apellido: "Calvopiña",
            Edad: "55",
        },
        p3: {
            Nombre: "Edison",
            Apellido: "Chango",
            Edad: "60",
        },
        p4: {
            Nombre: "Henry",
            Apellido: "Chango",
            Edad: "20",
        },

    }
    const Pacientes2 = [
        {
            Nombre: "Alex",
            Apellido: "Chango",
            Edad: "31",
        },
        {
            Nombre: "Marlene",
            Apellido: "Calvopiña",
            Edad: "55",
        },
        {
            Nombre: "Edison",
            Apellido: "Chango",
            Edad: "60",
        },
        {
            Nombre: "Henry",
            Apellido: "Chango",
            Edad: "20",
        },

    ]

    console.log(Pacientes)
    console.table(Pacientes)

    console.log(Pacientes2)
    Pacientes2.pop(3)
    console.log(Pacientes2)

    //DESESTRUCTURACION DE ARREGLOS
    const diasSemana2 = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];
    const [dia1, dia2, dia3, dia4, dia5] = diasSemana2
    console.log(dia3)


    const [d1, d2, d3, d4, d5] = ["LUNES", "MARTES", "MIERCOLES", "JUEVES", "VIERNES"];
    console.log(d2)

    //DESESTRUCTURACION DE OBJETOS
    const Vehiculo = {
        Marca: "Toyota",
        Modelo: "Prius",
        Anio: "2022"
    }

    const { Marca, Modelo, Anio } = Vehiculo
    console.log(Marca)

    const { MarcaC, Componentes:{Memorio,Ram,Disco}, AnioC } = { MarcaC: "Lenove", Componentes: { Memorio: "500gb", Ram: "8gb", Disco: "Solido" }, AnioC: "2022" }
    console.log(Disco)
}
