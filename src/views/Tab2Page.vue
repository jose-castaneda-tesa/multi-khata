<template>
<ion-page>

<ion-header>
  <ion-toolbar color="primary">
    <ion-title>Cuenta</ion-title>
  </ion-toolbar>
</ion-header>

<ion-content class="ion-padding">

  <ion-button expand="block" router-link="/tabs/tab2/registro">
Crear cuenta
</ion-button>

<ion-button expand="block" router-link="/tabs/tab2/login">
Iniciar sesión
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
IonButton
} from '@ionic/vue'

export default {
name: "Tab2Page",
components:{
IonPage,
IonHeader,
IonToolbar,
IonTitle,
IonContent,
IonButton
}
}
</script>