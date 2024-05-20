<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import { ref, watch, nextTick } from "vue";
import { visit } from "@/json/data";

const time_x = [
  "NA",
  "不同意",
  "从不",
  "每天少于15分钟",
  "每天15-30分钟",
  "每天30-60分钟",
  "每天60-120分钟",
  "每天超过120分钟",
  "每周1-2次",
  "每周3-5次",
  "每周6-10次",
  "10次以上每周",
  "强烈不同意",
  "强烈同意",
  "同意",
  "中立",
];

const chartRef = ref();
const { setOptions } = useECharts(chartRef);

watch(
  () => visit,
  async () => {
    await nextTick();
    setOptions({
      container: ".scatter",
      tooltip: {
        position: "top",
        formatter: function (params) {
          return (
            "搜索时间：" +
            time_x[params.value[0]] +
            "<br/>回答时间：" +
            time_x[params.value[1]] +
            "<br/>数量：" +
            params.value[2] +
            " 个"
          );
        },
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
        name: "搜索时间",
        axisLabel: {
          interval: 0,
          rotate: 40,
        },
        data: time_x,
      },
      yAxis: {
        type: "category",
        name: "回答时间",
        data: time_x,
      },
      series: [
        {
          type: "scatter",
          symbolSize: function (val) {
            return val[2] / 180 + 12;
          },
          data: visit,
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
