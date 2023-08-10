<template>
  <div class="row mt-8">
    <div class="container mx-auto px-8">
      <div class="row">
        <div class="row font-semibold text-center mb-5">
          <p class="text-sm text-gray-400 font-normal">Total spend</p>
          <p class="font-normal text-4xl flex justify-center">
            {{ Intl.NumberFormat("en-DE").format(transaction.total)
            }}<span class="text-sm items-start">đ</span>
          </p>
        </div>
        <div class="flex justify-between text-lg border-b py-2">
          <p class="text-gray-400">Nội dung</p>
          <p>{{ transaction.category }}</p>
        </div>
        <div class="flex justify-between text-lg border-b py-2">
          <p class="text-gray-400">Ghi chú</p>
          <p>{{ transaction.note }}</p>
        </div>
        <div class="flex justify-between text-lg border-b py-2">
          <p class="text-gray-400">Thời gian</p>
          <p>{{ transaction.time }}</p>
        </div>
        <div class="flex justify-between text-lg border-b py-2">
          <p class="text-gray-400">Địa điểm</p>
          <p>
            {{
              !transaction.location
                ? transaction.location
                : "Không địa điểm cụ thể"
            }}
          </p>
        </div>
        <div class="flex flex-col text-lg py-2">
          <p class="text-gray-400">Hình Ảnh</p>
          <div class="w-full h-10">
            <img
              :src="
                transaction.thumnail ? transaction.thumnail : 'Không có ảnh'
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
import useCollection from "@/composables/useCollection";
import { ref } from "vue";
const ROUTE = useRoute();
let id = ROUTE.params.id;
let transaction = ref({});
const { getTransactionByID } = useCollection("transactions");
getTransactionByID(id).then((trans) => (transaction.value = trans));
</script>
