<template>
  <v-footer app>
    <v-container>
      <v-row align="center">
        <!-- Copyright Section -->
        <v-col cols="12" class="text-center py-0">
          © {{ new Date().getFullYear() }} Saul Goodman's Awesome Law Firm. All rights reserved.
        </v-col>

        <!-- Links Section -->
        <v-col cols="12" class="text-center py-0">
          <v-btn size="x-small" variant="text"> Privacy Policy </v-btn>
          <v-divider vertical></v-divider>
          <v-btn size="x-small" variant="text"> Terms of Service </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {}
</script>
