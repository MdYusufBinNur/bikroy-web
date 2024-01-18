<template>

  <v-bottom-navigation
      v-model="value"
      :bg-color="'primary'"
      mode="shift"
  >
    <v-btn>
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
<script>
export default {
  name: 'BottomNavigation',
  data: () => ({value: 1}),

  computed: {
    color() {
      switch (this.value) {
        case 0:
          return 'blue-grey'
        case 1:
          return 'teal'
        case 2:
          return 'brown'
        case 3:
          return 'indigo'
        default:
          return 'blue-grey'
      }
    },
  },
}
</script>


<style scoped>

</style>