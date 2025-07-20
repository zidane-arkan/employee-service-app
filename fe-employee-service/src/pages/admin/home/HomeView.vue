<script setup>
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
import EmployeeDivisionDonut from "./EmployeeDivisionDonut.vue";
import EmployeePositionBar from "./EmployeePositionBar.vue";
import AverageSalaryDivisionBar from "./AverageSalaryDivisionBar.vue";
import SalaryPerPositionBar from "./SalaryPerPositionBar.vue";
</script>

<template>
  <div>
    <PrimaryHeader title="Home" subtitle="Grow your company quickly" />
    <section
      id="Stats"
      class="flex flex-col rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]"
    >
      <div class="grid grid-cols-2 w-full gap-[30px]">
        <!-- [CHART 3] -->
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <div class="flex items-center gap-2">
            <img
              src="../../../assets/images/icons/video-play-purple.svg"
              class="w-[22px] h-[22px]"
              alt="icon"
            />
            <p class="text-[#838C9D] pt-[2px]">Rata-rata Gaji per Divisi</p>
          </div>
          <AverageSalaryDivisionBar />
        </div>
        <!-- DONUT [CHART 4] -->
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <div class="flex items-center gap-2">
            <img
              src="../../../assets/images/icons/note-purple.svg"
              class="w-[22px] h-[22px]"
              alt="icon"
            />
            <p class="text-[#838C9D] pt-[2px]">Jumlah Pegawai per Divisi</p>
          </div>
          <EmployeeDivisionDonut />
        </div>
      </div>
      <div class="grid grid-cols-2 w-full gap-[30px]">
        <!-- [CHART 1] -->
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <div class="flex items-center gap-2">
            <img
              src="../../../assets/images/icons/note-purple.svg"
              class="w-[22px] h-[22px]"
              alt="icon"
            />
            <p class="text-[#838C9D] pt-[2px]">Distribusi Karyawan per Posisi</p>
          </div>
          <EmployeePositionBar />
        </div>

        <!-- [CHART 2] -->
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <div class="flex items-center gap-2">
            <img
              src="../../../assets/images/icons/note-favorite-purple.svg"
              class="w-[22px] h-[22px]"
              alt="icon"
            />
            <p class="text-[#838C9D]">Gaji per Posisi</p>
          </div>
          <SalaryPerPositionBar />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="css" scoped></style>
