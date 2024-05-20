<script setup lang="ts">
import * as echarts from "echarts";
import worldMapJson from "../utils/world.json";
import { worldNameMap, worldGeoMap } from "../utils/worldNameMap";
import { useECharts } from "@pureadmin/utils";
import { type PropType, ref, watch, nextTick } from "vue";

echarts.registerMap("world", worldMapJson);

const props = defineProps({
  requireData: {
    type: Array as PropType<Array<number>>,
    default: () => [],
  },
  questionData: {
    type: Array as PropType<Array<number>>,
    default: () => [],
  },
});

const chartRef = ref();
const { setOptions } = useECharts(chartRef);
let riskData = [
  { name: "美国", value: 14541 },
  { name: "德国", value: 5548 },
  { name: "英国", value: 4313 },
  { name: "印度", value: 3986 },
  { name: "加拿大", value: 2729 },
  { name: "法国", value: 2356 },
  { name: "波兰", value: 1894 },
  { name: "荷兰", value: 1864 },
  { name: "巴西", value: 1657 },
  { name: "澳大利亚", value: 1520 },
  { name: "西班牙", value: 1470 },
  { name: "意大利", value: 1400 },
  { name: "瑞典", value: 1327 },
  { name: "瑞士", value: 899 },
  { name: "捷克共和国", value: 790 },
  { name: "奥地利", value: 782 },
  { name: "俄罗斯", value: 776 },
  { name: "以色列", value: 749 },
  { name: "乌克兰", value: 716 },
  { name: "丹麦", value: 688 },
  { name: "土耳其", value: 685 },
  { name: "罗马尼亚", value: 685 },
  { name: "比利时", value: 657 },
  { name: "葡萄牙", value: 601 },
  { name: "挪威", value: 588 },
  { name: "芬兰", value: 565 },
  { name: "新西兰", value: 499 },
  { name: "希腊", value: 475 },
  { name: "伊朗", value: 473 },
  { name: "巴基斯坦", value: 471 },
  { name: "匈牙利", value: 469 },
  { name: "墨西哥", value: 454 },
  { name: "阿根廷", value: 449 },
  { name: "南非", value: 445 },
  { name: "中国", value: 420 },
  { name: "保加利亚", value: 390 },
  { name: "哥伦比亚", value: 357 },
  { name: "爱尔兰", value: 352 },
  { name: "塞尔维亚", value: 350 },
  { name: "孟加拉国", value: 339 },
  { name: "印尼", value: 310 },
  { name: "日本", value: 284 },
  { name: "斯洛伐克", value: 260 },
  { name: "立陶宛", value: 260 },
  { name: "尼日利亚", value: 250 },
  { name: "越南", value: 246 },
  { name: "克罗地亚", value: 238 },
  { name: "菲律宾", value: 223 },
  { name: "斯洛文尼亚", value: 217 },
  { name: "新加坡", value: 212 },
  { name: "爱沙尼亚", value: 188 },
  { name: "马来西亚", value: 187 },
  { name: "智利", value: 186 },
  { name: "埃及", value: 181 },
  { name: "台湾", value: 177 },
  { name: "斯里兰卡", value: 163 },
  { name: "肯尼亚", value: 160 },
  { name: "泰国", value: 159 },
  { name: "拉脱维亚", value: 147 },
  { name: "格鲁吉亚", value: 140 },
  { name: "韩国", value: 139 },
  { name: "尼泊尔", value: 138 },
  { name: "香港", value: 134 },
  { name: "阿联酋", value: 132 },
  { name: "乌拉圭", value: 110 },
  { name: "亚美尼亚", value: 101 },
  { name: "白俄罗斯", value: 98 },
  { name: "秘鲁", value: 95 },
  { name: "摩洛哥", value: 92 },
  { name: "委内瑞拉", value: 84 },
  { name: "哥斯达黎加", value: 76 },
  { name: "突尼斯", value: 74 },
  { name: "哈萨克斯坦", value: 74 },
  { name: "厄瓜多尔", value: 69 },
  { name: "波斯尼亚和黑塞哥维那", value: 69 },
  { name: "塞浦路斯", value: 66 },
  { name: "韩国", value: 62 },
  { name: "沙特阿拉伯", value: 60 },
  { name: "卢森堡", value: 59 },
  { name: "埃塞俄比亚", value: 58 },
  { name: "多明尼加共和国", value: 56 },
  { name: "乌兹别克斯坦", value: 51 },
  { name: "黎巴嫩", value: 50 },
  { name: "加纳", value: 49 },
  { name: "约旦", value: 48 },
  { name: "危地马拉", value: 47 },
  { name: "阿尔巴尼亚", value: 46 },
  { name: "摩尔多瓦", value: 45 },
  { name: "阿尔及利亚", value: 44 },
  { name: "摩尔多瓦", value: 45 },
  { name: "阿尔及利亚", value: 44 },
  { name: "冰岛", value: 42 },
  { name: "马其顿", value: 41 },
  { name: "阿富汗", value: 40 },
  { name: "马耳他", value: 40 },
  { name: "阿塞拜疆", value: 39 },
  { name: "巴拉圭", value: 34 },
  { name: "黑山", value: 34 },
  { name: "乌干达", value: 34 },
  { name: "伊拉克", value: 33 },
  { name: "玻利维亚", value: 30 },
  { name: "叙利亚", value: 29 },
  { name: "缅甸", value: 28 },
  { name: "古巴", value: 27 },
  { name: "萨尔瓦多", value: 26 },
  { name: "尼加拉瓜", value: 25 },
  { name: "坦桑尼亚", value: 25 },
  { name: "科索沃", value: 24 },
  { name: "吉尔吉斯斯坦", value: 21 },
  { name: "巴勒斯坦", value: 20 },
  { name: "蒙古", value: 20 },
  { name: "毛里求斯", value: 19 },
  { name: "柬埔寨", value: 18 },
  { name: "卢旺达", value: 18 },
  { name: "巴拿马", value: 18 },
  { name: "洪都拉斯", value: 18 },
  { name: "津巴布韦", value: 17 },
  { name: "马达加斯加", value: 16 },
  { name: "赞比亚", value: 16 },
  { name: "牙买加", value: 14 },
  { name: "喀麦隆", value: 14 },
  { name: "卡塔尔", value: 12 },
  { name: "索马里", value: 12 },
  { name: "马恩岛", value: 12 },
  { name: "也门", value: 11 },
  { name: "贝宁", value: 11 },
  { name: "特里尼达和多巴哥", value: 11 },
  { name: "象牙海岸", value: 10 },
  { name: "塞内加尔", value: 10 },
  { name: "马拉维", value: 10 },
  { name: "安道尔", value: 10 },
  { name: "斯威士兰", value: 10 },
  { name: "巴林", value: 10 },
  { name: "科威特", value: 8 },
  { name: "土库曼斯坦", value: 8 },
  { name: "马尔代夫", value: 7 },
  { name: "利比亚", value: 7 },
  { name: "多哥", value: 6 },
  { name: "阿曼", value: 6 },
  { name: "莫桑比克", value: 6 },
  { name: "马里", value: 6 },
  { name: "安哥拉", value: 5 },
  { name: "塔吉克斯坦", value: 4 },
  { name: "毛里塔尼亚", value: 4 },
  { name: "博茨瓦纳", value: 4 },
  { name: "布基纳法索", value: 4 },
  { name: "圭亚那", value: 3 },
  { name: "斐济", value: 3 },
  { name: "苏丹", value: 3 },
  { name: "莱索托", value: 3 },
  { name: "苏里南", value: 3 },
  { name: "尼日尔", value: 3 },
  { name: "巴巴多斯", value: 3 },
  { name: "不丹", value: 3 },
  { name: "刚果民主共和国", value: 3 },
  { name: "纳米比亚", value: 3 },
  { name: "安提瓜和巴布达", value: 3 },
  { name: "吉布提", value: 2 },
  { name: "帕劳", value: 2 },
  { name: "文莱", value: 2 },
  { name: "塞拉利昂", value: 2 },
  { name: "布隆迪", value: 2 },
  { name: "刚果共和国", value: 2 },
  { name: "利比里亚", value: 2 },
  { name: "伯利兹", value: 2 },
  { name: "老挝", value: 2 },
  { name: "海地", value: 2 },
  { name: "多米尼加", value: 1 },
  { name: "圣马力诺", value: 1 },
  { name: "巴哈马", value: 1 },
  { name: "东帝汶", value: 1 },
  { name: "加蓬", value: 1 },
  { name: "列支敦士登", value: 1 },
  { name: "摩纳哥", value: 1 },
  { name: "佛得角", value: 1 },
  { name: "圣基茨和尼维斯", value: 1 },
  { name: "圣文森特和格林纳丁斯", value: 1 },
  { name: "格林纳达", value: 1 },
  { name: "几内亚", value: 1 },
  { name: "几内亚比绍", value: 1 },
  { name: "朝鲜", value: 1 },
];

let markPointData = [
  {
    name: "美国",
    coord: worldGeoMap["美国"],
    symbolSize: 20,
  },
  {
    name: "德国",
    coord: worldGeoMap["德国"],
    symbolSize: 20,
  },
  {
    name: "英国",
    coord: worldGeoMap["英国"],
    symbolSize: 20,
  },
  {
    name: "印度",
    coord: worldGeoMap["印度"],
    symbolSize: 20,
  },
];

watch(
  () => props,
  async () => {
    await nextTick();
    setOptions({
      container: ".chart",
      title: {
        text: "开发者全球数量分布",
        left:"center",
        textStyle: {
          color: "#b3ccf8",
          fontSize: 20,
        },
      },
      tooltip: {
        trigger: "item",
        backgroundColor: "#fff",
        textStyle: {
          color: "#666666",
        },
        borderWidth: 2,
        borderColor: "#ECECEE",
        padding: 10,
        formatter: function (params) {
          var value = params.value ? params.value : 0;
          return (
            "开发者数量<br/>" +
            params.name +
            " : " +
            value +
            "个<br/>" +
            "占比：" +
            ((value * 100) / 64737).toFixed(2) +
            "%"
          );
        },
      },
      visualMap: {
        type: "piecewise",
        splitNumber: 3,
        inverse: true,
        left: 250,
        bottom: 50,
        pieces: [
          {
            min: 0,
            max: 50,
            color: "#dfe2f5",
          },
          {
            min: 50,
            max: 100,
            color: "#b5c1eb",
          },
          {
            min: 100,
            max: 1000,
            color: "#839aee",
          },
          {
            min: 1000,
            max: 15000,
            color: "#425bab",
          },
        ],
        textStyle: {
          color: "#6E7784",
        },
        itemWidth: 40,
        itemHeight: 10,
        align: "left",
      },
      series: [
        {
          type: "map",
          map: "world",
          nameMap: worldNameMap,
          roam: true,
          itemStyle: {
            areaColor: "#dfe2f5",
            borderWidth: 0,
            emphasis: {
              label: {
                show: false,
              },
              areaColor: "#feddb3",
            },
          },
          markPoint: {
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            itemStyle: {
              normal: {
                color: "rgba(72,150,128,1)",
              },
            },
            data: markPointData,
          },

          data: riskData,
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
  <div ref="chartRef" style="width: 100%; height: 644px" />
</template>
