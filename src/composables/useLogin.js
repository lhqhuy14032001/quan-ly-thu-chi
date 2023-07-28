import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const isPending = ref(false);
const error = ref(null);
const login = async (email, password) => {
  isPending.value = true;
  error.value = null;
  try {
    let response = await signInWithEmailAndPassword(auth, email, password);
    if (!response) throw new Error("Could not login!");
    return response;
  } catch (err) {
    error.value = err;
    console.error(err);
  } finally {
    isPending.value = false;
  }
};
const useLogin = () => {
  return { isPending, error, login };
};
export { useLogin };
