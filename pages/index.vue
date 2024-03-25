<script setup lang="ts">
import { ref } from 'vue';
import MainBanner from '@/components/section/banner/MainBanner.vue';
import CommingSoon from '@/components/shared/coming-soon/ComingSoon.vue';
import AllCustomComponents from '@/components/section/AllCustomComponents.vue';
const story = await useAsyncStoryblok('home', { version: 'draft' })
</script>

<template>
  <div>
    <!-------Banner-------->
    <MainBanner />
    <StoryblokComponent v-if="story" :blok="story.content" />
    <!-------All Components-------->
    <AllCustomComponents/>
  </div>
</template>
