import { ref } from "vue";
import { fireStoreCore } from "@/configs/firebase";
import { setDoc, doc, collection } from "firebase/firestore";

const useCollection = (name) => {
  const error = ref(null);
  const addNewRecord = async (record) => {
    error.value = null;
    try {
      const transactionRef = collection(fireStoreCore, name);
      const response = await setDoc(doc(transactionRef), record);
      return response;
    } catch (error) {
      console.error(error);
      error.value = error;
    }
  };
  return { error, addNewRecord };
};
export default useCollection;
