<script setup lang="ts">
import { ref } from 'vue';
import WhiteTLogo from '/images/logos/white-text.png';
</script>

<template>
    <NuxtLink to="/" class="d-flex">
        <img :src="WhiteTLogo" alt="La pradelloise" width="160"/>
    </NuxtLink>
</template>
