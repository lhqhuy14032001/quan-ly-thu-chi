import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { signOut } from "firebase/auth";

const error = ref(null);
const logout = async () => {
  error.value = null;
  try {
    let response = await signOut(auth);
    return response;
  } catch (err) {
    error.value = err;
    console.error(err);
  }
};
const useLogout = () => {
  return { error, logout };
};
export { useLogout };
