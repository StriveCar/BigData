<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import { ref, watch, nextTick } from "vue";
import { age, education } from "@/json/data";

const chartRef = ref();
const { setOptions } = useECharts(chartRef);

watch(
  () => education,
  async () => {
    await nextTick();
    setOptions({
      container: ".area-stack",
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "cross",
          label: {
            backgroundColor: "#6a7985",
          },
        },
      },
      textStyle: {
        color: "#b3ccf8",
        fontSize: 13,
      },
      legend: {
        type: "scroll",
        textStyle: {
          color: "#b3ccf8",
          fontSize: 13,
        },
      },
      xAxis: {
        type: "category",
        name: "年龄",
        data: age,
      },
      yAxis: {
        type: "value",
        name: "数量",
      },
      series: [
        {
          name: "其他",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[0],
        },
        {
          name: "小学教育",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[1],
        },
        {
          name: "中等教育",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[2],
        },
        {
          name: "部分大学学习",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[3],
        },
        {
          name: "副学士学位",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[4],
        },
        {
          name: "学士学位",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[5],
        },
        {
          name: "硕士学位",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[6],
        },
        {
          name: "博士学位",
          type: "line",
          stack: "Total",
          areaStyle: {},
          emphasis: {
            focus: "series",
          },
          data: education[7],
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
