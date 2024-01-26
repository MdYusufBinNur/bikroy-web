<template>
  <v-app>
    <v-app-bar elevation="0" :flat=true scroll-threshold="0" color="background">
      <v-container class="d-flex flex-row align-center">
        <v-spacer v-if="$vuetify.display.smAndDown" />
        <v-app-bar-nav-icon :ripple="false">

          <template v-slot:default>
            <v-img @click="$router.push('/')">
              <LogoSVG/>
            </v-img>
<!--            <v-img @click="$router.push('/')" v-if="$vuetify.display.smAndDown">-->
<!--              <ShortLogoSVG/>-->
<!--            </v-img>-->
          </template>
        </v-app-bar-nav-icon>
        <v-spacer/>
        <div v-show="$vuetify.display.mdAndUp">
          <nuxt-link v-for="(item, i) in items" :key="i"
                     class="mx-3 text-capitalize text-decoration-none text-shades-white"
                     active-class="transparent" elevation="0"
                     :to="item.to">
              <span class="text-sm-body-2">
                {{ item.title }}
              </span>
          </nuxt-link>
          <v-btn class="bg-white text-capitalize mx-3" rounded :ripple="false">
            Post your AD
          </v-btn>
        </div>
<!--        <v-app-bar-nav-icon v-show="$vuetify.display.xs">-->
<!--          <template v-slot:default>-->
<!--            <SearchSVG/>-->
<!--          </template>-->
<!--        </v-app-bar-nav-icon>-->
<!--        <v-app-bar-nav-icon @click.stop="dialog = !dialog" v-show="$vuetify.display.xs">-->
<!--          <template v-slot:default>-->
<!--            <MenuSVG/>-->
<!--          </template>-->
<!--        </v-app-bar-nav-icon>-->
      </v-container>
    </v-app-bar>
    <v-dialog
        v-model="dialog"
        :fullscreen="true"
        :scrim="false"
        transition="dialog-bottom-transition"
    >
      <v-card color="primary">
        <v-toolbar
            dark
            color="primary"
        >
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
                :icon="true"
                dark
                @click="dialog = false"
            >
              <v-icon color="white">mdi-close</v-icon>
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <!--        <v-list>-->
        <!--          <v-list-item v-for="(item, i) in items" :key="i" class="pa-5 px-10 primary">-->
        <!--            <div @click.prevent="$router.push(item.value)" class="text-h5 pb-3 primary" >-->
        <!--              {{ item.title }}-->
        <!--            </div>-->
        <!--            <template v-slot:append>-->
        <!--              <v-icon>-->
        <!--                <ArrowUpRightSVG />-->
        <!--              </v-icon>-->
        <!--            </template>-->
        <!--            <v-divider class="primary" color="primary"/>-->
        <!--          </v-list-item>-->
        <!--        </v-list>-->
        <v-card
            v-for="(item, i) in items" :key="i"
            flat="true"
            color="transparent"
            style="width: 100%"
            class="px-15 py-2"
        >
          <v-card-item class="px-0">
            <template v-slot:title>
              <div class="text-h6 text-white text-uppercase ">
                {{ item.title }}
              </div>
              <v-spacer/>
            </template>
            <template v-slot:append>
              <v-icon size="30">
                <ArrowUpRightSVG/>
              </v-icon>
            </template>
          </v-card-item>
          <v-divider v-if="i < items.length - 1" :thickness="1" color="white" style="opacity: inherit" class="px-8"/>
        </v-card>
        <v-card
            flat="true"
            color="transparent"
            style="width: 100%"
            class="px-15 py-6"
        >
          <v-btn rounded variant="outlined" text=""  block="">
            Post your Ad
          </v-btn>
        </v-card>
      </v-card>
    </v-dialog>
    <v-main class="bg-white">
      <NuxtPage/>
    </v-main>
    <BottomNavigation v-if="$vuetify.display.smAndDown" />
    <Footer v-if="$vuetify.display.mdAndUp" />
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
  name: "default",
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

<style scoped>
.dialog-bottom-transition-enter-active,
.dialog-bottom-transition-leave-active {
  transition: transform .2s ease-in-out;
}

</style>