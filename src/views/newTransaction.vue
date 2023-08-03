<template>
  <form @submit.prevent="onSubmit">
    <!-- Start: Main form -->
    <div class="row mt-8">
      <div class="bg-white rounded-lg py-4">
        <div class="container mx-auto px-8">
          <div class="row">
            <label for="total" class="flex items-end">
              <div class="w-10 text-right leading-10 mr-4 pb-1">
                <span
                  class="inline-block px-1 text-dark border border-dark rounded text-sm font-bold"
                  >USD</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Total</span>
                <input
                  class="text-4xl text-dark w-full outline-none mt-1"
                  type="text"
                  name=""
                  id="total"
                  placeholder="0"
                  v-model="total"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="category" class="flex items-center">
              <div
                class="w-10 flex items-center flex-none text-right leading-10 mr-4"
              >
                <span
                  class="inline-block ml-auto w-8 h-8 rounded-full bg-blue-300"
                ></span>
              </div>
              <div class="w-full flex flex-col border-b border-gray-100 py-3">
                <input
                  class="text-xl text-dark w-full outline-none"
                  type="text"
                  name=""
                  id="category"
                  placeholder="Select a category"
                  v-model="category"
                />
              </div>
            </label>
          </div>
          <div class="row">
            <label for="note" class="flex items-center">
              <div
                class="w-10 flex items-center flex-none text-right leading-10 mr-4"
              >
                <span class="flex flex-none w-10">
                  <i class="t2ico t2ico-document text-2xl ml-auto"></i>
                </span>
              </div>
              <div class="w-full flex flex-col border-b border-gray-100 py-3">
                <input
                  class="text-dark w-full outline-none"
                  type="text"
                  name=""
                  id="category"
                  placeholder="Note"
                  v-model="note"
                />
              </div>
            </label>
          </div>

          <div class="row">
            <label for="time" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-calendar text-2xl ml-auto"></i>
                </span>
              </div>
              <div class="w-full flex flex-col border-b border-gray-100 py-3">
                <div class="text-dark w-full">{{ time }}</div>
              </div>
            </label>
          </div>
          <div class="row">
            <label for="wallet" class="flex items-center">
              <div class="flex-none w-10 mr-4">
                <span class="flex items-center justify-end text-dark">
                  <i class="t2ico t2ico-wallet text-2xl ml-auto"></i>
                </span>
              </div>
              <div class="flex-1 py-2">
                <div class="text-dark w-full">My Wallet</div>
              </div>
            </label>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-8">
      <button
        @click="isMoreDetailsShow = !isMoreDetailsShow"
        class="text-primary bg-white rounded-lg py-3 w-full font-semibold"
      >
        <span v-if="!isMoreDetailsShow">More Details</span>
        <span v-else class="text-red">Hidden Details</span>
      </button>
    </div>
    <!-- Start: Advanced Form -->
    <template v-if="isMoreDetailsShow">
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="location" class="flex items-center">
                <div
                  class="w-10 flex items-center flex-none text-right leading-10 mr-4"
                >
                  <span class="flex flex-none w-10">
                    <i class="t2ico t2ico-location text-2xl ml-auto"></i>
                  </span>
                </div>
                <div class="w-full flex flex-col border-b border-gray-100 py-3">
                  <input
                    class="text-dark w-full outline-none"
                    type="text"
                    name=""
                    id="location"
                    placeholder="Select a location"
                  />
                </div>
              </label>
            </div>
            <div class="row">
              <label for="withPerson" class="flex items-center">
                <div
                  class="w-10 flex items-center flex-none text-right leading-10 mr-4"
                >
                  <span class="flex flex-none w-10">
                    <i class="t2ico t2ico-users text-2xl ml-auto"></i>
                  </span>
                </div>
                <div class="w-full flex flex-col border-b border-gray-100 py-3">
                  <input
                    class="text-dark w-full outline-none"
                    type="text"
                    name=""
                    id="withPerson"
                    placeholder="With Person"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <!-- Start: Upload File -->
      <div class="row mt-8">
        <div class="bg-white rounded-lg py-4">
          <div class="container mx-auto px-8">
            <div class="row">
              <label for="uploadPhoto" class="flex items-center text-primary">
                <div
                  class="w-10 flex items-center flex-none text-right leading-10 mr-4"
                >
                  <span class="flex flex-none w-10">
                    <i class="t2ico t2ico-camera text-2xl ml-auto"></i>
                  </span>
                </div>
                <div class="w-full flex flex-col py-1">
                  <div class="w-full outline-none text-primary font-semibold">
                    Uploads Photos
                  </div>
                  <input
                    type="file"
                    id="uploadPhoto"
                    class="h-0 w-0 overflow-hidden absolute"
                    @change="onChangeFile"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div class="row px-8" v-if="errorFile">
        <div class="text-red mx-auto mt-3 font-semibold text-lg">
          {{ errorFile }}
        </div>
      </div>
    </template>
    <button
      type="submit"
      class="w-full bg-primary text-white rounded-lg my-4 py-2"
    >
      Add transaction
    </button>
  </form>
  <div class="row px-8" v-if="!isValid.state">
    <div class="text-red mx-auto mt-3 font-semibold text-lg">
      {{ isValid.message }}
    </div>
  </div>
  <div class="row px-8" v-else>
    <div class="text-green mx-auto mt-3 font-semibold text-lg">
      {{ isValid.message }}
    </div>
  </div>
</template>
<script setup>
import { useUser } from "@/composables/useUser";
import { ref } from "vue";
import useCollection from "@/composables/useCollection";
import userStorage from "@/composables/useStorage";

const { getUser } = useUser();
let { user } = getUser();
const { uploadFile, response } = userStorage("transactions");

const { addNewRecord, error } = useCollection("transactions");

let total = ref(0);
let category = ref("");
let time = ref(new Date());
let note = ref("");
let isMoreDetailsShow = ref(false);
let isValid = ref({
  state: false,
  message: "",
});
let file = ref(null);
let errorFile = ref(null);

const onChangeFile = (event) => {
  const fileSelected = event.target.files[0];
  const typeFile = ["image/png", "image/jpg"];
  if (fileSelected && typeFile.includes(fileSelected.type)) {
    file.value = fileSelected;
  } else {
    file.value = null;
    errorFile.value = "Please, select a png/jpg image";
  }
};
// simple validate
const validateForm = () => {
  if (!total.value) {
    isValid.value.state = false;
    isValid.value.message = "Total is require !!!";
    document.querySelector('label[for="total"]').classList.add("active");
    return false;
  } else if (!category.value) {
    isValid.value.state = false;
    isValid.value.message = "Category is require !!!";
    document.querySelector('label[for="category"]').classList.add("active");
    return false;
  } else if (!note.value) {
    isValid.value.state = false;
    isValid.value.message = "Note is require !!!";
    document.querySelector('label[for="note"]').classList.add("active");
    return false;
  } else {
    document.querySelector("label").classList.remove("active");
    isValid.value.state = true;
    isValid.value.message = "";
    return true;
  }
};
const onSubmit = async () => {
  let validForm = validateForm();
  if (validForm) {
    if (file.value) await uploadFile(file.value);
    console.log(response);
    let transaction = {
      total: total.value,
      category: category.value,
      time: time.value,
      note: note.value,
      userID: user.value.uid,
    };
    await addNewRecord(transaction);
    if (error.value) {
      isValid.value.state = false;
      isValid.value.message =
        "Something went wrong then created transaction, Please try again !";
    } else {
      isValid.value.state = true;
      isValid.value.message = "Created successfull!!!";
    }
  }
};
</script>
<style scoped>
.row label.active {
  @apply border;
  @apply border-red;
  @apply p-2;
}
</style>
