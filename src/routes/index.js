import { createRouter, createWebHistory } from "vue-router";

import {
  HomePage,
  Register,
  Login,
  Profile,
  Logout,
  Report,
  Budget,
  newTransaction,
} from "@/routes/importComponent";

import { requireAuth, preventAccessToLogin } from "./middlewares";

const routes = [
  {
    path: "/",
    name: "HomePage",
    meta: {
      text: "Le Hoang Quoc Huy",
      leading: true,
      isShowNavigationBottom: true,
    },
    component: HomePage,
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
    },
    component: Register,
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: Login,
    beforeEnter: preventAccessToLogin,
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowNavigationBottom: true,
    },
    component: Profile,
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: Logout,
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      isShowNavigationBottom: true,
    },
    component: Report,
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      isShowNavigationBottom: true,
    },
    component: Budget,
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New transaction",
      leading: false,
      isShowNavigationBottom: false,
    },
    component: newTransaction,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
