<template>
  <v-container>
    <TheHero />

    <v-row class="mt-10">
      <v-col>
        <v-divider>
          <h1 id="welcome">Welcome</h1>
        </v-divider>
      </v-col>
    </v-row>

    <!-- Intro Text Section -->
    <TheWelcome />

    <v-row class="mt-10">
      <v-col>
        <v-divider>
          <h1 id="services">Our Services</h1>
        </v-divider>
      </v-col>
    </v-row>

    <TheServices />
  </v-container>
</template>

<script>
import TheHero from '@/components/TheHero.vue'
import TheWelcome from '@/components/TheWelcome.vue'
import TheServices from '@/components/TheServices.vue'

export default {
  components: {
    TheHero,
    TheWelcome,
    TheServices,
  },
}
</script>
