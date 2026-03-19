<template>
  <ion-page>

    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Cámara y GPS</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- 📷 CÁMARA -->
      <ion-button expand="block" @click="iniciarCamara">
        Activar Cámara
      </ion-button>

      <ion-button expand="block" color="success" @click="tomarFoto" v-if="camaraActiva">
        Tomar Foto
      </ion-button>

      <ion-button expand="block" color="danger" @click="eliminarFoto" v-if="fotoTomada">
        Eliminar Foto
      </ion-button>

      <video
        ref="video"
        autoplay
        playsinline
        width="100%"
        v-show="camaraActiva">
      </video>

      <canvas ref="canvas" style="display:none;"></canvas>

      <img
        :src="fotoUrl"
        v-if="fotoTomada"
        style="width:100%; margin-top:10px;" />

      <!-- 📍 GPS -->
      <ion-button expand="block" @click="obtenerUbicacion">
        Obtener Ubicación
      </ion-button>

      <p v-if="lat">Latitud: {{ lat }}</p>
      <p v-if="lng">Longitud: {{ lng }}</p>

    </ion-content>

  </ion-page>
</template>

<script setup>
import { ref, onBeforeUnmount } from 'vue'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton
} from '@ionic/vue'

import { Geolocation } from '@capacitor/geolocation'

const video = ref(null)
const canvas = ref(null)

const camaraActiva = ref(false)
const fotoTomada = ref(false)
const fotoUrl = ref(null)

const lat = ref(null)
const lng = ref(null)

let stream = null

// 📷 ACTIVAR CÁMARA (CON PERMISOS)
const iniciarCamara = async () => {
  try {
    // 👉 Solicita permisos en móvil
    const permisos = await navigator.mediaDevices.getUserMedia({ video: true })

    stream = permisos
    video.value.srcObject = stream
    camaraActiva.value = true

  } catch (error) {
    console.error("Error al activar cámara", error)
  }
}

// 📸 TOMAR FOTO
const tomarFoto = () => {
  const contexto = canvas.value.getContext('2d')

  canvas.value.width = video.value.videoWidth
  canvas.value.height = video.value.videoHeight

  contexto.drawImage(video.value, 0, 0)

  fotoUrl.value = canvas.value.toDataURL('image/png')

  fotoTomada.value = true
  camaraActiva.value = false

  detenerCamara()
}

// 🧹 ELIMINAR FOTO
const eliminarFoto = () => {
  fotoUrl.value = null
  fotoTomada.value = false
}

// ⛔ DETENER STREAM (CLAVE)
const detenerCamara = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop())
    stream = null
  }
}

// 📍 GPS CON PERMISOS
const obtenerUbicacion = async () => {
  try {
    // 👉 Pedir permisos explícitamente
    const permiso = await Geolocation.requestPermissions()

    if (permiso.location === 'denied') {
      console.warn("Permiso de ubicación denegado")
      return
    }

    const position = await Geolocation.getCurrentPosition()

    lat.value = position.coords.latitude
    lng.value = position.coords.longitude

  } catch (error) {
    console.error("Error obteniendo ubicación", error)
  }
}

// 🧼 LIMPIAR AL SALIR
onBeforeUnmount(() => {
  detenerCamara()
})
</script>