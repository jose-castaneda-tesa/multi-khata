<template>

<ion-accordion-group>

<ion-accordion value="esteticas">

<ion-item slot="header">
<ion-label>Estéticas de Internet</ion-label>
</ion-item>

<ion-list slot="content">

<ion-menu-toggle
v-for="item in aesthetics"
:key="item.id"
:auto-hide="true"
>

<ion-item
:router-link="'/tabs/aesthetic/' + item.id"
>

<ion-label>{{ item.nombre }}</ion-label>

</ion-item>

</ion-menu-toggle>

</ion-list>

</ion-accordion>

</ion-accordion-group>

</template>

<script setup>

import aesthetics from '../data/aesthetics.json'

import {
IonAccordionGroup,
IonAccordion,
IonItem,
IonLabel,
IonList,
IonMenuToggle
} from '@ionic/vue'

</script>