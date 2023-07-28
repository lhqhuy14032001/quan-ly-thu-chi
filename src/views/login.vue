<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="email">
            <span class="font-semibold">Email</span>
            <input
              id="email"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="Email..."
              autocomplete="username"
              v-model="email"
            />
          </label>
        </div>
        <div class="row">
          <label class="flex flex-col" for="password">
            <span class="font-semibold">Password</span>
            <input
              id="password"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="password"
              placeholder="Password..."
              autocomplete="current-password"
              v-model="password"
            />
          </label>
        </div>
        <div class="row">
          <button
            v-if="!isPending"
            class="py-3 text-center w-full bg-primary text-white font-bold rounded-lg"
            type="submit"
          >
            Sign in
          </button>
          <button
            v-else
            class="py-3 text-center w-full bg-gray-400 text-white font-bold rounded-lg"
            type="submit"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>
      <!-- Start: Error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span> {{ error }} </span>
      </div>
      <!-- Start Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm a new member.</span>
        <span class="ml-1 text-primary">
          <router-link :to="{ name: 'Register', params: {} }"
            >Sign up</router-link
          >
        </span>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

import { useLogin } from "@/composables/useLogin";
const ROUTER = useRouter();
const { error, isPending, login } = useLogin();
const email = ref("");
const password = ref("");
let onSubmit = async () => {
  await login(email.value, password.value);
  if (!error.value) ROUTER.push({ name: "Profile", params: {} });
};
</script>
