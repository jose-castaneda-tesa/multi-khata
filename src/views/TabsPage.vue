<template>
  <ion-page>

    <!-- MENÚ LATERAL -->
    <ion-menu content-id="main-content" class="app-menu">
      <ion-header>
        <ion-toolbar color="primary">
          <ion-title>Khata Aero</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-content>
        <ion-list lines="none">

          <!-- TABS PRINCIPALES -->
          <ion-menu-toggle :auto-hide="true">
            <ion-item router-link="/tabs/tab1">
              <ion-icon slot="start" :icon="homeOutline" />
              <ion-label>Introducción</ion-label>
            </ion-item>
          </ion-menu-toggle>

          <ion-menu-toggle :auto-hide="true">
            <ion-item router-link="/tabs/tab2">
              <ion-icon slot="start" :icon="albumsOutline" />
              <ion-label>Registro/Login</ion-label>
            </ion-item>
          </ion-menu-toggle>

          <ion-menu-toggle :auto-hide="true">
            <ion-item router-link="/tabs/tab3">
              <ion-icon slot="start" :icon="analyticsOutline" />
              <ion-label>Cámara/GPS</ion-label>
            </ion-item>
          </ion-menu-toggle>

          <!-- Lista de estéticas -->
          <AestheticAccordion />

        </ion-list>
      </ion-content>
    </ion-menu>

    <!-- CONTENIDO PRINCIPAL -->
    <ion-tabs id="main-content">

      <!-- HEADER GLOBAL -->
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button />
          </ion-buttons>
          <ion-title>{{ pageTitle }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-router-outlet></ion-router-outlet>

      <!-- BARRA DE TABS -->
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon :icon="triangle" />
          <ion-label>Inicio</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon :icon="ellipse" />
          <ion-label>Cuenta</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon :icon="square" />
          <ion-label>Cámara</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonMenu, IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem,
         IonTabs, IonTabBar, IonTabButton, IonLabel, IonIcon, IonRouterOutlet, IonButtons,
         IonMenuButton, IonMenuToggle } from '@ionic/vue'
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import categorias from '../data/aesthetics.json'
import { ref } from 'vue'

import {
  homeOutline,
  albumsOutline,
  analyticsOutline,
  ellipse,
  square,
  triangle
} from 'ionicons/icons'

import AestheticAccordion from '../components/AestheticAccordion.vue'

// Datos
const route = useRoute()
const data = categorias
const pageTitle = computed(() => {
  const path = route.path

  // Tabs principales
  if (path.includes('/tab1')) return 'Inicio'
  if (path.includes('/tab2')) return 'Iniciar sesión/Registrarse'
  if (path.includes('/tab3')) return 'Funciones con Capacitor'

  // Temas de estética
  if (path.includes('/aesthetic/')) {
    const id = route.params.id
    const item = data.find(i => i.id === id)
    if (item) return item.nombre
  }

  return 'Khata Aero'
})
</script>