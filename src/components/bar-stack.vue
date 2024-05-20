<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import { ref, watch, nextTick } from "vue";
import { developer,working } from "@/json/data";

const chartRef = ref();
const { setOptions } = useECharts(chartRef);

watch(
  () => working,
  async () => {
    await nextTick();
    setOptions({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          type: "shadow",
        },
      },
      legend: {
        data: ["远程", "混合", "现场", "未回答"],
        textStyle: {
          color: "#b3ccf8",
          fontSize: 13,
        },
      },
      textStyle: {
        color: "#b3ccf8",
        fontSize: 13,
      },
      grid: {
        left: "3%",
        bottom: "8%", // 调整底部边距以容纳 dataZoom
        containLabel: true,
      },
      xAxis: {
        type: "category",
        name: "开发类型",
        axisLabel: {
          interval: 0,
          rotate: 30,
        },
        data: developer,
      },
      yAxis: {
        type: "value",
        name: "工作方式",
      },
      dataZoom: [
        {
          show: true,
          start: 50,
          end: 80,
        },
        {
          type: "inside",
          start: 50,
          end: 80,
        },
      ],
      series: [
        {
          name: "远程",
          type: "bar",
          stack: "总量",
          data: working[0],
        },
        {
          name: "混合",
          type: "bar",
          stack: "总量",
          data: working[1],
        },
        {
          name: "现场",
          type: "bar",
          stack: "总量",

          data: working[2],
        },
        {
          name: "未回答",
          type: "bar",
          stack: "总量",
          data: working[3],
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
