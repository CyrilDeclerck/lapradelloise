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
              <h2 class="ui-title font-weight-bold">
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
            class="d-none d-md-flex"
            v-for="card in portfolio"
            :key="card.title"
          >
            <v-img :src="`/images/portfolio/${card.img}`" class="img-fluid" max-height="200" :alt="card.img" />
          </v-col>
          <v-col
            cols="6"
            class="d-flex d-md-none"
            v-for="card in portfolio"
            :key="card.title"
          >
            <v-img :src="`/images/portfolio/${card.img}`" class="img-fluid" max-height="200" :alt="card.img" />
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Portfolio
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
