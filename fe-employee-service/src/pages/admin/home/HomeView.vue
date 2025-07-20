<script setup>
import PrimaryHeader from "../../../components/PrimaryHeader.vue";
</script>

<template>
  <div>
    <PrimaryHeader title="Home" subtitle="Grow your company quickly" />
    <section id="Stats" class="flex rounded-[30px] p-[30px] gap-[30px] bg-[#F8FAFB]">
      <div class="grid grid-cols-2 w-[500px] gap-[30px]">
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <img
            src="../../../assets/images/icons/profile-2user-purple.svg"
            class="w-[46px] h-[46px]"
            alt="icon"
          />
          <div>
            <p class="font-extrabold text-2xl leading-[36px]">189,498</p>
            <p class="text-[#838C9D]">Total Students</p>
          </div>
        </div>
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <img
            src="../../../assets/images/icons/note-favorite-purple.svg"
            class="w-[46px] h-[46px]"
            alt="icon"
          />
          <div>
            <p class="font-extrabold text-2xl leading-[36px]">7,221</p>
            <p class="text-[#838C9D]">Total Courses</p>
          </div>
        </div>
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <img
            src="../../../assets/images/icons/video-play-purple.svg"
            class="w-[46px] h-[46px]"
            alt="icon"
          />
          <div>
            <p class="font-extrabold text-2xl leading-[36px]">893,891</p>
            <p class="text-[#838C9D]">Video Content</p>
          </div>
        </div>
        <div
          class="flex flex-col rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
        >
          <img
            src="../../../assets/images/icons/note-purple.svg"
            class="w-[46px] h-[46px]"
            alt="icon"
          />
          <div>
            <p class="font-extrabold text-2xl leading-[36px]">12,812</p>
            <p class="text-[#838C9D]">Text Content</p>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col flex-1 rounded-[20px] p-5 gap-5 bg-white shadow-[0_4px_4px_0_#E0E2EF]"
      >
        <div
          class="relative flex items-center justify-center shrink-0 m-auto rounded-full w-[230px] h-[230px]"
        >
          <div id="piechart" class="absolute rounded-full w-[230px] h-[230px] z-10"></div>
          <div
            class="flex justify-center items-center w-[130px] h-[130px] rounded-full bg-white z-10"
          >
            <p class="w-fit h-fit text-center font-bold text-lg leading-[27px]">
              Our<br />Rapport
            </p>
          </div>
        </div>
        <div class="flex flex-col gap-[10px]">
          <div class="flex items-center gap-3">
            <div class="w-5 h-5 rounded-full bg-[#662FFF]"></div>
            <p class="font-semibold text-sm leading-[21px]">Completed 75%</p>
          </div>
          <div class="flex items-center gap-3">
            <div class="w-5 h-5 rounded-full bg-[#C2ACFF]"></div>
            <p class="font-semibold text-sm leading-[21px]">Not Completed 25%</p>
          </div>
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

<style lang="css" scoped>
#piechart {
  background: conic-gradient(#c2acff 0% 25%, #662fff 25% 100%);
}
</style>
