<template>
  <div class="mt-8">
    <div class="container mx-auto px-8">
      <!-- Start Form -->
      <form
        class="flex flex-col justify-start space-y-6"
        @submit.prevent="onSubmit"
      >
        <div class="row">
          <label class="flex flex-col" for="fullname">
            <span class="font-semibold">Full name</span>
            <input
              id="fullname"
              class="px-4 py-3 rounded-lg border border-gray-100 mt-1"
              type="text"
              placeholder="Fullname..."
              v-model="fullname"
            />
          </label>
        </div>
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
            Sign up
          </button>
          <button
            v-else
            class="py-3 text-center w-full bg-gray-800 text-white font-bold rounded-lg cursor-not-allowed"
            disabled
          >
            Loading...
          </button>
        </div>
      </form>

      <!-- Start: Error -->
      <div v-if="error" class="text-left mt-4 text-red">
        <span> {{ error.message }} </span>
      </div>
      <!-- Start Direction -->
      <div class="w-full text-center mt-6">
        <span class="font-semibold">I'm already a member.</span>
        <span class="ml-1 text-primary">
          <router-link :to="{ name: 'Login', params: {} }">Sign in</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRegister } from "@/composables/useRegister";
import { useRouter } from "vue-router";
const ROUTER = useRouter();
const { error, isPending, signup } = useRegister();
const fullname = ref("");
const email = ref("");
const password = ref("");

let onSubmit = async () => {
  await signup(email.value, password.value, fullname.value);
  if (!error.value) ROUTER.push({ name: "HomePage", params: {} });
};
</script>
