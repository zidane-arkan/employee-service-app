<script setup>
import { onMounted, ref } from "vue";
import { createPosition } from "../../../services/positionService";
import { getPositions } from "../../../services/positionService";
import { useRouter } from "vue-router";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import SuccessModal from "../../../components/modals/SuccessModal.vue";
import ErrorModal from "../../../components/modals/ErrorModal.vue";

const router = useRouter();

const showModal = ref(false);
const showErrorModal = ref(false);
const errMessage = ref("");

const positions = ref([]);

const form = ref({
  name: "",
  salary: 0,
});

const handlePositionSubmit = async () => {
  try {
    await createPosition({
      name: form.value.name,
      salary: form.value.salary,
    });

    showModal.value = true;

    setTimeout(() => {
      showModal.value = false;
      router.push("/admin/positions");
    }, 1000);
  } catch (error) {
    console.error("Error creating position:", error);
    errMessage.value =
      error.response?.data?.error?.message ||
      "Failed to add new position. Please Check Your Input!";
    showErrorModal.value = true;
  }
};

onMounted(async () => {
  positions.value = await getPositions();
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
      title="Add New Position"
      subtitle="Create new power for your division"
    />
    <form
      @submit.prevent="handlePositionSubmit"
      class="flex flex-col w-[600px] rounded-[30px] p-[30px] gap-[40px] bg-[#F8FAFB]"
    >
      <!-- FULLNAME INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="name" class="font-semibold">Position Name</label>
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
            placeholder="Write your new position"
            required
          />
        </div>
      </div>
      <!-- FULLNAME INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="name" class="font-semibold">Salary (IDR)</label>
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
            placeholder="How much the salary"
            required
          />
        </div>
      </div>

      <div class="flex items-center gap-[14px]">
        <RouterLink
          to="/admin/positions"
          class="w-full rounded-full border border-[#060A23] p-[14px_20px] text-center font-semibold text-nowrap"
        >
          Cancel
        </RouterLink>
        <button
          type="submit"
          class="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap cursor-pointer"
        >
          Add Now
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
