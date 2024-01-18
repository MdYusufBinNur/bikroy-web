<template>
  <v-container>
    <v-row>
      <v-col cols="12" class="text-center">
        <div :class="$vuetify.display.smAndDown ? 'text-h6 py-4 font-weight-bold' : 'text-h5 py-4 font-weight-bold'">
          Browse By All Categories
        </div>
      </v-col>
      <v-col  v-if="$vuetify.display.smAndUp" :cols="3" v-for="(cat, i) in categories" :key="i">
        <v-card
            :elevation="0">
          <template v-slot:prepend>
            <v-img :src="cat.image" width="40" :cover="true" />
          </template>
          <template v-slot:title>
            <v-card-text class="pa-1">
              {{cat.name}}
            </v-card-text>
          </template>
          <template v-slot:subtitle>
            <v-card-text class="pa-1">
              {{cat.ads + ' ads'}}
            </v-card-text>
          </template>
        </v-card>
      </v-col>
      <v-col  v-if="$vuetify.display.xs" :cols="6" v-for="(cat, i) in categories" :key="i">
        <v-card
            :elevation="0"
        >
          <template v-slot:prepend>
            <v-img :src="cat.image" width="40" :cover="true" />
          </template>
          <template v-slot:title>
            <v-card-text class="pa-1">
              {{cat.name}}
            </v-card-text>
          </template>
          <template v-slot:subtitle>
            <v-card-text class="pa-1">
              {{cat.ads + ' ads'}}
            </v-card-text>
          </template>
        </v-card>
      </v-col>


    </v-row>

  </v-container>
</template>

<script>
import education from '/category/book-open-cover.png'
import car from '/category/car-rear.png'
import pet from '/category/cat.png'
import sports from '/category/dice-d12.png'
import job from '/category/employee-man.png'
import living from '/category/fireplace.png'
import property from '/category/property.png'
import electronic from '/category/tv-music.png'
import mobile from '/category/mobile-button.png'
import fashion from '/category/tshirt.png'
import women from '/category/shirt-tank-top.png'
import business from '/category/suitcase-alt.png'
import essential from '/category/tools.png'
import agriculture from '/category/wheat-awn.png'
import overseas from '/category/airplan.png'
import service from '/category/user-headset.png'

export default {
  name: "Category",
  data() {
    return {
      categories: [
        {name: 'Mobiles', ads: 59483, image: mobile},
        {name: 'Electronics', ads: 53760, image: electronic},
        {name: 'Vehicles', ads: 29829, image: car},
        {name: 'Property', ads: 18127, image: property},
        {name: 'Living', ads: 17242, image: living},
        {name: 'Pets', ads: 13787, image: pet},
        {name: "Men's Fashion", ads: 10880, image: fashion},
        {name: "Women's Fashion", ads: 8790, image: women},
        {name: 'Sports & Kids', ads: 7404, image: sports},
        {name: 'Business', ads: 3258, image: business},
        {name: 'Essentials', ads: 3058, image: essential},
        {name: 'Education', ads: 2902, image: education},
        {name: 'Agriculture', ads: 797, image: agriculture},
        {name: 'Jobs', ads: 657, image: job},
        {name: 'Services', ads: 646, image: service}, // You can add the image path if available
        {name: 'Overseas', ads: 0, image: overseas}
      ]
    }
  }
}
</script>

<style scoped>

</style>