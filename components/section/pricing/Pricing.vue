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
              <h2 class="ui-title font-weight-bold text-uppercase mt-0">
                3 évènements en 1
              </h2>
              <p class="">Les différents parcours traverseront les communes de<br/> PRADELLES, BORRE, CAESTRE et STRAZEELE</p>
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
              <div class="text-center pa-8 d-flex flex-column fill-height">
                <v-img
                  :src="card.image"
                  :alt="card.desc"
                  max-height="100px"
                ></v-img>
                <div class="<">
                  <template v-if="typeof card.price === 'object'">
                    <template v-for="(distance, index) in card.price">
                      <span class="price-text font-oswald text-yellow">{{distance}}</span>
                      <sup class="text-muted">{{card.unit}}</sup>
                      <span v-if="index + 1 < card.price.length" class="mr-1">OU</span>
                    </template>
                  </template>
                  <template v-else>
                    <span class="price-text font-oswald text-yellow">{{card.price}}</span>
                    <sup class="text-muted">{{card.unit}}</sup>
                  </template>
                </div>
                <h5 class="ui-title event-title font-weight-regular" v-html="card.title"></h5>
                <p v-if="card.desc" class="text-muted mt-auto">
                  {{card.desc}}
                </p>
              </div>
              <v-btn
                block
                large
                :href="card.link"
                target="_blank"
                rel="noopener, noreferrer"
                :color="card.buttoncolor"
                class="text-uppercase rounded-t-0 py-4"
              >
                  S'inscrire
              </v-btn>
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

