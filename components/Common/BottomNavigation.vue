<template>

  <v-bottom-navigation
      v-model="data.value"
      :bg-color="'primary'"
      mode="shift"
  >
    <v-btn @click.prevent="$router.push('/')">
      <v-icon>mdi-home-outline</v-icon>
      <span>Home</span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-invoice-outline</v-icon>
      <span>All Ads</span>
    </v-btn>
    <v-btn>
      <v-icon>mdi-book-plus-outline</v-icon>
      <span>Post Ad</span>
    </v-btn>

    <v-btn>
      <v-icon>mdi-account-outline</v-icon>
      <span>Account</span>
    </v-btn>
  </v-bottom-navigation>
</template>
<script setup lang="ts">
import {ref, reactive,} from 'vue'
const data = reactive({
  value: 0
})

const goto = () => {

}
</script>


<style scoped>

</style>