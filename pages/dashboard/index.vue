<script setup lang="ts">
import { defineComponent, ref } from 'vue';
const currentComponent = ref<string | null>(null);

function loadComponent(componentName: string) {
  currentComponent.value = componentName;
}

definePageMeta({
  layout: 'custom'
})
</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="1">
        <v-navigation-drawer>
          <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
          <v-divider></v-divider>
          <v-list-item link title="Profile"></v-list-item>
          <v-list-item link title="My Ads"></v-list-item>
          <v-list-item link title="Wallet"></v-list-item>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="12" md="11" class="mt-15 px-15">
        Load Page
      </v-col>
    </v-row>
  </v-container>

</template>
