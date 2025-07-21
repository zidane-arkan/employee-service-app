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

import { getSalaryPerPosition } from "../../../services/chartService";

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const chartData = ref({
  labels: [],
  datasets: [],
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
      text: "Gaji per Posisi",
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
  const data = await getSalaryPerPosition();

  const labels = Object.keys(data);
  const values = Object.values(data).map(Number); // Pastikan tipe number

  chartData.value = {
    labels,
    datasets: [
      {
        label: "Gaji (Rp)",
        data: values,
        backgroundColor: "#FF6384",
        borderRadius: 6,
      },
    ],
  };
});
</script>
