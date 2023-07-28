<template>
  <section class="transaction-wrapper" v-if="transactions.length">
    <h1>Danh sách giao dịch</h1>
    <div class="transactions-body">
      <table>
        <thead>
          <th>Nội dung</th>
          <th>Tổng tiền</th>
        </thead>
        <tbody>
          <tr v-for="(transaction, index) in transactions" :key="index">
            <router-link
              :to="{
                name: 'DetailTransaction',
                params: { id: transaction.id },
              }"
            >
              {{ transaction.name }}</router-link
            >
            <td>{{ transaction.name }}</td>
            <td>{{ transaction.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
  <div v-else-if="errorMessage">{{ errorMessage.message }}</div>
  <div class="load" v-else>Loading...</div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const STORE = useStore();
const TRANSACTIONS_MODULE = STORE.state.transactions;
STORE.dispatch("fetchAllTransactions");
let transactions = computed(() => {
  return TRANSACTIONS_MODULE.allTransactions.transactions;
});
let errorMessage = computed(() => {
  return TRANSACTIONS_MODULE.allTransactions.errorMessage;
});
</script>

<style lang="css" scoped>
table {
  margin: 0 auto;
  min-width: 400px;
}
table tr {
  text-align: center;
  font-size: 18px;
}
</style>
