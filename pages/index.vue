<template>
  <v-container :fluid="true" class="pa-0">
    <BlackCard title="Search here" />
    <v-container>
      <Category />
    </v-container>
    <v-container :fluid="true" class="mt-5" style="background-color: #e5e5e4">
      <Download />
    </v-container>
    <div v-if="$vuetify.display.smAndUp">
      <About  />
    </div>

  </v-container>
</template>

<script>
import BlackCard from "../components/Common/BlackCard.vue";
import Category from "../components/Category/Category.vue";
import Download from "../components/Download/Download.vue";
import About from "../components/About/About.vue";
export default {
  name: "index",
  components: {About, Download, Category, BlackCard},
  data() {
    return {
      cards: [
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        },
        {
          title: 'Favorite road trips',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        },
        {
          title: 'Best airlines',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
        },
      ],
    }
  }
}
</script>

<style scoped>

</style>