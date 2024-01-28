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
      <slot/>
    </main>
  </v-app>

</template>
<script>
import Footer from "../components/Common/Footer.vue";
import LogoSVG from "../assets/icons/LogoSVG.vue";
import SearchSVG from "../assets/icons/SearchSVG.vue";
import MenuSVG from "../assets/icons/MenuSVG.vue";
import ArrowUpRightSVG from "../assets/icons/ArrowUpRightSVG.vue";
import ShortLogoSVG from "../assets/icons/ShortLogoSVG.vue";
import BottomNavigation from "../components/Common/BottomNavigation.vue";

export default {
  name: "custom",
  components: {BottomNavigation, ShortLogoSVG, LogoSVG, ArrowUpRightSVG, MenuSVG, SearchSVG, Footer},
  data: () => ({
    dialog: false,
    notifications: false,
    sound: true,
    widgets: false,
    drawer: false,
    group: null,
    items: [
      {
        title: 'All Ads',
        to: '#',
      },
      {
        title: 'Chat',
        to: '#',
      },
      {
        title: 'My Account',
        to: '/auth/login',
      },
    ],

    opacity: 1
  }),
  watch: {
    group() {
      this.drawer = false
    },
  },
}
</script>