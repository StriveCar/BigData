<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import { ref, watch, nextTick,onMounted } from "vue";
import chartApi from "@/api/chart.js";

const employmentData = ref([]);
const getEmploymentCount = async () => {
  await chartApi.getEmploymentCount().then((data) => {
    employmentData.value = data;
  });
};

onMounted(()=>{
  getEmploymentCount();
})

const chartRef = ref();
const { setOptions } = useECharts(chartRef);

watch(
  () => employmentData.value,
  async () => {
    await nextTick();
    setOptions({
      container: ".pie-rose",
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      legend: {
        type: "scroll",
        orient: "vertical",
        left: "right",
        textStyle: {
          color: "#b3ccf8",
          fontSize: 13,
        },
      },
      grid: {
        top: 10,
      },
      label: {
        show: true,
        color: "#b3ccf8", // 设置提示文字颜色
      },
      series: [
        {
          name: "人数",
          type: "pie",
          radius: ["30%", "60%"],
          roseType: "radius",
          itemStyle: {
            borderRadius: 8,
          },
          data: employmentData.value,
        },
      ],
    });
  },
  {
    deep: true,
    immediate: true,
  }
);
</script>

<template>
  <div ref="chartRef" style="width: 100%; height: 465px" />
</template>
