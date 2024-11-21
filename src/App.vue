<template>
  <v-responsive>
    <v-app>
      <TheHeader />

      <v-main>
        <RouterView v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :key="$route.path" :is="Component" />
          </transition>
        </RouterView>
      </v-main>

      <TheFooter />
    </v-app>
  </v-responsive>
</template>

<script>
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheFooter from './components/TheFooter.vue'

export default {
  components: {
    RouterView,
    TheHeader,
    TheFooter,
  },
}
</script>

<style>
.fade-enter-active {
  animation: fade 0.3s;
}

.fade-leave-active {
  animation: fade 0.3s reverse;
}

@keyframes fade {
  from {
    opacity: 0%;
  }

  to {
    opacity: 100%;
  }
}
</style>
