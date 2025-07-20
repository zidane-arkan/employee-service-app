<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { getEmployees } from "../../../services/employeeService";
import { deleteEmployee } from "../../../services/employeeService";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import CreateButton from "../../../components/buttons/CreateButton.vue";
import EditButton from "../../../components/buttons/EditButton.vue";
import DeleteModal from "../../../components/DeleteModal.vue";
import Pagination from "../../../components/Pagination.vue";

const employees = ref([]);
const showModal = ref(false);
const selectedId = ref(null);

const currentPage = ref(1);
const pageSize = 6;
const totalPages = ref(1);

const fetchEmployees = async (page = 1) => {
  const res = await getEmployees(page, pageSize);
  employees.value = res.data;
  totalPages.value = res.meta.pagination.pageCount;
  currentPage.value = res.meta.pagination.page;
};

const confirmDelete = async (id) => {
  await deleteEmployee(id);
  showModal.value = false;
  selectedId.value = null;
  let pageToFetch = currentPage.value;
  if (
    employees.value.length === 1 &&
    currentPage.value > 1 &&
    totalPages.value === currentPage.value
  ) {
    pageToFetch = currentPage.value - 1;
  }
  await fetchEmployees(pageToFetch);
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
  await fetchEmployees(currentPage.value);
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
        class="flex items-center gap-5 card"
      >
        <div class="relative rounded-[20px] bg-blue-500 flex shrink-0 w-20 h-20">
          <div class="overflow-hidden">
            <div class="object-cover w-full h-full" />
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
        <div class="flex items-center justify-end gap-3">
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
      <Pagination
        :currentPage="currentPage"
        :totalPages="totalPages"
        @page-changed="fetchEmployees"
      />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
