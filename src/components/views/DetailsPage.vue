<template>
  <div class="wrapper" v-if="transaction">
    <h1>Chi tiết giao dịch</h1>
    <h1>
      Name:
      {{ transaction.name }}
    </h1>
    <h1>Price: {{ transaction.price }}</h1>
  </div>
  <div v-if="errorMessage">{{ errorMessage }}</div>
  <div class="load" v-else>Loading...</div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
const ROUTE = useRoute();
const STORE = useStore();
const TRANSACTIONS_MODULE = STORE.state.transactions;
let id = ROUTE.params.id;
STORE.dispatch("fetchDetailTransaction", id);
let transaction = computed(() => {
  return TRANSACTIONS_MODULE.transactionDetail.transaction;
});
let errorMessage = computed(() => {
  return TRANSACTIONS_MODULE.transactionDetail.errorMessage;
});
</script>

<style lang="css" scoped></style>
