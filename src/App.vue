<script setup>
import "./utils/flexible";
import { ref } from "vue";
import BarTick from "./components/bar-tick.vue";
import Heatmap from "./components/heatmap.vue";
import AreaStack from "./components/area-stack.vue";
import BarStack from "./components/bar-stack.vue";
import Line from "./components/line.vue";
import Scatter from "./components/scatter.vue";
import World from "./components/world.vue";
import Pie from "./components/pie.vue";
import PieRose from "./components/pie-rose.vue";

const week = ref("");
const date = ref("");
const nowTime = ref("");
const weatcherData = ref({
  tem: "19~27",
  wea: "晴",
});
const timeFormate = (timeStamp) => {
  //显示当前时间
  let newDate = new Date(timeStamp);
  let year = newDate.getFullYear();
  let month =
    newDate.getMonth() + 1 < 10
      ? "0" + (newDate.getMonth() + 1)
      : newDate.getMonth() + 1;
  let nowdate =
    newDate.getDate() < 10 ? "0" + newDate.getDate() : newDate.getDate();
  let hh =
    newDate.getHours() < 10 ? "0" + newDate.getHours() : newDate.getHours();
  let mm =
    newDate.getMinutes() < 10
      ? "0" + newDate.getMinutes()
      : newDate.getMinutes();
  let ss =
    newDate.getSeconds() < 10
      ? "0" + newDate.getSeconds()
      : newDate.getSeconds();
  let day = newDate.getDay();
  let weeks = ["日", "一", "二", "三", "四", "五", "六"];
  let getWeek = "星期" + weeks[day];
  week.value = getWeek;
  date.value = year + "." + month + "." + nowdate;
  nowTime.value = hh + ":" + mm + ":" + ss;
};
const nowTimes = () => {
  timeFormate(new Date());
  setInterval(nowTimes, 1000);
  clear();
};
const clear = () => {
  clearInterval(nowTimes);
  nowTimes.value = "";
};
nowTimes();
</script>

<template>
  <div class="brand-container">
    <div class="wrap">
      <header>
        <div class="weather">
          <img src="./assets/img/qing.png" />
          <span class="tem">{{ weatcherData.tem }}°C</span>
          <span class="wea">{{ weatcherData.wea }}</span>
        </div>
        <h2>Stack Overflow开发者调查问卷分析</h2>
        <div class="showTime">
          <span class="time">{{ nowTime }}</span>
          <span class="date">
            <span>{{ week }}</span>
            <span>{{ date }}</span>
          </span>
        </div>
      </header>
      <section class="mainbox">
        <div class="item left">
          <div class="panel">
            <h2>开发者人口统计特征分析</h2>
            <div style="display: flex">
              <div class="area-stack"><AreaStack /></div>
              <div class="bar-tick"><BarTick /></div>
            </div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>开发人员类型及其工作方式分布</h2>
            <div style="display: flex">
              <div class="pie-rose"><PieRose /></div>
              <div class="bar-stack"><BarStack /></div>
            </div>
            <div class="panel-footer"></div>
          </div>
        </div>

        <div class="item center">
          <div class="map">
            <div class="chart" id="chart_map"><World /></div>
            <div class="map1"></div>
            <div class="map2"></div>
            <div class="map3"></div>
          </div>
        </div>

        <div class="item right">
          <div class="panel">
            <h2>编程语言和AI技术的使用趋势</h2>
            <div style="display: flex">
              <div class="pie"><Pie /></div>
              <div class="line"><Line /></div>
            </div>
            <div class="panel-footer"></div>
          </div>
          <div class="panel">
            <h2>stack Overflow社区参与度</h2>
            <div style="display: flex">
              <div class="heatmap"><Heatmap /></div>
              <div class="scatter"><Scatter /></div>
            </div>
            <div class="panel-footer"></div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
