<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import { ref, watch, nextTick, onMounted } from "vue";
import chartApi from "@/api/chart.js";

const languageData = ref([]);
const getLanguageCount = async () => {
  await chartApi.getLanguageCount().then((data) => {
    languageData.value = data;
  });
};

const chartRef = ref();
const { setOptions } = useECharts(chartRef);

onMounted(() => {
  getLanguageCount();
}),

  watch(
    () => languageData.value,
    async () => {
      await nextTick();
      setOptions({
        container: ".line",
        tooltip: {
          trigger: "axis",
        },
        grid: {
          left: 10,
          bottom: 4,
          containLabel: true,
        },
        textStyle: {
          color: "#b3ccf8",
          fontSize: 13,
        },
        xAxis: {
          type: "category",
          name: "编程语言",
          data: languageData.value.map((item) => item.name),
          axisLabel: {
            interval: 0,
            rotate: 45,
            fontSize: 10,
          },
        },
        yAxis: {
          type: "value",
          name: "使用频率",
        },
        dataZoom: [
          {
            show: true,
            start: 0,
            end: 20,
          },
          {
            type: "inside",
            start: 0,
            end: 20,
          },
        ],
        series: [
          {
            data: languageData.value.map((item) => item.value),
            type: "line",
            smooth: true,
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
