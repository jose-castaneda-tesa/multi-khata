<script setup>
import { ref } from 'vue'
import { Geolocation } from '@capacitor/geolocation'

const lat = ref(null)
const lng = ref(null)

const obtenerUbicacion = async () => {
  try {
    const position = await Geolocation.getCurrentPosition()

    lat.value = position.coords.latitude
    lng.value = position.coords.longitude

    console.log("Latitud:", lat.value)
    console.log("Longitud:", lng.value)

  } catch (error) {
    console.error("Error obteniendo ubicación", error)
  }
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>GPS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-button @click="obtenerUbicacion">
        Obtener ubicación
      </ion-button>

      <p v-if="lat">Latitud: {{ lat }}</p>
      <p v-if="lng">Longitud: {{ lng }}</p>

    </ion-content>
  </ion-page>
</template>