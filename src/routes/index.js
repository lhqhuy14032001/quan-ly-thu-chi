import { createRouter, createWebHistory } from "vue-router";

const DetailPage = () => import("@/components/views/DetailsPage");
const HomePage = () => import("@/components/views/HomePage");
const Transactions = () => import("@/components/views/TransactionsPage");
const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage,
  },
  {
    path: "/transaction",
    name: "Transactions",
    meta: {
      layout: "auth",
    },
    component: Transactions,
  },
  {
    path: "/transaction/:id",
    name: "DetailTransaction",
    component: DetailPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
