<template>
  <navigation-header />
  <slot />
  <navigation-bottom />
</template>
<script setup>
import NavigationBottom from "@/components/NavigationBottom";
import NavigationHeader from "@/components/NavigationHeader";
</script>
