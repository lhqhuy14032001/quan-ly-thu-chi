<template>
  <navigation-header />
  <slot />
  <navigation-bottom v-if="meta.isShowNavigationBottom" />
</template>
<script setup>
import NavigationBottom from "@/components/NavigationBottom";
import NavigationHeader from "@/components/NavigationHeader";
import { computed } from "vue";
import { useRoute } from "vue-router";
const ROUTE = useRoute();
let meta = computed(() => ROUTE.meta);
</script>
