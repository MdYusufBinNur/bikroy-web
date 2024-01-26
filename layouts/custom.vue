<script setup lang="ts">
import logo from '~/assets/icons/logoSVG.vue'
</script>
<template>
  <v-app class="bg-white">
    <v-app-bar elevation="0" :flat=true scroll-threshold="0" color="background">
      <v-app-bar-nav-icon>
        <template v-slot:default>
          <v-img :src="logo" :cover>
          </v-img>
        </template>
      </v-app-bar-nav-icon>
    </v-app-bar>
    <main>
      <slot />
    </main>
  </v-app>

</template>
