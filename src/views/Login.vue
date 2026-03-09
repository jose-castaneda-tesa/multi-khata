<template>
<ion-page>

<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Login</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">

  <ion-item>
    <ion-input
      v-model="usuario"
      placeholder="Usuario">
    </ion-input>
  </ion-item>

  <ion-item>
    <ion-input
      type="password"
      v-model="password"
      placeholder="Contraseña">
    </ion-input>
  </ion-item>

  <ion-button expand="block" @click="login">
    Iniciar sesión
  </ion-button>

  <ion-button
    expand="block"
    fill="outline"
    router-link="/registro">
    Nueva cuenta
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
name:"Login",

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
usuario:"",
password:""
}
},

methods:{

async login(){

if(!this.usuario || !this.password){
alert("Complete usuario y contraseña")
return
}

try{

const datos = {
usuario:this.usuario,
password:this.password
}

const respuesta = await fetch("http://localhost:8080/ionic_api/login.php",{
method:"POST",
headers:{
"Content-Type":"application/json"
},
body:JSON.stringify(datos)
})

const resultado = await respuesta.json()

console.log(resultado)

alert(resultado.message)

if(resultado.status === "success"){

localStorage.setItem("usuario", resultado.usuario)

this.$router.push("/tabs/home")

}

}catch(error){

console.error("Error:",error)
alert("Error al conectar con el servidor")

}

}

}

}
</script>