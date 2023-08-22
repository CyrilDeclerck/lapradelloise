<script setup lang="ts">
import { ref } from 'vue';
import HeaderText from './header/HeaderText.vue';
import Navigation1 from './header/Header1.vue';
import Navigation2 from './header/Header2.vue';
import BannerText from './banner/BannerText.vue';
import BrandBanner from './banner/BrandBanner.vue';
import WorkBanner from './banner/BannerWork.vue';
import FormBannerText from './form-banner/FormBannerText.vue';
import FormBannerInput from './form-banner/FormBannerInput.vue';
import FeatureText from './features/FeatureText.vue';
import Feature1 from './features/Feature1.vue';
import Feature2 from './features/Feature2.vue';
import Feature3 from './features/Feature3.vue';
import PortfolioText from './portfolio/PortfolioText.vue';
import Portfolio from './portfolio/Portfolio.vue';
import PriceText from './pricing/PricingText.vue';
import PricingPlans from './pricing/Pricing.vue';
import TeamText from './team/TeamText.vue';
import Team from './team/Team.vue';
import TestimonialText from './testimonial/TestimonialText.vue';
import Testimonial from './testimonial/Testimonial.vue';
import Blog from './blogs/Blog.vue';
import CallActionText from './c2a/C2aText.vue';
import CallActionAsk from './c2a/C2a1.vue';
import AppsButton from './c2a/C2a2.vue';
import ContactText from './contact/ContactText.vue';
import ContactForm from './contact/Contact.vue';
</script>

<template>
  <HeaderText />
  <PricingPlans/>
  <CallActionAsk />
  <Portfolio/>
  <Team/>
</template>
