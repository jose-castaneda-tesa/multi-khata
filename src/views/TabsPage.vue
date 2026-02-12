<template>
  <ion-page>

    <!-- MENÚ LATERAL -->
    <ion-menu content-id="main-content" class="app-menu">
  <ion-header>
    <ion-toolbar color="primary">
      <ion-title>Khata App</ion-title>
    </ion-toolbar>
  </ion-header>

  <ion-content>
    <ion-list lines="none">

      <ion-item router-link="/tabs/tab1">
        <ion-icon slot="start" :icon="homeOutline" />
        <ion-label>Inicio</ion-label>
      </ion-item>

      <ion-item router-link="/tabs/tab2">
        <ion-icon slot="start" :icon="albumsOutline" />
        <ion-label>Panel 2</ion-label>
      </ion-item>

      <ion-item router-link="/tabs/tab3">
        <ion-icon slot="start" :icon="analyticsOutline" />
        <ion-label>Panel 3</ion-label>
      </ion-item>

    </ion-list>
  </ion-content>
</ion-menu>

    <!-- CONTENIDO PRINCIPAL -->
    <ion-tabs id="main-content">

      <!-- Header con botón hamburguesa -->
      <ion-header>
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button />
          </ion-buttons>
          <ion-title>Mi Aplicación</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-router-outlet></ion-router-outlet>

      <!-- BARRA DE TABS -->
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Tab 1</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Tab 2</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Tab 3</ion-label>
        </ion-tab-button>
      </ion-tab-bar>

    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonMenu,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonLabel,
  IonIcon,
  IonRouterOutlet,
  IonButtons,
  IonMenuButton
} from '@ionic/vue';

import {
  homeOutline,
  albumsOutline,
  analyticsOutline
} from 'ionicons/icons';

import { ellipse, square, triangle } from 'ionicons/icons';
</script>

<style scoped>
.app-menu ion-toolbar {
  --padding-top: 24px;
  --padding-bottom: 24px;
}

.app-menu ion-title {
  font-size: 1.2rem;
  font-weight: 600;
}

.app-menu ion-item {
  --min-height: 48px;
  border-radius: 8px;
  margin: 4px 8px;
}

.app-menu ion-item:hover {
  --background: rgba(0, 0, 0, 0.05);
}
</style>
