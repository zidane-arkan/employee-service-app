<template>
  <div class="relative w-full h-[350px]">
    <Doughnut :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Doughnut } from "vue-chartjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from "chart.js";
import { getEmployeeCountByDivision } from "../../../services/chartService";

ChartJS.register(Title, Tooltip, Legend, ArcElement);

const chartData = ref({
  labels: [],
  datasets: [
    {
      label: "Employees per Division",
      data: [],
      backgroundColor: ["#662FFF", "#C2ACFF", "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
      borderWidth: 1,
    },
  ],
});

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: false,
      text: "Employees per Division",
    },
  },
};

onMounted(async () => {
  const divisionData = await getEmployeeCountByDivision();
  
  chartData.value = {
    labels: Object.keys(divisionData),
    datasets: [
      {
        label: "Employees per Division",
        data: Object.values(divisionData),
        backgroundColor: [
          "#662FFF",
          "#C2ACFF",
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
        ],
        borderWidth: 1,
      },
    ],
  };
});
</script>
