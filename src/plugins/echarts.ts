import type { App } from "vue";
import * as echarts from "echarts/core";
import {
  PieChart,
  BarChart,
  LineChart,
  BoxplotChart,
  ScatterChart,
  RadarChart,
} from "echarts/charts";
import { CanvasRenderer, SVGRenderer } from "echarts/renderers";
import {
  GridComponent,
  TitleComponent,
  PolarComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent,
} from "echarts/components";

const { use } = echarts;

use([
  PieChart,
  BarChart,
  LineChart,
  RadarChart,
  BoxplotChart,
  ScatterChart,
  CanvasRenderer,
  SVGRenderer,
  GridComponent,
  TitleComponent,
  PolarComponent,
  LegendComponent,
  GraphicComponent,
  ToolboxComponent,
  TooltipComponent,
  DataZoomComponent,
  VisualMapComponent,
]);


export function useEcharts(app: App) {
  app.config.globalProperties.$echarts = echarts;
}

export default echarts;
