<template>
  <header class="flex items-center justify-between gap-[30px] mb-[30px]">
    <div>
      <h1 class="font-extrabold text-[28px] leading-[42px]">{{ title }}</h1>
      <p class="text-[#838C9D] mt-[1]">{{ subtitle }}</p>
    </div>
    <!-- CHILDREN -->
    <slot></slot>
  </header>
</template>

<script>
export default {
  // 1. Define the props here
  name: "PrimaryHeader",
  props: {
    title: {
      type: String, // Expects a string value
      required: true, // This prop must be provided by the parent
    },
    subtitle: {
      type: String, // Expects a string value
      default: "Grow your company quickly", // If not provided, this default will be used
    },
  },
};
</script>

<style lang="scss" scoped></style>
