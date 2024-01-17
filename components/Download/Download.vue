<template>
  <div class="pa-2 d-flex justify-center" >
    <v-row  class="">
      <v-col cols="12" md="6" sm="6" class="justify-end">
        <v-img :src="mobile" :cover align="right" :aspect-ratio="$vuetify.display.mdAndUp ? 2.5 : $vuetify.display.xs ? 1.5 : 2" />
      </v-col>
      <v-col cols="12" md="6" sm="6" class="align-self-center" :class="$vuetify.display.xs ? 'px-5 text-center' : ''">
        <h1 class="" style="color: black; ">
          Download the app
        </h1>
        <p class="black--text">
          Make your life easier with Auction app. You can find our app in Google Play Store and App Store.
        </p>

        <div :class="$vuetify.display.sm ? 'd-flex flex-row ga-3 py-4' : 'd-flex flex-column ga-3 py-4'">
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

<script>
import mobile from '/mobile.png'
export default {
  name: "Download",
  data() {
    return {
      mobile
    }
  }
}
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
