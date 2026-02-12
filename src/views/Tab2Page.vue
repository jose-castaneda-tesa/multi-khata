<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Panel 2</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">

      <ion-header collapse="condense">
        <ion-toolbar color="dark">
          <ion-title size="large">Panel 2</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-content>
          Pantalla principal - Panel 2
        </ion-card-content>
      </ion-card>

      <ExploreContainer name="Panel 2" />

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/vue';

import ExploreContainer from '@/components/ExploreContainer.vue';
</script>

