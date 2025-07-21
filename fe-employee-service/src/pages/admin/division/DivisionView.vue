<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { getDivisionsPage } from "../../../services/divisionService";
import { deleteDivision } from "../../../services/divisionService";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import CreateButton from "../../../components/buttons/CreateButton.vue";
import EditButton from "../../../components/buttons/EditButton.vue";
import DeleteModal from "../../../components/DeleteModal.vue";
import Pagination from "../../../components/Pagination.vue";

const divisions = ref([]);
const showModal = ref(false);
const selectedId = ref(null);

const currentPage = ref(1);
const pageSize = 6;
const totalPages = ref(1);

const fetchDivisions = async (page = 1) => {
  const res = await getDivisionsPage(page, pageSize);
  divisions.value = res.data;
  totalPages.value = res.meta.pagination.pageCount;
  currentPage.value = res.meta.pagination.page;
};

const confirmDelete = async (id) => {
  await deleteDivision(id);
  showModal.value = false;
  selectedId.value = null;
  let pageToFetch = currentPage.value;
  if (
    divisions.value.length === 1 &&
    currentPage.value > 1 &&
    totalPages.value === currentPage.value
  ) {
    pageToFetch = currentPage.value - 1;
  }
  await fetchDivisions(pageToFetch);
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
  await fetchDivisions(currentPage.value);
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
    <PrimaryHeader
      title="Manage Divisions"
      subtitle="Organize your divisions in your company"
    >
      <CreateButton linkTo="divisions/create" buttonText="Add New Division" />
    </PrimaryHeader>
    <section
      id="DivisionsList"
      class="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
      <!-- DIVISION CARD-->
      <div
        v-for="division in divisions"
        :key="division.id"
        class="flex items-center gap-5 card"
      >
        <div class="relative rounded-[20px] bg-indigo-500 flex shrink-0 w-20 h-20">
          <div class="overflow-hidden">
            <div class="object-cover w-full h-full" />
          </div>
        </div>
        <div class="w-full">
          <RouterLink
            :to="`divisions/detail/?id=${division.documentId}`"
            class="font-bold text-xl leading-[30px] line-clamp-1 transition-all duration-300 hover:text-[#662FFF]"
          >
            {{ division.name }}
          </RouterLink>
        </div>
        <div class="flex items-center justify-end gap-3">
          <EditButton
            :linkTo="`divisions/edit/?id=${division.documentId}`"
            buttonText="Edit Division"
          />
          <button
            @click="openDeleteModal(division.documentId)"
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
        @page-changed="fetchDivisions"
      />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
