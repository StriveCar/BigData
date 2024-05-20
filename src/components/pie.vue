<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import { ref, watch, nextTick, onMounted } from "vue";
import chartApi from "@/api/chart.js";

const AIData = ref([]);
const getAICount = async () => {
  await chartApi.getUseAiCount().then((data) => {
    AIData.value = data;
  });
};
const chartRef = ref();
const { setOptions } = useECharts(chartRef);

onMounted(() => {
  getAICount();
});

watch(
  () => AIData.value,
  async () => {
    await nextTick();
    setOptions({
      container: ".pie",
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
      label: {
        show: true,
        color: "#b3ccf8", // 设置提示文字颜色
      },
      series: [
        {
          name: "使用情况",
          type: "pie",
          radius: "50%",
          data: AIData.value,
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: "rgba(0, 0, 0, 0.5)",
            },
          },
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
  <div ref="chartRef" style="width: 100%; height: 450px" />
</template>
