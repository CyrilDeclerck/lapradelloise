<script setup lang="ts">
import { ref } from "vue";
import {team} from '@/data/CustomComponents';
</script>
<template>
  <div>
    <div class="team-component mini-spacer" id="team">
      <v-container>
        <!-- -----------------------------------------------
            Start Team Text
        ----------------------------------------------- -->
        <v-row justify="center">
          <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
              <h2 class="ui-title font-weight-bold">
                MEMBRES DE L'ASSOCIATION
              </h2>
            </div>
          </v-col>
        </v-row>

        <!-- -----------------------------------------------
            End Team Text
        ----------------------------------------------- -->
        <!-- -----------------------------------------------
            Start Team
        ----------------------------------------------- -->
        <v-row justify="center" class="mt-13">
          <v-col cols="12" md="3" sm="6" v-for="card in team" :key="card.title">
            <v-card elevation="0" class="team-card mb-7">
              <div class="social-overlay overflow-hidden">
                <v-avatar size="180">
                  <v-img :src="`/images/team/${card.img}`" :alt="card.img" cover class="img-fluid"/>
                </v-avatar>
              </div>
              <div>
                <h5 class="team-title font-weight-medium font-18 mt-5 font-oswald">
                  {{ card.title }}
                </h5>
                <p class="team-subtitle text-muted mb-5">{{ card.subtitle }}</p>
              </div>
              <p class="text-muted">{{ card.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
        <!-- -----------------------------------------------
            End Team
        ----------------------------------------------- -->
      </v-container>
    </div>
  </div>
</template>
