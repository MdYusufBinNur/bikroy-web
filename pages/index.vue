<template>
  <v-container :fluid="true" class="pa-0">
    <CommonBlackCard title="Search here"/>
    <v-container>
      <Category/>
    </v-container>
    <div v-if="$vuetify.display.smAndUp">
      <About/>
    </div>
    <v-container :fluid="true" class="mt-5" style="background-color: #F1F2F2">
      <Download/>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>