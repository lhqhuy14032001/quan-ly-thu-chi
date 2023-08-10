<template>
  <footer
    id="footer"
    class="fixed w-full bottom-0 left-0 pt-4 bg-white p-b-safe-4"
  >
    <div class="container mx-auto px-8 h-full">
      <ul class="flex justify-around h-full items-center">
        <li v-for="navItem in navItems" :key="navItem.name">
          <router-link :to="navItem.route">
            <i :class="navItem.icon" class="t2ico text-2xl"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <div
      data-circle
      class="absolute top-0 left-1/2 transform -translate-x-1/2"
    ></div>
    <div
      @click="goToRoute"
      data-circle-inset
      class="absolute flex items-center justify-center bg-primary text-white w-12 h-12 rounded-full cursor-pointer -top-6 left-1/2 transform -translate-x-1/2"
    >
      <i class="t2ico t2ico-plus"></i>
    </div>
  </footer>
</template>
<script setup>
import { reactive } from "vue";
import { NAV_ITEMS } from "@/constans";
import { useRouter } from "vue-router";
const ROUTER = useRouter();
const navItems = reactive(NAV_ITEMS);
const goToRoute = () => {
  ROUTER.push({ name: "NewTransaction", params: {} });
};
</script>
<style lang="css" scoped>
footer#footer > div[data-circle],
footer#footer > div[data-circle] > div[data-circle-inset] {
}
footer#footer > div[data-circle] > div[data-circle-inset] {
  @apply bg-dark-light;
  width: 60px;
  height: 30px;
  border-bottom-left-radius: 60px;
  border-bottom-right-radius: 60px;
}
footer#footer > div[data-circle] > div[data-circle-inset] {
  content: "\e921";
  font-family: "t2ico";
}
/* footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
} */
</style>
