<script setup lang="ts">
import { ref } from "vue";
import {portfolio} from '@/data/CustomComponents'
</script>
<template>
  <div>
    <div class="portfolio-component mini-spacer bg-yellow">
      <v-container>
        <!-- -----------------------------------------------
            Start Portfolio Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                SPONSORING
              </h2>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Portfolio Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Portfolio
        ----------------------------------------------- -->
        <v-row class="mt-8" align="center" justify="center">
          <v-col
            cols="12"
            md="4"
            sm="6"
            v-for="card in portfolio"
            :key="card.title"
          >
            <v-card class="portfolio-card overflow-hidden card-shadow">
              <div class="portfolio-img">
                <v-img :src="`/images/portfolio/${card.img}`" class="img-fluid" max-height="200" cover :alt="card.img" />
              </div>
              <v-card-text class="pa-5">
                <h5 class="font-weight-medium font-18">{{ card.title }}</h5>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
