<template>
  <h1>{{ title }}</h1>
  <button @click="onChangeTitle">Change title</button>
  <h1>Count: {{ count }}</h1>
  <button @click="onIncreaseNumber">Increase</button>
  <input type="text" v-model="searchText" />
  <div>
    <ul>
      <li v-for="(customer, index) in cusFill" :key="index">
        {{ customer }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from "vue";
import { fireStoreCore } from "@/configs/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

let title = ref("Home Page");
const onChangeTitle = () => {
  title.value = "Le Hoang Quoc Huy";
};

// searching
let searchText = ref("");
let customers = reactive(["Customer 1", "Something 2", "LHQH 3"]);
const cusFill = computed(() =>
  customers
    .map((customer) => (customer = customer.toLowerCase()))
    .filter((customer) => customer.includes(searchText.value))
);

async function fetchTransaction() {
  let transactionCol = await collection(fireStoreCore, "transactions");
  let transactionDocs = await getDocs(transactionCol);
  let allTransactions = transactionDocs.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    };
  });
  return allTransactions;
}
fetchTransaction();
</script>
