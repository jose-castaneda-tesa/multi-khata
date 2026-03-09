<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Panel 3 - Cámara Web</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-button expand="block" @click="iniciarCamara">
        Activar Cámara
      </ion-button>

      <ion-button expand="block" color="success" @click="tomarFoto" v-if="camaraActiva">
        Tomar Foto
      </ion-button>

      <ion-button expand="block" color="danger" @click="eliminarFoto" v-if="fotoTomada">
        Eliminar Foto
      </ion-button>

      <video ref="video" autoplay playsinline width="100%" v-show="camaraActiva"></video>

      <canvas ref="canvas" style="display:none;"></canvas>

      <img :src="fotoUrl" v-if="fotoTomada" style="width:100%; margin-top:10px;" />

    </ion-content>
  </ion-page>
</template>

<script setup>
import { ref } from 'vue'

const video = ref(null)
const canvas = ref(null)

const camaraActiva = ref(false)
const fotoTomada = ref(false)
const fotoUrl = ref(null)

let stream = null

const iniciarCamara = async () => {
  stream = await navigator.mediaDevices.getUserMedia({ video: true })
  video.value.srcObject = stream
  camaraActiva.value = true
}

const tomarFoto = () => {
  const contexto = canvas.value.getContext('2d')
  canvas.value.width = video.value.videoWidth
  canvas.value.height = video.value.videoHeight
  contexto.drawImage(video.value, 0, 0)

  fotoUrl.value = canvas.value.toDataURL('image/png')
  const link = document.createElement('a')
  link.href = fotoUrl.value
  link.download = 'foto.png'
  link.click()
  fotoTomada.value = true
  camaraActiva.value = false

  stream.getTracks().forEach(track => track.stop())
}

const eliminarFoto = () => {
  fotoUrl.value = null
  fotoTomada.value = false
}
</script>