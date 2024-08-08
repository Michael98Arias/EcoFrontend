<template>
    <q-page class="row items-center justify-evenly">
        <div class="q-ma-lg q-pt-md">
            <div class="row q-col-gutter-lg q-my-lg">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 "
                    style="
                box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); border-radius: 4px; vertical-align: top; background: #fff;">

                    <v-chart class="chart" :option="option" />
                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 "
                    style="box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12); border-radius: 4px; vertical-align: top; background: #fff; position: relative;">
                    <v-chart :option="barChartOptions" style="width: 100%; height: 200px;"></v-chart>
                </div>
            </div>
            <div class="row q-col-gutter-lg">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-card class="my-card">

                        <q-card-section>

                            <v-chart :option="chartOptions" style="width: 100%; height: 200px;"></v-chart>
                        </q-card-section>

                        <q-separator dark />
                    </q-card>

                </div>
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-card class="my-card bg-secondary text-white">
                        <q-card-section>
                            <div class="text-h6">Our Changing Planet</div>
                            <div class="text-subtitle2">by John Doe</div>
                        </q-card-section>

                        <q-card-section>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et debitis delectus quae quasi
                            dolore necessitatibus cum ipsum consectetur repudiandae quisquam ex, possimus veniam itaque
                            quam est, ab vero tenetur ratione.
                        </q-card-section>

                        <q-separator dark />

                        <q-card-actions>
                            <q-btn flat>Action 1</q-btn>
                            <q-btn flat>Action 2</q-btn>
                        </q-card-actions>
                    </q-card>

                </div>

            </div>
            <div class="row q-col-gutter-lg">
                <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                    <q-card class="my-card">

                        <q-card-section>

                            <v-chart :option="chartOptions" style="width: 100%; height: 200px;"></v-chart>
                        </q-card-section>

                        <q-separator dark />
                    </q-card>

                </div>

            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, provide } from 'vue';

import { useQuasar } from 'quasar';
import { useAuthStore } from './../../../stores/data-store'

import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart } from 'echarts/charts';
import {
    TitleComponent,
    TooltipComponent,
    LegendComponent,
} from 'echarts/components';
import VChart from 'vue-echarts';

use([
    CanvasRenderer,
    PieChart,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
]);
defineOptions({
    name: 'Analysis'
});


const option = ref({
    title: {
        text: 'Traffic Sources',
        left: 'center',
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
        orient: 'vertical',
        left: 'left',
        data: ['Direct', 'Email', 'Ad Networks', 'Video Ads', 'Search Engines'],
    },
    series: [
        {
            name: 'Traffic Sources',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
                { value: 335, name: 'Direct' },
                { value: 310, name: 'Email' },
                { value: 234, name: 'Ad Networks' },
                { value: 135, name: 'Video Ads' },
                { value: 1548, name: 'Search Engines' },
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)',
                },
            },
        },
    ],
});
const chartOptions = ref<any>({
    title: {
        text: 'Stacked Area Chart'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: 'Email',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: 'Union Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: 'Video Ads',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: 'Direct',
            type: 'line',
            stack: 'Total',
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: 'Search Engine',
            type: 'line',
            stack: 'Total',
            label: {
                show: true,
                position: 'top'
            },
            areaStyle: {},
            emphasis: {
                focus: 'series'
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
});
const barChartOptions = ref<any>({
    title: {
        text: 'Waterfall Chart',
        subtext: 'Living Expenses in Shenzhen'
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        },
        formatter: function (params: any) {
            var tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.value;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        splitLine: { show: false },
        data: ['Total', 'Rent', 'Utilities', 'Transportation', 'Meals', 'Other']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: 'Placeholder',
            type: 'bar',
            stack: 'Total',
            itemStyle: {
                borderColor: 'transparent',
                color: 'transparent'
            },
            emphasis: {
                itemStyle: {
                    borderColor: 'transparent',
                    color: 'transparent'
                }
            },
            data: [0, 1700, 1400, 1200, 300, 0]
        },
        {
            name: 'Life Cost',
            type: 'bar',
            stack: 'Total',
            label: {
                show: true,
                position: 'inside'
            },
            data: [2900, 1200, 300, 200, 900, 300]
        }
    ]
});

const lineChartOptions = ref<any>({
    title: {
        text: 'Gráfico de Líneas',
    },
    xAxis: {
        type: 'category',
        data: ['A', 'B', 'C', 'D'],
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [100, 200, 300, 400],
            type: 'line',
        },
    ],
});

const scatterChartOptions = ref<any>({
    title: {
        text: 'Gráfico de Dispersión',
    },
    xAxis: {
        type: 'value',
    },
    yAxis: {
        type: 'value',
    },
    series: [
        {
            data: [[1, 2], [2, 3], [3, 4], [4, 5]],
            type: 'scatter',
        },
    ],
});

const pieChartOptions = ref<any>(
    {
        title: {
            text: 'Stacked Area Chart'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: [
            {
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
            }
        ],
        yAxis: [
            {
                type: 'value'
            }
        ],
        series: [
            {
                name: 'Email',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [120, 132, 101, 134, 90, 230, 210]
            },
            {
                name: 'Union Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [220, 182, 191, 234, 290, 330, 310]
            },
            {
                name: 'Video Ads',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [150, 232, 201, 154, 190, 330, 410]
            },
            {
                name: 'Direct',
                type: 'line',
                stack: 'Total',
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [320, 332, 301, 334, 390, 330, 320]
            },
            {
                name: 'Search Engine',
                type: 'line',
                stack: 'Total',
                label: {
                    show: true,
                    position: 'top'
                },
                areaStyle: {},
                emphasis: {
                    focus: 'series'
                },
                data: [820, 932, 901, 934, 1290, 1330, 1320]
            }
        ]
    }
);


</script>