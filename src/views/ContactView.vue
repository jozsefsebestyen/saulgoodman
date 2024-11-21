<template>
  <v-container>
    <v-row class="align-center">
      <v-col cols="12" md="6">
        <v-row>
          <v-col><h2>Contact Us</h2></v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-form v-model="formValid" @submit.prevent="submitForm">
              <v-text-field
                v-model="form.name"
                label="Full Name"
                :rules="[rules.required]"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.email"
                label="Email Address"
                :rules="[rules.required, rules.email]"
                required
              ></v-text-field>
              <v-text-field
                v-model="form.phone"
                label="Phone Number (+36 or 06)"
                :rules="[rules.required, rules.hungarianPhone]"
                required
              ></v-text-field>
              <v-textarea
                v-model="form.message"
                label="Message"
                :rules="[rules.required]"
                required
              ></v-textarea>
              <v-btn color="#ffcc00" type="submit" size="x-large" :disabled="!formValid" block
                >Send Message</v-btn
              >
            </v-form>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="6">
        <v-row>
          <v-col><h2>Visit Us</h2></v-col>
        </v-row>
        <v-row>
          <v-col>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2659.174487236186!2d16.43237841232071!3d48.203254946466224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d013eb8a713f1%3A0xdd5ed8493059c2f3!2sSaul%20Goodman%20Office!5e0!3m2!1sen!2sde!4v1732225023748!5m2!1sen!2sde"
              width="100%"
              height="600"
              frameborder="0"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </v-col>
        </v-row>
      </v-col>
    </v-row>

    <!-- Confirmation Message -->
    <v-alert v-if="formSubmitted" type="success" border="left" colored-border>
      <strong>Thank you for contacting us!</strong> We will get back to you shortly.
    </v-alert>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
})

const formValid = ref(false)
const formSubmitted = ref(false)

const rules = {
  required: (value) => !!value || 'This field is required.',
  email: (value) => /.+@.+\..+/.test(value) || 'Please enter a valid email.',
  hungarianPhone: (value) =>
    /^(\+36|06)\s?(20|30|70)\s?\d{3}\s?\d{4}$/.test(value) ||
    'Please enter a valid Hungarian phone number starting with +36 or 06.',
}

const submitForm = () => {
  // Simulate form submission
  formSubmitted.value = true
  console.log('Form submitted:', form.value)
}
</script>

<style scoped>
.v-card {
  padding: 20px;
}
.v-btn {
  margin-top: 20px;
}
</style>
