<template>
  <v-container fluid="" class="pa-0">
    <BlackCard title="Search here" />
<!--    <CommonCategoryComponent :data="cards" />-->
    <Category />
    <v-container :fluid="true" class="mt-5" style="background-color: #e5e5e4">
      <Download />
    </v-container>
  </v-container>
</template>

<script>
import Slider from "../components/Slider/Slider.vue";
import Trending from "../components/Trending/Trending.vue";
import LatestArticle from "../components/Latest/LatestArticle.vue";
import AdComponent from "../components/Ad/AdComponent.vue";
import BlackCard from "../components/Common/BlackCard.vue";
import CommonCategoryComponent from "../components/Common/CommonCategoryComponent.vue";
import Category from "../components/Category/Category.vue";
import Download from "../components/Download/Download.vue";
export default {
  name: "index",
  components: {Download, Category, CommonCategoryComponent, BlackCard, AdComponent, LatestArticle, Trending, Slider},
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