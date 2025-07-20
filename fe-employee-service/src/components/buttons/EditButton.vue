<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink
    :to="linkTo"
    class="w-fit rounded-full border border-[#060A23] p-[14px_20px] font-semibold text-nowrap"
  >
    {{ buttonText }}
  </RouterLink>
</template>

<script>
export default {
  name: "EditButton",
  props: {
    linkTo: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Edit",
    },
  },
};
</script>

<style lang="scss" scoped></style>
