<template>
  <div class="position-absolute header">
    <v-container class="logo-container mt-2 position-absolute fill-height d-flex align-center justify-center">
      <LcLogoWhiteTextLogo />
    </v-container>
    <nav v-if="headerMenu">
      <ul class="flex space-x-8 text-lg font-bold">
        <li v-for="blok in headerMenu" :key="blok._uid">
          <NuxtLink :to="`/${blok.link.url}`" class="hover:text-[#50b0ae]">
            {{ blok.link.story.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories/config', {
  version: 'draft',
  resolve_links: 'url',
})

const headerMenu = ref(null)
headerMenu.value = data.story.content.header_menu
</script>
