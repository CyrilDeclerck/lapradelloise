<script setup lang="ts">
const title = ref("La pradelloise - 1ere édition - Le 1er octobre 2023, À PRADELLES");
useHead({
  meta: [{ content: title }],
  titleTemplate: (titleChunk) => {
    return titleChunk
      ? `${titleChunk} - La pradelloise`
      : "La pradelloise - 1ere édition - Le 1er octobre 2023, À PRADELLES";
  },
});
useSeoMeta({
  description: "Nous aimerions faire découvrir notre petit village et ses beaux chemins de campagne. Pradelles étant situé entre Bailleul et Hazebrouck."
})
</script>

<template>
  <v-app dark>
    <v-main>
      <LcHeader/>
      <slot />
    </v-main>
    <LcFooter/>
  </v-app>
</template>
