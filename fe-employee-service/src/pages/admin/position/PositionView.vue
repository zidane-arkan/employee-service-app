<script setup>
import { onMounted, ref } from "vue";
import { RouterLink } from "vue-router";
import { getPositionsPage } from "../../../services/positionService";
import { deletePosition } from "../../../services/positionService";
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import CreateButton from "../../../components/buttons/CreateButton.vue";
import EditButton from "../../../components/buttons/EditButton.vue";
import DeleteModal from "../../../components/DeleteModal.vue";
import Pagination from "../../../components/Pagination.vue";

const positions = ref([]);
const showModal = ref(false);
const selectedId = ref(null);

const currentPage = ref(1);
const pageSize = 6;
const totalPages = ref(1);

const fetchPositions = async (page = 1) => {
  const res = await getPositionsPage(page, pageSize);
  positions.value = res.data;
  totalPages.value = res.meta.pagination.pageCount;
  currentPage.value = res.meta.pagination.page;
};

const confirmDelete = async (id) => {
  await deletePosition(id);
  showModal.value = false;
  selectedId.value = null;
  let pageToFetch = currentPage.value;
  if (
    positions.value.length === 1 &&
    currentPage.value > 1 &&
    totalPages.value === currentPage.value
  ) {
    pageToFetch = currentPage.value - 1;
  }
  await fetchPositions(pageToFetch);
};

const cancelDelete = () => {
  showModal.value = false;
  selectedId.value = null;
};

const openDeleteModal = (id) => {
  selectedId.value = id;
  showModal.value = true;
};

const formatCurrency = (amount) => {
  if (amount === null || amount === undefined || isNaN(amount)) {
    return "N/A";
  }
  const numericAmount = parseFloat(amount);
  if (isNaN(numericAmount)) {
    return "N/A";
  }

  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(numericAmount);
};

onMounted(async () => {
  await fetchPositions(currentPage.value);
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
      title="Manage Positions"
      subtitle="Organize your Positions in your company"
    >
      <CreateButton linkTo="positions/create" buttonText="Add New Position" />
    </PrimaryHeader>
    <section
      id="PositionsList"
      class="flex flex-col w-full rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
      <!-- POSITION CARD-->
      <div
        v-for="position in positions"
        :key="position.id"
        class="flex items-center gap-5 card"
      >
        <div class="relative rounded-[20px] bg-orange-500 flex shrink-0 w-20 h-20">
          <div class="overflow-hidden">
            <div class="object-cover w-full h-full" />
          </div>
        </div>
        <div class="w-full">
          <RouterLink
            :to="`positions/detail/?id=${position.documentId}`"
            class="font-bold text-xl leading-[30px] line-clamp-1 transition-all duration-300 hover:text-[#662FFF]"
          >
            {{ position.name }}
          </RouterLink>
          <div class="flex items-center gap-5">
            <div class="flex items-center gap-[6px] mt-[6px]">
              <img
                src="../../../assets/images/icons/note-favorite-purple.svg"
                class="w-5 h-5"
                alt="icon"
              />
              <p id="position" class="text-[#838C9D]">
                {{ formatCurrency(position.salary) || "N/A" }}
              </p>
            </div>
          </div>
        </div>
        <div class="flex items-center justify-end gap-3">
          <EditButton
            :linkTo="`positions/edit/?id=${position.documentId}`"
            buttonText="Edit Position"
          />
          <button
            @click="openDeleteModal(position.documentId)"
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
        @page-changed="fetchPositions"
      />
    </section>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
