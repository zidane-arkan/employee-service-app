<script setup>
import { RouterLink } from "vue-router";
</script>

<template>
  <RouterLink
    :to="linkTo"
    class="w-fit rounded-full p-[14px_20px] font-semibold text-[#FFFFFF] bg-[#662FFF] text-nowrap"
  >
    {{ buttonText }}
  </RouterLink>
</template>

<script>
export default {
  name: "CreateButton",
  props: {
    linkTo: {
      type: String,
      required: true,
    },
    buttonText: {
      type: String,
      default: "Add",
    },
  },
};
</script>

<style lang="scss" scoped></style>
