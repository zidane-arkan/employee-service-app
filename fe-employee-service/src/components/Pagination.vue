<template>
  <div id="Pagination" class="flex items-center justify-center gap-3">
    <!-- <button
      type="button"
      class="flex shrink-0 w-9 h-9 rounded-full items-center justify-center text-center transition-all duration-300 hover:bg-[#662FFF] hover:text-white hover:border-0 bg-[#662FFF] text-white"
    >
      <span class="font-semibold text-sm leading-[21px]">1</span>
    </button> -->
    <button
      v-for="page in totalPages"
      :key="page"
      @click="$emit('page-changed', page)"
      :class="[
        'w-9 h-9 rounded-full flex items-center justify-center font-semibold text-sm',
        page === currentPage
          ? 'bg-[#662FFF] text-white'
          : 'border border-[#060A23] hover:bg-[#662FFF] hover:text-white',
      ]"
    >
      {{ page }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    currentPage: { type: Number, required: true },
    totalPages: { type: Number, required: true },
  },
};
</script>

<style lang="scss" scoped></style>
