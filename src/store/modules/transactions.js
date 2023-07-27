const actions = {
  fetchAllTransactions: async ({ commit }) => {
    try {
      const response = await fetch("http://localhost:3000/transactions");
      if (!response.ok) throw new Error("Something went wrong !!!");
      let transactions = await response.json();
      commit("fetchAllTransactions", {
        transactions: transactions,
        errorMessage: null,
      });
    } catch (error) {
      commit("fetchAllTransactions", {
        transactions: [],
        errorMessage: error,
      });
    }
  },
  fetchDetailTransaction: async ({ commit }, id) => {
    try {
      let response = await fetch("http://localhost:3000/transactionss/" + id);
      if (!response.ok) throw new Error("Something went wrong");
      let transaction = await response.json();
      commit("fetchDetailTransaction", {
        transaction: transaction,
        errorMessage: null,
      });
    } catch (error) {
      commit("fetchDetailTransaction", {
        transaction: null,
        errorMessage: error,
      });
    }
  },
};
const mutations = {
  fetchAllTransactions(state, { transactions, errorMessage }) {
    state.allTransactions.transactions = transactions;
    state.allTransactions.errorMessage = errorMessage;
  },
  fetchDetailTransaction: (state, { transaction, errorMessage }) => {
    state.transactionDetail.transaction = transaction;
    state.transactionDetail.errorMessage = errorMessage;
  },
};
const state = {
  allTransactions: {
    errorMessage: null,
    transactions: [],
  },
  transactionDetail: {
    transaction: null,
    errorMessage: null,
  },
};
export default {
  actions,
  mutations,
  state,
};
