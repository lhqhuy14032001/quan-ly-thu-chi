import { ref } from "vue";
import { fireStoreCore } from "@/configs/firebase";
import { setDoc, doc, collection, getDocs, getDoc } from "firebase/firestore";

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
  const getTransactionsList = async () => {
    try {
      let transactionList = ref([]);
      const docRef = collection(fireStoreCore, name);
      const docSnap = await getDocs(docRef);
      docSnap.forEach((doc) => {
        transactionList.value.push({ id: doc.id, data: doc.data() });
      });
      return transactionList.value;
    } catch (error) {
      console.error(error);
    }
  };
  const getTransactionByID = async (id) => {
    try {
      let transaction = ref();
      const docRef = doc(fireStoreCore, name, id);
      const docSnap = await getDoc(docRef);
      transaction.value = docSnap.data();
      return transaction.value;
    } catch (error) {
      console.error(error);
    }
  };
  return { error, addNewRecord, getTransactionsList, getTransactionByID };
};
export default useCollection;
