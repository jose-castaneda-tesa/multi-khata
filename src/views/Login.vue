<template>
<ion-page>
    
  <ion-header>
    <ion-toolbar>
      <ion-title>login</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item class="ion-margin-bottom" lines="none">
    </ion-item>
  </ion-content>

<script setup lang="ts">
import { ref } from 'vue';
import { IonPage, IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/vue';
import { useUserStore } from "src/stores/user";
import { useRouter } from "vue-router";

const login = ref({
  usuario: ''
});
</script>
</ion-page>

</template>
