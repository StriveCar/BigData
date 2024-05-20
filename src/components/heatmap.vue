<script setup lang="ts">
import { useECharts } from "@pureadmin/utils";
import {ref, watch, nextTick } from "vue";
import { use } from "@/json/data";

const chartRef = ref();
const { setOptions } = useECharts(chartRef);

const SOVisitFreq = [
  "每月一次",
  "每月几次",
  "每周几次",
  "每天",
  "每天多次",
  "不适用",
];

const SOPartFreq = [
  "不适用",
  "未参与过",
  "少于每月一次或每月一次",
  "一个月几次或每周一次",
  "一周几次",
  "每天或几乎每天",
  "每天多次",
];

watch(
  () => use,
  async () => {
    await nextTick();
    setOptions({
      container: ".heatmap",
      tooltip: {
        position: "top",
        formatter: function (params) {
          return (
            "访问频率：" +
            SOVisitFreq[params.value[0]] +
            "<br/>参与频率：" +
            SOPartFreq[params.value[1]] +
            "<br/>数量：" +
            params.value[2] +
            " 个"
          );
        },
      },
      grid: {
        left: 10,
        bottom: "15%",
        containLabel: true,
      },
      textStyle: {
        color: "#b3ccf8",
        fontSize: 13,
      },
      xAxis: {
        type: "category",
        name: "访问频率",
        data: SOVisitFreq,
        splitArea: {
          show: true,
        },
      },
      yAxis: {
        type: "category",
        name: "参与频率",
        data: SOPartFreq,
        splitArea: {
          show: true,
        },
      },
      visualMap: {
        min: 0,
        max: 5000,
        calculable: true,
        orient: "vertical",
        left: "left",
        bottom: "4%",
      },
      series: [
        {
          name: "次数",
          type: "heatmap",
          data: use,
          label: {
            show: true,
          },
          
          emphasis: {
            itemStyle: {
              shadowBlur: 10,
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
  <div ref="chartRef" style="width: 100%; height: 465px" />
</template>
