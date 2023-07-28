import { ref } from "vue";
import { auth } from "@/configs/firebase";
import { onAuthStateChanged } from "firebase/auth";

const user = ref(auth.currentUser);
const error = ref(false);
onAuthStateChanged(auth, (_user) => {
  if (_user) user.value = _user;
});
const getUser = () => {
  return { user };
};
const useUser = () => {
  return { getUser, error };
};
export { useUser };
