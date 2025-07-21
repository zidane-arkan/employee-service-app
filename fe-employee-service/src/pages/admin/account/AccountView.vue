<script setup>
import { onMounted, ref } from "vue";
import { getCurrentUser, updateUser } from "../../../services/userService";

import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import SuccessModal from "../../../components/modals/SuccessModal.vue";
import ErrorModal from "../../../components/modals/ErrorModal.vue";

const id = ref("");
const user = ref(null);

const showModal = ref(false);
const showErrorModal = ref(false);
const errMessage = ref("");

const form = ref({
  username: "",
  email: "",
});

const handleUpdate = async () => {
  try {
    await updateUser(id.value, {
      username: form.value.username,
      email: form.value.email,
    });

    showModal.value = true;
    setTimeout(() => {
      showModal.value = false;
      window.location.href = "/admin";
    }, 1000);
  } catch (error) {
    console.error("Error Updating profile:", error);
    errMessage.value =
      error.response?.data?.error?.message ||
      "Failed to update profile. Please Check Your Input!";
    showErrorModal.value = true;
  }
};

onMounted(async () => {
  user.value = await getCurrentUser();
  if (user.value) {
    id.value = user.value.id;
    form.value.username = user.value.username;
    form.value.email = user.value.email;
  }
  console.log(user.value);
});
</script>

<template>
  <div>
    <SuccessModal :visible="showModal" />
    <ErrorModal
      :visible="showErrorModal"
      :message="errMessage"
      @close="showErrorModal = false"
    />
    <PrimaryHeader title="Edit Profile" subtitle="Update the way you are" />
    <form
      v-if="user"
      @submit.prevent="handleUpdate"
      class="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
      <div class="flex flex-col gap-[10px]">
        <label for="name" class="font-semibold">Edit Username</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/note-favorite-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <input
            v-model="form.username"
            type="text"
            name="username"
            id="username"
            class="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            placeholder="Edit your username"
          />
        </div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <label for="name" class="font-semibold">Edit Email</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/note-favorite-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <input
            v-model="form.email"
            type="text"
            name="email"
            id="email"
            class="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            placeholder="Edit your email"
          />
        </div>
      </div>

      <div class="flex items-center gap-[14px]">
        <RouterLink
          to="/admin"
          class="cursor-pointer w-full rounded-full border border-[#060A23] p-[14px_20px] text-center font-semibold text-nowrap"
        >
          Cancel
        </RouterLink>
        <button
          type="submit"
          class="cursor-pointer w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
        >
          Update Now
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>
