<script setup>
import { onMounted, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import { updateEmployee } from "../../../services/employeeService";
import { getEmployeeById } from "../../../services/employeeService";
import { getDivisions } from "../../../services/divisionService";
import { getPositions } from "../../../services/positionService";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import SuccessModal from "../../../components/modals/SuccessModal.vue";
import ErrorModal from "../../../components/modals/ErrorModal.vue";

const route = useRoute();
const router = useRouter();

const id = ref(null);
const employee = ref(null);
const divisions = ref([]);
const positions = ref([]);

const showModal = ref(false);
const showErrorModal = ref(false);
const errMessage = ref("");

const form = ref({
  name: "",
  division: null,
  position: null,
});

const handleUpdate = async () => {
  try {
    await updateEmployee(id.value, {
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
    console.error("Error Updating employee:", error);
    errMessage.value =
      error.response?.data?.error?.message ||
      "Failed to update employee. Please Check Your Input!";
    showErrorModal.value = true;
  }
};

onMounted(async () => {
  id.value = route.query.id;
  employee.value = await getEmployeeById(id.value);
  if (employee.value) {
    form.value.name = employee.value.name;
    form.value.division = employee.value.division
      ? employee.value.division.documentId
      : null;
    form.value.position = employee.value.position
      ? employee.value.position.documentId
      : null;
  }
  divisions.value = await getDivisions();
  positions.value = await getPositions();
  console.log(employee.value);
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
    <PrimaryHeader title="Edit Employee" subtitle="Update the talent of your employee" />
    <form
      v-if="employee"
      @submit.prevent="handleUpdate"
      class="flex flex-col w-[550px] rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
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
