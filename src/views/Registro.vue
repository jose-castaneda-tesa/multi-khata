<template>

<ion-page>

<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Registro</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">

  <ion-item>
    <ion-input v-model="nombre" placeholder="Nombre"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input v-model="usuario" placeholder="Usuario"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input v-model="correo" placeholder="Correo"></ion-input>
  </ion-item>

  <ion-item>
    <ion-input type="password" v-model="password" placeholder="Contraseña"></ion-input>
  </ion-item>

  <ion-button expand="block" @click="registrar">
    Registrarse
  </ion-button>

</ion-content>

</ion-page>

</template>

<script>

import {
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonItem,
IonInput,
IonButton
} from '@ionic/vue'

export default {

name:"Registro",

components:{
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonItem,
IonInput,
IonButton
},

data(){
return{
nombre:"",
usuario:"",
correo:"",
password:""
}
},

methods:{

async registrar(){

const datos = {
nombre:this.nombre,
usuario:this.usuario,
correo:this.correo,
password:this.password
}

console.log("Registro enviado",datos)

try {

const respuesta = await fetch("http://localhost:8080/ionic_api/registro.php",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(datos)
})

const resultado = await respuesta.json()

console.log(resultado)

alert(resultado.message)

} catch(error){

console.error("Error:",error)
alert("Error de conexión con el servidor")

}

}

}

}

</script>