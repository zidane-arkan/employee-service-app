<script setup>
import { RouterView } from "vue-router";
import Sidebar from "../../components/Sidebar.vue";
import Topbar from "../../components/Topbar.vue";
</script>

<template>
  <div class="flex min-h-screen">
    <!-- SIDEBAR -->
    <Sidebar />
    <main class="flex flex-col flex-1 gap-[30px] p-[30px] ml-[290px]">
      <!-- TOPBAR -->
      <Topbar />
      <!-- CONTENT -->
      <RouterView />
    </main>
  </div>
</template>

<style lang="scss" scoped></style>
