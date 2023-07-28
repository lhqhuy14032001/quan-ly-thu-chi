import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

const error = ref(null);
const isPending = ref(false);
async function signup(email, password, fullname) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await updateProfile(auth.currentUser, { displayName: fullname });

    if (!response) throw new Error("Could not create a new user");
    return response;
  } catch (err) {
    console.error(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}
export function useRegister() {
  return { error, isPending, signup };
}
