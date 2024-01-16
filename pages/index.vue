<template>
  <v-container fluid="" class="pa-0">
    <BlackCard title="Search here" />
    <CommonCategoryComponent :data="cards" />
  </v-container>
</template>

<script>
import Slider from "../components/Slider/Slider.vue";
import Trending from "../components/Trending/Trending.vue";
import LatestArticle from "../components/Latest/LatestArticle.vue";
import AdComponent from "../components/Ad/AdComponent.vue";
import BlackCard from "../components/Common/BlackCard.vue";
import CommonCategoryComponent from "../components/Common/CommonCategoryComponent.vue";
export default {
  name: "index",
  components: {CommonCategoryComponent, BlackCard, AdComponent, LatestArticle, Trending, Slider},
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