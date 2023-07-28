<template>
  <div class="row flex">
    <div class="mx-auto items-center mt-20">Log out...</div>
  </div>
</template>
<script setup>
import { useLogout } from "../composables/useLogout";
import { useRouter } from "vue-router";
const ROUTER = useRouter();
const { logout, error } = useLogout();
const onLogout = async () => {
  await logout();
  if (!error.value) ROUTER.push({ name: "Login", params: {} });
};
onLogout();
</script>
