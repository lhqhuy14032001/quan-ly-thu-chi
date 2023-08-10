<template>
  <div v-if="!isPending" class="row mt-8">
    <div class="container mx-auto px-8">
      <div class="row font-semibold text-center">
        <p class="text-sm text-gray-400 font-normal">Total spend</p>
        <p class="font-normal text-4xl flex justify-center">
          {{ Intl.NumberFormat("en-DE").format(totalSpend)
          }}<span class="text-sm items-start">đ</span>
        </p>
      </div>
      <router-link
        class="row my-5 flex justify-between text-lg border-b"
        v-for="transaction in transactionsList"
        :key="transaction.id"
        :to="{ name: 'TransactionDetail', params: { id: transaction.id } }"
      >
        <div class="flex flex-col">
          <span> {{ transaction.data.category }}</span>
          <span class="text-sm text-gray-400">
            {{ transaction.data.time }}</span
          >
        </div>
        <div class="flex">
          {{ transaction.data.total }}<span class="text-sm items-start">đ</span>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import useCollection from "@/composables/useCollection";
import { ref } from "vue";
const { getTransactionsList } = useCollection("transactions");
let transactionsList = ref([]);
const totalSpend = ref(0);
getTransactionsList().then((transactions) => {
  transactionsList.value = transactions;
  transactions.map((transaction) => {
    totalSpend.value += parseInt(transaction.data.total);
  });
});
</script>
