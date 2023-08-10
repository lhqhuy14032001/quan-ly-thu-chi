import { ref } from "vue";
import { storage } from "@/configs/firebase";
import * as firebaseStorage from "firebase/storage";
import { useUser } from "./useUser";
const { getUser } = useUser();
const { user } = getUser();
const useStorage = (name) => {
  const error = ref(null);
  const filePath = ref("");
  const url = ref("");
  //   const url = ref(null);
  const uploadFile = async (file) => {
    filePath.value = `${name}/${user.value.uid}/${file.name}`;
    const fileRef = firebaseStorage.ref(storage, filePath.value);
    try {
      const response = await firebaseStorage.uploadBytes(fileRef, file);
      url.value = await firebaseStorage.getDownloadURL(fileRef);
      return { url, response };
    } catch (error) {
      console.error(error);
      error.value = error;
    }
  };
  return { error, uploadFile, url };
};
export default useStorage;
