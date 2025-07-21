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

import { getAverageSalaryByDivision } from "../../../services/chartService";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: "Rata-rata Gaji (Rp)",
      data: [],
      backgroundColor: "#36A2EB",
      borderRadius: 6,
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
    },
    title: {
      display: false,
      text: "Rata-rata Gaji per Divisi",
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        callback: (value) => "Rp " + value.toLocaleString("id-ID"),
      },
    },
  },
};

onMounted(async () => {
  const data = await getAverageSalaryByDivision();

  const labels = Object.keys(data);
  const values = Object.values(data);

  // Buat ulang chartData sebagai objek baru agar reactive
  chartData.value = {
    labels,
    datasets: [
      {
        label: "Rata-rata Gaji (Rp)",
        data: values,
        backgroundColor: "#36A2EB",
        borderRadius: 6,
      },
    ],
  };
});
</script>
