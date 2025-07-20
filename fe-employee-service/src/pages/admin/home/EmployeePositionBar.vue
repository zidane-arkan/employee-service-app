<template>
  <div class="relative w-full h-[400px]">
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { getEmployeeCountByPosition } from "../../../services/chartService";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: "Jumlah Karyawan",
      data: [],
      backgroundColor: "#662FFF",
      borderRadius: 6,
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y", // Horizontal bar
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: "Distribusi Karyawan per Posisi",
    },
  },
};

onMounted(async () => {
  const data = await getEmployeeCountByPosition();

  chartData.value = {
    labels: Object.keys(data),
    datasets: [
      {
        label: "Jumlah Karyawan",
        data: Object.values(data),
        backgroundColor: "#662FFF",
        borderRadius: 6,
      },
    ],
  };
});
</script>
