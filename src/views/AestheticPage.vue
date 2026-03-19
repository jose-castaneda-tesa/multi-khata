<template>
  <ion-page>

    <ion-header>
      <ion-toolbar :style="{ '--background': aesthetic?.color }">
        <ion-title>{{ aesthetic?.nombre || 'Estética' }}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content
      class="ion-padding aesthetic-bg"
      :scroll-events="true"
      @ionScroll="handleScroll"
      v-if="aesthetic"
      :style="{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${aesthetic.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'all 0.5s ease'
      }"
    >

      <!-- 🎵 REPRODUCTOR (uno solo, controlado) -->
      <div style="margin-bottom: 15px; text-align: center;">
        <audio ref="audioPlayer" :src="aesthetic.audio" controls style="width:100%;"></audio>
      </div>

      <!-- Imagen principal -->
      <img 
        :src="aesthetic.imagen || aesthetic.backgroundImage" 
        style="
          width: 100%; 
          max-height: 300px; 
          object-fit: cover; 
          border-radius:10px;
          margin-bottom: 15px;
        " 
      />

      <div class="glass-card" style="margin-bottom: 15px;">
  <h2>{{ aesthetic.nombre }}</h2>
  <p style="white-space: pre-line;">
    {{ aesthetic.descripcion }}
  </p>
</div>

      <!-- GALERÍA -->
      <div v-if="aesthetic.galeria?.length">
        <swiper
          :slides-per-view="1"
          :space-between="10"
          style="margin-bottom: 15px;"
        >
          <swiper-slide
            v-for="(img, index) in aesthetic.galeria"
            :key="index"
          >
            <img
              :src="img"
              style="
                width: 100%;
                height: 250px;
                object-fit: cover;
                border-radius: 12px;
              "
            />
          </swiper-slide>
        </swiper>
      </div>

      <!-- 🎥 BOTÓN VIDEO -->
      <ion-button
        expand="block"
        v-if="aesthetic.video"  
        :href="aesthetic.video.replace('embed/', 'watch?v=')"
        target="_blank"
        :style="{
          '--background': aesthetic.color,
          backdropFilter: 'blur(10px)',
          borderRadius: '12px',
          color: '#fff'
        }"
      >
        Ver video en YouTube
      </ion-button>

    </ion-content>

    <div v-else style="padding:20px; text-align:center; color:#888;">
      Estética no encontrada.
    </div>

  </ion-page>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed, ref, watch, onBeforeUnmount } from 'vue'
import aesthetics from '../data/aesthetics.json'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue'

// Scroll (parallax futuro)
const scrollY = ref(0)
const handleScroll = (event) => {
  scrollY.value = event.detail.scrollTop
}

// ✅ ROUTE REACTIVO
const route = useRoute()

// ✅ AESTHETIC REACTIVO (CLAVE)
const aesthetic = computed(() =>
  aesthetics.find(a => a.id === route.params.id)
)

// 🎵 AUDIO
const audioPlayer = ref(null)

// ✅ DETENER AUDIO AL CAMBIAR DE TEMA
watch(() => route.params.id, () => {
  if (audioPlayer.value) {
    audioPlayer.value.pause()
    audioPlayer.value.currentTime = 0
  }
})

// ✅ DETENER AUDIO AL SALIR
onBeforeUnmount(() => {
  if (audioPlayer.value) {
    audioPlayer.value.pause()
    audioPlayer.value.currentTime = 0
  }
})
</script>