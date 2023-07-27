import { createStore } from "vuex";

import transactions from "./modules/transactions";

const store = createStore({
  modules: {
    transactions: transactions,
  },
});
export default store;
