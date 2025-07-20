<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import {
  getPositionById,
  updatePosition,
  getPositions,
} from "../../../services/positionService";

import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import SuccessModal from "../../../components/modals/SuccessModal.vue";
import ErrorModal from "../../../components/modals/ErrorModal.vue";

const route = useRoute();
const router = useRouter();

const id = ref(null);
const position = ref(null);
const positions = ref([]);

const showModal = ref(false);
const showErrorModal = ref(false);
const errMessage = ref("");

const form = ref({
  name: "",
  salary: 0,
});

const handleUpdate = async () => {
  try {
    await updatePosition(id.value, {
      name: form.value.name,
      salary: form.value.salary,
    });

    showModal.value = true;

    setTimeout(() => {
      showModal.value = false;
      router.push("/admin/positions");
    }, 1000);
  } catch (error) {
    console.error("Error Updating position:", error);
    errMessage.value =
      error.response?.data?.error?.message ||
      "Failed to update position. Please Check Your Input!";
    showErrorModal.value = true;
  }
};

onMounted(async () => {
  id.value = route.query.id;
  position.value = await getPositionById(id.value);
  if (position.value) {
    form.value.name = position.value.name;
    form.value.salary = position.value.salary;
  }
  positions.value = await getPositions();
  console.log(position.value);
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
    <PrimaryHeader
      title="Edit Position"
      subtitle="Upgrade the home talent of your company"
    />
    <form
      v-if="position"
      @submit.prevent="handleUpdate"
      class="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
      <div class="flex flex-col gap-[10px]">
        <label for="name" class="font-semibold">Edit Position Name</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/note-favorite-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <input
            v-model="form.name"
            type="text"
            name="name"
            id="name"
            class="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            placeholder="Edit your position name"
          />
        </div>
      </div>
      <div class="flex flex-col gap-[10px]">
        <label for="name" class="font-semibold">Edit Salary</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/note-favorite-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <input
            v-model="form.salary"
            type="number"
            name="salary"
            id="salary"
            class="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            placeholder="Edit your salary"
          />
        </div>
      </div>

      <div class="flex items-center gap-[14px]">
        <RouterLink
          to="/admin/positions"
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
