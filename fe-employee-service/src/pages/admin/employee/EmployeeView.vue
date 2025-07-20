<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { getEmployees } from "../../../services/employeeService";
import { deleteEmployee } from "../../../services/employeeService";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import CreateButton from "../../../components/buttons/CreateButton.vue";
import EditButton from "../../../components/buttons/EditButton.vue";
import DeleteModal from "../../../components/DeleteModal.vue";

const employees = ref([]);
const showModal = ref(false);
const selectedId = ref(null);

const fetchEmployees = async () => {
  employees.value = await getEmployees();
};

const confirmDelete = async (id) => {
  await deleteEmployee(id);
  showModal.value = false;
  selectedId.value = null;
  await fetchEmployees();
};

const cancelDelete = () => {
  showModal.value = false;
  selectedId.value = null;
};

const openDeleteModal = (id) => {
  selectedId.value = id;
  showModal.value = true;
};

onMounted(async () => {
  employees.value = await getEmployees();
});
</script>

<template>
  <div>
    <DeleteModal
      :visible="showModal"
      :delete-id="selectedId"
      @confirm="confirmDelete"
      @cancel="cancelDelete"
    />
    <PrimaryHeader title="Manage Employees" subtitle="Keep your employees happy">
      <CreateButton linkTo="employees/create" buttonText="Add New Employee" />
    </PrimaryHeader>
    <section
      id="EmployeeList"
      class="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
      <!-- EMPLOYEE CARD-->
      <div
        v-for="employee in employees"
        :key="employee.id"
        class="card flex items-center gap-5"
      >
        <div class="relative rounded-[20px] bg-blue-500 flex shrink-0 w-20 h-20">
          <div class="overflow-hidden">
            <div class="w-full h-full object-cover" />
          </div>
        </div>
        <div class="w-full">
          <RouterLink
            :to="`employees/detail/?id=${employee.documentId}`"
            class="font-bold text-xl leading-[30px] line-clamp-1 transition-all duration-300 hover:text-[#662FFF]"
          >
            {{ employee.name }}
          </RouterLink>
          <div class="flex items-center gap-5">
            <div class="flex items-center gap-[6px] mt-[6px]">
              <img
                src="../../../assets/images/icons/note-favorite-purple.svg"
                class="w-5 h-5"
                alt="icon"
              />
              <p id="division" class="text-[#838C9D]">{{ employee.division.name }}</p>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-center gap-3">
          <EditButton
            :linkTo="`employees/edit/?id=${employee.documentId}`"
            buttonText="Edit Employee"
          />
          <button
            @click="openDeleteModal(employee.documentId)"
            class="w-fit rounded-full p-[14px_20px] bg-[#FF435A] font-semibold text-white text-nowrap cursor-pointer"
          >
            Delete
          </button>
        </div>
      </div>
      <!-- PAGINATION -->
      <div id="Pagination" class="flex items-center gap-3">
        <button
          type="button"
          class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white"
        >
          <span class="font-semibold text-sm leading-[21px]">1</span>
        </button>
        <button
          type="button"
          class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
        >
          <span class="font-semibold text-sm leading-[21px]">2</span>
        </button>
        <button
          type="button"
          class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 border border-[#060A23]"
        >
          <span class="font-semibold text-sm leading-[21px]">3</span>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
