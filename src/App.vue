<template>
  <component :is="layout"> <router-view></router-view></component>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { PUBLIC_LAYOUT } from "@/constans";
const ROUTE = useRoute();
let layout = computed(() => (ROUTE.meta.layout || PUBLIC_LAYOUT) + "-layout");
</script>
<style>
@import url(../src/assets/styles/global.css);
</style>
