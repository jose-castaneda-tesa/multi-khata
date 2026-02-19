<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Chuck Norris</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar color="dark">
        </ion-toolbar>
      </ion-header>

      <ion-card>
        <ion-card-content>
          {{ chuckStore.joke || 'Cargando frase...' }}
        </ion-card-content>
      </ion-card>

      <ion-card>
  <ion-card-content>
    <p v-if="chuckStore.loading">Cargando...</p>
    <p v-else-if="chuckStore.error">{{ chuckStore.error }}</p>
  </ion-card-content>
</ion-card>

<ion-button expand="block" @click="chuckStore.fetchJoke()">
  Nuevo chiste
</ion-button>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardContent
} from '@ionic/vue'

import ExploreContainer from '@/components/ExploreContainer.vue'
import { useAppStore } from '@/stores/app.store'
import { useChuckStore } from '@/stores/chuck.store'

// Stores
const appStore = useAppStore()
const chuckStore = useChuckStore()

onMounted(() => {
  chuckStore.fetchJoke()
})
</script>