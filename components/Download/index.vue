<template>
  <div class="pa-2 d-flex justify-center">
    <v-row>
      <v-col cols="12">
        <v-img :src="mobile" :cover align="right" :aspect-ratio="5" />
      </v-col>
      <v-col cols="12"  :class="'px-5 text-center'" >
        <h1 class="" style="color: black;">
          Download the app
        </h1>
        <p class="black--text">
          Make your life easier with Auction app. You can find our app in Google Play Store and App Store.
        </p>
        <div :class="'d-flex flex-column ga-3 py-4'">
          <div>
            <v-btn tile  class="text-capitalize px-2" color="primary">
              <v-icon class="px-2">
                mdi-google-play
              </v-icon>
              Google Play
            </v-btn>
          </div>
          <div>
            <v-btn tile dark class="text-capitalize px-2" color="primary">
              <v-icon class="px-2">
                mdi-apple
              </v-icon>
              Apple Store
            </v-btn>
          </div>
        </div>

      </v-col>
    </v-row>
  </div>
</template>

<script setup>
import mobile from '/mobile.png'

</script>

<style scoped>
.child {
  position: absolute;
  top: 35%;
  text-align: center;
  justify-content: center;
;
}

.parent{
  position: absolute;
}
</style>
