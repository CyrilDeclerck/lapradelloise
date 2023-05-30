<script setup lang="ts">
import { ref } from "vue";
const drawer = ref(null);
</script>
<template>
  <div>
    <!-- -----------------------------------------------
          Start Header
    ----------------------------------------------- -->
    <v-app-bar class="app-header pt-lg-0 pt-3" absolute flat elevate-on-scroll>
      <v-container class="fill-height">
        <v-toolbar class="d-flex align-center">
          <!-- Logo -->
          <LcLogoWhiteTextLogo />
          <!-- Desktop view Navigation -->
          <div
            class="navigation ml-auto d-lg-block"
            v-bind:class="[isActive ? 'd-block' : '']"
            @click="isActive = !isActive"
          >
            <ul class="d-flex navbar-nav">
              <li class="nav-item">
                <NuxtLink class="nav-link " to="#le-projet"> Le projet </NuxtLink>
              </li>
              <li class="nav-item">
                <NuxtLink class="nav-link" to="#team"
                  >l'équipe</NuxtLink
                >
              </li>
            </ul>
          </div>
          <v-app-bar-nav-icon
            width="30"
            class="d-md-none d-sm-flex ml-auto drawer-icon bg-black text-yellow mr-0"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>
        </v-toolbar>
      </v-container>
    </v-app-bar>
    <!-- -----------------------------------------------
          End Header
    ----------------------------------------------- -->
  </div>
  <!----sidebar menu drawer start----->
  <v-navigation-drawer v-model="drawer" temporary>
    <ul class="navbar-nav py-4 ">
      <li class="nav-item mb-3">
        <NuxtLink class="nav-link text-dark py-0 " to="#le-projet"> Le projet </NuxtLink>
      </li>
      <li class="nav-item mb-4">
        <NuxtLink class="nav-link text-dark py-0" to="#team"
          >l'équipe</NuxtLink
        >
      </li>
    </ul>
  </v-navigation-drawer>
</template>
