<template>
  <v-container>
    <v-row class="align-center">
      <v-col order-sm="2" cols="12" sm="7" md="6" xl="4">
        <v-img height="600" cover src="/saulgoodman/saul-cropped.jpg"></v-img>
      </v-col>
      <v-col class="mt-1" sm="5" md="6" xl="8">
        <h1 class="mb-6">Legal trouble? Relax—S’all Good, Man!</h1>
        <div class="text-justify mb-6">
          Whether it's contracts, lawsuits, or clearing your name, Saul Goodman has your back. Quick
          solutions. Real results. No judgments.
        </div>
        <h1 class="welcome">Better call Saul!</h1>
        <v-row class="mt-5">
          <v-col class="text-center">
            <v-btn color="#ffcc00" size="x-large" @click="$router.push('/contact')">
              Book Consultation
              <v-icon class="ml-2" right>mdi-calendar</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script></script>

<style scoped>
.welcome {
  font-style: italic;
}

:deep(.v-btn__content) {
  white-space: pre-wrap;
}
</style>
