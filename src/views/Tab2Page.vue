<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Reproductor</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-button expand="block" @click="playSong">
        ▶ Play
      </ion-button>

      <ion-button expand="block" @click="pauseSong">
        ⏸ Pause
      </ion-button>

      <ion-button expand="block" @click="stopSong">
        ⏹ Stop
      </ion-button>

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
  IonButton
} from '@ionic/vue'

// Crear el audio UNA sola vez
const audio = new Audio(
  new URL('@/assets/audio/lease.mp3', import.meta.url).href
)

const playSong = () => {
  audio.play()
}

const pauseSong = () => {
  audio.pause()
}

const stopSong = () => {
  audio.pause()
  audio.currentTime = 0
}
</script>

