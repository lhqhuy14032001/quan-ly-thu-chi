<template>
  <header id="header" class="py-8">
    <div class="container mx-auto px-8">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <div v-if="meta.leading" class="w-10 h-10">
            <img
              class="w-full h-auto object-cover rounded-full"
              src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
              size="sm"
              alt="user's avt"
            />
          </div>
          <div class="text-2xl font-bold text-dark ml-2">{{ meta.text }}</div>
        </div>
        <div class="flex">
          <ul>
            <li><i class="t2ico t2ico-notification text-2xl"></i></li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
const ROUTE = useRoute();

let meta = computed(() => ROUTE.meta);
</script>
