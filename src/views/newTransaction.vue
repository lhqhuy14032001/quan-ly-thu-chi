<template>
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
                  >VND</span
                >
              </div>
              <div class="flex flex-col border-b border-gray-100 pb-1">
                <span class="font-semibold text-xs text-dark">Tổng tiền</span>
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
                  placeholder="Nội dung chi tiêu"
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
                  placeholder="Ghi chú"
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
              <div class="w-full flex flex-col 0 py-3">
                <div class="text-dark w-full date-picker">
                  <VueDatePicker
                    hide-input-icon
                    placeholder="Ngày chi"
                    :model-value="date"
                    @update:model-value="handleDate"
                  ></VueDatePicker>
                </div>
              </div>
            </label>
          </div>
          <!-- <div class="row">
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
          </div> -->
        </div>
      </div>
    </div>
    <div class="row mt-8">
      <button
        type="button"
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
                    v-model="location"
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
                    v-model="withPerson"
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
    </template>
    <button
      type="submit"
      class="w-full bg-primary text-white rounded-lg my-4 py-2"
    >
      Add transaction
    </button>
    <router-link
      class="block text-center mt-10"
      :to="{ name: 'HomePage', params: {} }"
      >Về trang chủ</router-link
    >
  </form>
</template>
<script setup>
import VueDatePicker from "@vuepic/vue-datepicker";
import "@vuepic/vue-datepicker/dist/main.css";
import { useUser } from "@/composables/useUser";
import { ref } from "vue";
import useCollection from "@/composables/useCollection";
import userStorage from "@/composables/useStorage";
import { useRouter } from "vue-router";

const { getUser } = useUser();
let { user } = getUser();
const { uploadFile, url } = userStorage("transactions");

const { addNewRecord, error } = useCollection("transactions");

let total = ref(0);
let category = ref("");
let date = ref(null);
let note = ref("");
let isMoreDetailsShow = ref(false);
let location = ref(null);
let withPerson = ref(null);
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
  } else {
    document.querySelector("label").classList.remove("active");
    isValid.value.state = true;
    isValid.value.message = "";
    return true;
  }
};

const handleDate = (modelData) => {
  const day = modelData.getDate();
  const month = modelData.getMonth() + 1;
  const year = modelData.getFullYear();
  date.value = `${day}/${month}/${year}`;
};
const ROUTER = useRouter();
const onSubmit = async () => {
  let validForm = validateForm();
  if (validForm) {
    if (file.value) await uploadFile(file.value);
    let transaction = {
      total: total.value,
      category: category.value,
      time: date.value,
      note: note.value ? note.value : null,
      userID: user.value.uid,
      thumnail: url.value,
      location: location.value,
      withPerson: withPerson.value,
    };
    await addNewRecord(transaction);
    if (error.value) {
      isValid.value.state = false;
      isValid.value.message =
        "Something went wrong then created transaction, Please try again !";
    } else {
      isValid.value.state = true;
      isValid.value.message = "Created successfull!!!";
      ROUTER.push({ name: "HomePage" });
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
