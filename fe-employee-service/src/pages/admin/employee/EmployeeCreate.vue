<script setup>
import { onMounted, ref } from "vue";
import { createEmployee } from "../../../services/employeeService";
import { getDivisions } from "../../../services/divisionService";
import { getPositions } from "../../../services/positionService";
import { useRouter } from "vue-router";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import SuccessModal from "../../../components/modals/SuccessModal.vue";
import ErrorModal from "../../../components/modals/ErrorModal.vue";

const router = useRouter();

const showModal = ref(false);
const showErrorModal = ref(false);
const errMessage = ref("");

const divisions = ref([]);
const positions = ref([]);

const form = ref({
  name: "",
  division: null,
  position: null,
});

const handleEmployeeSubmit = async () => {
  try {
    await createEmployee({
      name: form.value.name,
      position: form.value.position,
      division: form.value.division,
    });

    showModal.value = true;

    setTimeout(() => {
      showModal.value = false;
      router.push("/admin/employees");
    }, 1000);
  } catch (error) {
    console.error("Error creating employee:", error);
    errMessage.value =
      error.response?.data?.error?.message ||
      "Failed to add new employee. Please Check Your Input!";
    showErrorModal.value = true;
  }
};

onMounted(async () => {
  divisions.value = await getDivisions();
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

    <PrimaryHeader title="Add New Employee" subtitle="Create new future for company" />
    <form
      @submit.prevent="handleEmployeeSubmit"
      class="flex flex-col w-[600px] rounded-[30px] p-[30px] gap-[40px] bg-[#F8FAFB]"
    >
      <!-- FULLNAME INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="name" class="font-semibold">Full Name</label>
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
            placeholder="Write your name"
            required
          />
        </div>
      </div>
      <!-- DIVISION INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="division" class="font-semibold">Select Division</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/bill-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <select
            v-model="form.division"
            name="division"
            id="division"
            class="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
          >
            <option
              v-for="division in divisions"
              :key="division.id"
              :value="division.documentId"
            >
              {{ division.name }}
            </option>
          </select>
          <img
            src="../../../assets/images/icons/arrow-down.svg"
            class="w-6 h-6"
            alt="icon"
          />
        </div>
      </div>
      <!-- POSITION INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="position" class="font-semibold">Select Position</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/bill-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <select
            v-model="form.position"
            name="position"
            id="position"
            class="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
          >
            <option
              v-for="position in positions"
              :key="position.id"
              :value="position.documentId"
            >
              {{ position.name }}
            </option>
          </select>
          <img
            src="../../../assets/images/icons/arrow-down.svg"
            class="w-6 h-6"
            alt="icon"
          />
        </div>
      </div>

      <div class="flex items-center gap-[14px]">
        <RouterLink
          to="/admin/employees"
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
