<template>
  <h1>Report Page</h1>
  <p>{{ id }}</p>
</template>
<script setup>
import { useRoute } from "vue-router";
import useCollection from "@/composables/useCollection";
const ROUTE = useRoute();
let id = ROUTE.params.id;
const { getTransactionByID } = useCollection("transactions");
const transaction = getTransactionByID(id);
console.log(transaction.then((transaction) => console.log(transaction)));
</script>
