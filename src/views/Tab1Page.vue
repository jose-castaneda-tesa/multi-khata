<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>
        <ion-title>Introducción</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <!-- CONTENIDO PRINCIPAL -->
      <h1>Bienvenido a Khata Aero</h1>
      <p>
        Este proyecto explora distintas estéticas digitales como Vaporwave,
        Frutiger Aero y demás estilos y formas artísticas de la cultura digital.
      </p>

      <div class="glass-card" style="margin-top: 20px;">
        <h2>Proyecto de Desarrollo Movil 3755</h2>
        <p>José Luis Castañeda Haro<br>
           Tesa - 2026<br>
           Instituto tecnológico San Antionio ITSA<br>
           Carpeta del proyecto: multi-khata<br>
           Repositorio: https://github.com/jose-castaneda-tesa/multi-khata
        </p>
      </div>

      <!-- 🔘 BOTONES FLOTANTES -->
      <div class="floating-buttons">

        <button class="float-btn left" @click="openPanel('historia')">
          <img src="/assets/ui/654116.png" />
        </button>

        <button class="float-btn right" @click="openPanel('curiosidades')">
          <img src="/assets/ui/pillow-1-no-bg.webp" />
        </button>

        <button class="float-btn bottom" @click="openPanel('extras')">
          <img src="/assets/ui/711239.png" />
        </button>

      </div>

      <!-- 🧩 SUBPANELES -->
      <ion-modal
        :is-open="panelOpen"
        @didDismiss="panelOpen = false"
        :breakpoints="[0, 0.4, 0.7]"
        :initial-breakpoint="0.4"
      >
        <ion-content class="ion-padding">

          <div v-if="activePanel === 'historia'">
            <h2>Contenidos:</h2>
            <p>
              Estéticas de la cultura artística y digital de internet, desde los 2000s hasta hoy.<br>
              Movimientos y fenomenos culturales nacidos de comunidades en línea, como Tumblr, Reddit y foros especializados.<br>
              Influencias sobre los más relevantes temas estéticos, subculturas, estilos y diseños que inspiraron generaciones<br>
              MEdios digitales que permiten la interacción entre usuarios e internautas para alimentar la creación de contenido digital desde los años 80.
            </p>
          </div>

          <div v-if="activePanel === 'curiosidades'">
            <h2>Estéticas y tribus de internet</h2>
            <p>
              Con la proliferación de los ordenadores personales, internet y las redes sociales, surgieron nuevas formas de expresión estética que se entrelazaron con la cultura digital. Estas estéticas no solo reflejaban las tendencias artísticas de su época, sino que también se convirtieron en símbolos de identidad para comunidades en línea. Desde el minimalismo futurista de los 2000s hasta el resurgimiento nostálgico del vaporwave <br>
              Cada estética ha dejado una marca indeleble en la historia de internet y ha influenciado la forma en que nos conectamos y expresamos en el mundo digital.
            </p>
          </div>

          <div v-if="activePanel === 'extras'">
            <h2>Extras</h2>
            <p>
              Próximamente: música dinámica, efectos visuales inspirados en interfaz visual de "Windows Vista Aero"<br>
              Contenido adicional, subculturas y formas innovadores de arte que quedaron grabados en la historia de internet.<br>

            </p>
          </div>

        </ion-content>
      </ion-modal>

    </ion-content>

  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonModal
} from '@ionic/vue'

import { ref } from 'vue'

// 🔹 CONTROL DE PANELES
const panelOpen = ref(false)
const activePanel = ref(null)

const openPanel = (panel) => {
  activePanel.value = panel
  panelOpen.value = true
}
</script>