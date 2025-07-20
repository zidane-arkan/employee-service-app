<script setup>
import { onMounted, ref, computed } from "vue";
import { useRoute } from "vue-router";
import { getEmployeeById } from "../../../services/employeeService";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import EditButton from "../../../components/buttons/EditButton.vue";

const route = useRoute();
const employee = ref(null);

const editLink = computed(() => {
  if (employee.value) {
    return `/admin/employees/edit/?id=${employee.value.documentId}`;
  }
  return "";
});

onMounted(async () => {
  const id = route.query.id;
  employee.value = await getEmployeeById(id);
  console.log(employee.value);
});
</script>

<template>
  <div>
    <PrimaryHeader title="Detail Employee" subtitle="See a part of your company">
      <EditButton :linkTo="editLink" buttonText="Edit Employee" />
    </PrimaryHeader>
    <div
      v-if="employee"
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
            type="text"
            name="name"
            id="name"
            :value="employee.name"
            class="appearance-none outline-none w-full py-3 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            placeholder="Write your name"
            disabled
          />
        </div>
      </div>
      <!-- DIVISION INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="division" class="font-semibold">Current Division</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/bill-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <select
            name="division"
            id="division"
            class="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            disabled
          >
            <option :value="employee.division.name" default>
              {{ employee.division.name }}
            </option>
          </select>
        </div>
      </div>
      <!-- POSITION INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="position" class="font-semibold">Current Position</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/bill-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <select
            name="position"
            id="position"
            class="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            disabled
          >
            <option :value="employee.position.name" default>
              {{ employee.position.name }}
            </option>
          </select>
        </div>
      </div>
      <!-- SALARY INPUT -->
      <div class="flex flex-col gap-[10px]">
        <label for="salary" class="font-semibold">Current Salary</label>
        <div
          class="flex items-center w-full rounded-full border border-[#CFDBEF] gap-3 px-5 transition-all duration-300 focus-within:ring-2 focus-within:ring-[#662FFF]"
        >
          <img
            src="../../../assets/images/icons/bill-black.svg"
            class="w-6 h-6"
            alt="icon"
          />
          <select
            name="salary"
            id="salary"
            class="appearance-none outline-none w-full py-3 px-2 -mx-2 font-semibold placeholder:font-normal placeholder:text-[#838C9D] !bg-transparent"
            disabled
          >
            <option :value="employee.position.salary" default>
              {{ employee.position.salary }}
            </option>
          </select>
        </div>
      </div>
      <div class="flex items-center gap-[14px]">
        <RouterLink
          to="/admin/employees"
          class="w-full rounded-full border border-[#060A23] p-[14px_20px] text-center font-semibold text-nowrap"
        >
          Cancel
        </RouterLink>
        <!-- <button
          type="submit"
          class="w-full rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
        >
          Add Now
        </button> -->
      </div>
    </div>
    <div v-else>loading...</div>
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
