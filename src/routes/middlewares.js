import { auth } from "@/configs/firebase";
import { ref } from "vue";

const requireAuth = (to, from, next) => {
  const user = ref(auth.currentUser);
  if (user.value) next();
  else next({ name: "Login", params: {} });
};

const preventAccessToLogin = (to, from, next) => {
  const user = ref(auth.currentUser);
  if (!user.value) next();
  else next({ name: "Profile", params: {} });
};
export { requireAuth, preventAccessToLogin };
