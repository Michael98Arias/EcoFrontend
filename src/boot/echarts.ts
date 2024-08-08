// src/boot/echarts.js
import { boot } from 'quasar/wrappers';
import ECharts from 'vue-echarts';
import 'echarts';

export default boot(async ({ app }) => {
  app.component('v-chart', ECharts);
});
