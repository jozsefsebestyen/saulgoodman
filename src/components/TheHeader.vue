<template>
  <v-app-bar flat>
    <v-container>
      <v-row>
        <v-col class="text-left" align-self="start" cols="9" sm="5">
          <div class="title-text">Saul Goodman</div>
        </v-col>
        <v-col v-if="!$vuetify.display.xs" class="text-center" cols="2">
          <v-btn icon="mdi-scale-balance" @click="$router.push('/')" />
        </v-col>
        <v-col v-if="$vuetify.display.mdAndUp" class="text-right mt-1">
          <v-btn @click="$router.push('/')">Home</v-btn>
          <v-btn @click="$router.push('/#services')">Services</v-btn>
          <v-btn @click="$router.push('/contact')">Contact</v-btn>
        </v-col>
        <v-col v-else class="text-right" cols="3" sm="5">
          <v-btn icon="mdi-menu" @click.stop="drawer = !drawer" />
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" location="top" temporary>
    <v-list-item height="70" @click="$router.push('/')"><h3>Home</h3></v-list-item>
    <v-list-item height="70" @click="$router.push('/#services')"><h3>Services</h3></v-list-item>
    <v-list-item height="70" @click="$router.push('/contact')"><h3>Contact</h3></v-list-item>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
    }
  },
}
</script>

<style scoped>
.title-text {
  font-size: 20px;
  margin-top: 6px;
  font-weight: 600;
  opacity: 0.9;
}
</style>
