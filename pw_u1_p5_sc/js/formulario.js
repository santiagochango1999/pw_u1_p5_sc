const users=[]

const formulario = Vue.createApp({

    methods:{

        metodo1(){
           const usr = {
            nombre: this.nombre,
            apellido: this.apellido,
            Barrio: this.Barrio,
            cedula: this.cedula,
            pais:  this.pais
        } ;
        this.lista.push(usr)
        }

    },
  
    data(){
        return{
            lista : users,
            nombre : null,
            apellido : null,
            Barrio : null,
            cedula : null,
            pais : null
        }
    }

})

formulario.mount("#idFormulario")