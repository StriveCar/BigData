<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import { ref, watch, nextTick } from "vue";
import { earn, earn_x } from "@/json/data";

const chartRef = ref();
const { setOptions } = useECharts(chartRef);

watch(
  () => earn,
  async () => {
    await nextTick();
    setOptions({
      container: ".bar-tick",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      calculable: true,
      textStyle: {
        color: "#b3ccf8",
        fontSize: 13,
      },
      xAxis: [
        {
          type: "category",
          name:"工资",
          data: earn_x,
        },
      ],
      yAxis: [
        {
          type: "value",
          name: "出现次数",
        },
      ],
      dataZoom: [
        {
          show: true,
          start: 1,
          end: 5,
        },
        {
          type: "inside",
          start: 1,
          end: 5,
        },
        {
          show: true,
          yAxisIndex: 0,
          filterMode: "empty",
          width: 30,
          height: "80%",
          showDataShadow: false,
          left: "93%",
        },
      ],
      series: [
        {
          name: "工资次数",
          type: "bar",
          barWidth: "50%",
          data: earn,
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
  <div ref="chartRef" style="width: 100%; height: 365px" />
</template>
