<template>
  <!-- Start: Info -->
  <div class="row">
    <div class="container mx-auto p-8">
      <div class="text-center">
        <div class="w-24 h-24 rounded-full overflow-hidden mx-auto">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/439/863/original/vector-users-icon.jpg"
            alt="Profile_img"
            size="xs"
            class="w-full h-auto object-cover"
          />
        </div>
        <div v-if="user" class="text-bold text-primary text-2xl mt-3">
          {{ user.displayName }}
        </div>
        <div v-if="user" class="text-semibold text-gray-400 mt-1">
          {{ user.email }}
        </div>
      </div>
    </div>
  </div>
  <!-- Start: Menu -->
  <div class="row">
    <div class="container mx-auto px-8">
      <div class="grid grid-cols-1">
        <div class="cols-span-1">
          <h3 class="font-bold text-primary text-xl mb-2">General</h3>
        </div>
        <div class="cols-span-1">
          <ul>
            <li
              class="text-dark last:text-red"
              v-for="item in profileOption"
              :key="item.name"
            >
              <router-link
                :to="item.route"
                class="flex justify-between items-center py-3"
              >
                <div class="flex items-center text-left">
                  <i :class="item.icon" class="t2ico text-2xl"></i>
                  <h5 class="font-semibold ml-3">{{ item.name }}</h5>
                </div>
                <div class="text-right">
                  <i class="t2ico t2ico-arrow-right text-2xl"></i>
                </div>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import { PROFILE_OPTIONS } from "@/constans";
import { useUser } from "../composables/useUser";

const profileOption = reactive(PROFILE_OPTIONS);
const { getUser } = useUser();
const { user } = getUser();
</script>
