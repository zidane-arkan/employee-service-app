<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <div class="relative flex flex-col flex-1 p-[10px]">
    <div
      class="absolute w-[calc(100%-20px)] min-h-[calc(100vh-20px)] h-[calc(100%-20px)] bg-[#060A23] -z-10 rounded-[20px]"
    >
      <img
        src="../../assets/images/backgrounds/background-glow.png"
        class="absolute bottom-0 transform -translate-x-1/2 left-1/2"
        alt=""
      />
    </div>
    <nav class="flex items-center justify-between p-[30px]">
      <div class="flex items-center gap-[60px]">
        <img src="../../assets/images/logos/logo.svg" class="flex shrink-0" alt="logo" />
      </div>
      <div class="flex items-center gap-3">
        <RouterLink
          to="/login"
          active-class="bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
          class="cursor-pointer flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] "
        >
          <span class="font-semibold text-white">My Dashboard</span>
        </RouterLink>

        <RouterLink
          to="/register"
          active-class="bg-[#662FFF] border-[#8661EE] shadow-[-10px_-6px_10px_0_#7F33FF_inset]"
          class="cursor-pointer flex items-center gap-3 w-fit rounded-full border p-[14px_20px] transition-all duration-300 hover:bg-[#662FFF] hover:border-[#8661EE] hover:shadow-[-10px_-6px_10px_0_#7F33FF_inset] bg-[#070B24] border-[#24283E] "
        >
          <span class="font-semibold text-white">Sign Up</span>
        </RouterLink>
      </div>
    </nav>
    <!-- CONTENT -->
    <RouterView />
  </div>
</template>

<style lang="scss" scoped></style>
