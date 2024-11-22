<template>
  <v-container>
    <!-- Section Heading -->
    <v-row justify="center" class="mb-8">
      <v-col cols="12" md="8" class="text-center">
        <div>
          Whatever your legal problem, we’ve got you covered. From slipping out of sticky situations
          to ironing out ironclad contracts, Saul Goodman is your one-stop legal shop.
        </div>
      </v-col>
    </v-row>

    <!-- Services Cards -->
    <v-row justify="center" align="stretch" dense>
      <!-- Service 1 -->
      <v-col cols="12" sm="6" md="4" class="d-flex pa-2">
        <v-card class="w-100 pa-4" outlined>
          <v-icon color="red" class="mb-4" size="64">mdi-gavel</v-icon>
          <h3 class="font-weight-bold mb-2">Courtroom Showdowns</h3>
          <div>
            Got a lawsuit? Let Saul steal the show while you sit back and relax. Drama guaranteed.
            Justice? Probably.
          </div>
        </v-card>
      </v-col>

      <!-- Service 2 -->
      <v-col cols="12" sm="6" md="4" class="d-flex pa-2">
        <v-card class="w-100 pa-4" outlined>
          <v-icon color="blue" class="mb-4" size="64">mdi-car</v-icon>
          <h3 class="font-weight-bold mb-2">Traffic Ticket Wizardry</h3>
          <div>
            Speeding? Parking? Driving through someone’s yard? Saul’s got a “legal loophole” for
            that.
          </div>
        </v-card>
      </v-col>

      <!-- Service 3 -->
      <v-col cols="12" sm="6" md="4" class="d-flex pa-2">
        <v-card class="w-100 pa-4" outlined>
          <v-icon color="green" class="mb-4" size="64">mdi-handshake</v-icon>
          <h3 class="font-weight-bold mb-2">Shady Deals Made Simple</h3>
          <div>
            Contract disputes or questionable agreements? Saul will make it legal-ish in no time.
          </div>
        </v-card>
      </v-col>

      <!-- Service 4 -->
      <v-col cols="12" sm="6" md="4" class="d-flex pa-2">
        <v-card class="w-100 pa-4" outlined>
          <v-icon color="orange" class="mb-4" size="64">mdi-lock-open-check</v-icon>
          <h3 class="font-weight-bold mb-2">Alibi Architect</h3>
          <div>
            Need to be somewhere you weren’t? Saul can construct an airtight alibi while you plan
            your next move.
          </div>
        </v-card>
      </v-col>

      <!-- Service 5 -->
      <v-col cols="12" sm="6" md="4" class="d-flex pa-2">
        <v-card class="w-100 pa-4" outlined>
          <v-icon color="purple" class="mb-4" size="64">mdi-cash-multiple</v-icon>
          <h3 class="font-weight-bold mb-2">Money Mishap Fixer</h3>
          <div>Embezzled funds or tax troubles? Saul can make those numbers look... creative.</div>
        </v-card>
      </v-col>

      <!-- Service 6 -->
      <v-col cols="12" sm="6" md="4" class="d-flex pa-2">
        <v-card class="w-100 pa-4" outlined>
          <v-icon color="brown" class="mb-4" size="64">mdi-account-off</v-icon>
          <h3 class="font-weight-bold mb-2">Identity Makeovers</h3>
          <div>
            Need a new name, backstory, or life? Saul’s your guy—just don’t ask too many questions.
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
h2 {
  color: #003366;
}

v-icon {
  align-self: center;
}
</style>
