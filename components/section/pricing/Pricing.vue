<script setup lang="ts">
import { ref } from "vue";
import {pricePlan} from '@/data/CustomComponents';
</script>
<template>
  <div>
    <div class="pricing-component mini-spacer">
      <v-container>
        <!-- -----------------------------------------------
            Start Pricing Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="section-title font-weight-medium">
                3 EVENEMENTS EN 1
              </h2>
              <p class="">Les différents parcours traverseront les communes de PRADELLES, BORRE, CAESTRE, STRAZEELE et SEC-BOIS.</p>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Pricing Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Pricing
        ----------------------------------------------- -->
        <v-row class="mt-7" justify="center">
          <v-col cols="12" md="4" sm="6" v-for="card in pricePlan" :key="card.title">
            <v-card
              outlined
              elevation="0"
              class="pricing-card overflow-hidden mb-7 border rounded-sm flex d-flex flex-column fill-height"
            >
              <div class="text-center pa-8">
                <v-img
                  :src="card.image"
                  height="100px"
                ></v-img>
                <h5 class="font-weight-regular font-18">{{card.title}}</h5>
                <div>{{}}
                  <template v-if="typeof card.price === 'object'">
                    <template v-for="(distance, index) in card.price">
                      <span class="price-text">{{distance}}</span>
                      <sup class="text-muted">{{card.unit}}</sup>
                      <span v-if="index + 1 < card.price.length" class="mr-1">OU</span>
                    </template>
                  </template>
                  <template v-else>
                    <span class="price-text">{{card.price}}</span>
                    <sup class="text-muted">{{card.unit}}</sup>
                  </template>
                </div>
                <p class="mt-9 text-muted">
                  {{card.desc}}
                </p>
              </div>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Pricing
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>

