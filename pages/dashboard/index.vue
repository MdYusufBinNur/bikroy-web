<script >
import Account from "#build/components/Daseboard/Account.vue";
definePageMeta({
  layout: 'custom'
})
export default {
  layout: 'custom',
  data() {
    return {
      dynamicComponent: null
    };
  },
  methods: {
    async loadComponent(componentName) {
      // Dynamically import the component based on the button clicked
      this.dynamicComponent = await import(`~/components/Dashboard/${componentName}`);
      console.log(componentName)
    }
  }
};

</script>

<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="1">
        <v-navigation-drawer>
          <v-list-item title="My Application" subtitle="Vuetify"></v-list-item>
          <v-divider></v-divider>
          <v-list-item link title="Profile" @click.prevent="loadComponent('Account')"></v-list-item>
          <v-list-item link title="My Ads"></v-list-item>
          <v-list-item link title="Wallet"></v-list-item>
        </v-navigation-drawer>
      </v-col>
      <v-col cols="12" md="11" class="mt-15 px-15">
        <component is="Account"></component>
      </v-col>
    </v-row>
  </v-container>

</template>
