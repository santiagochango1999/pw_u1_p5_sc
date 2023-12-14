console.log("elementos Vue");
console.log(Vue);

const estudiantes = [{ nombre: 'EDISON', apellido: 'cayambe' }, { nombre: 'santiago', apellido: 'cayambe' }, { nombre: 'andres', apellido: 'cayambe' },
{ nombre: 'marlene', apellido: 'castillo' }, { nombre: 'fernanda', apellido: 'soteldo' }]

console.log(estudiantes)
console.table(estudiantes)

const app = Vue.createApp({

    /*template: `
     <h1>Hola Mundo</h1>
     <h1>Desde App.js</h1>
     <h1>{{1+1}}</h1>
     <p>{{[1,2,3,4,5,6,7,8]}} </p>
     <p>{{true?'Verdadero':'Falso'}} </p>
     `*/
    methods: {
        CambiarMensaje() {
            console.log("se esta cambiando el mensaje")
            console.log(this.mensaje)
            this.mensaje = 'Valor cambiado'
        },
        CambiarNumero() {
            this.valor = this.valor + 1
        },
        AgregarEstudiante() {
            console.log("agregando estudiante")
            const estu={ nombre: this.nombre, apellido: this.apellido }
            //this.lista.unshift(estu)
            this.lista.push(estu)
        },
        presioanndoTecla(event){
            console.log("presionando....")
            console.log(event.charCode)
        },
        presion(event){
            if(event.charCode===13){
                this.AgregarEstudiante
            }
        }

    },
    watch: {

    },
    data() {
        return {
            mensaje: 'hola mundo desde Vue.JS',
            valor: 100,
            lista: estudiantes,
            nombre: null,
            apellido: null
        }
    }
})


app.mount('#myApp')