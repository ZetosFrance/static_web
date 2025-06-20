<template>
  <div class="dashboardPage">
    <div class="contentContainer">
      <button class="inviteButton">
        <img :src="invite" alt="">
        <span @click="goStudent">Invite Students</span>
      </button>
      <div class="topRow">
        <div class="statCard">
          <div class="cardHeader">
            <div class="iconCircle">
              <img :src="team" alt="team" />
            </div>
            <h2 class="cardTitle">{{ $t("KEY_DASHBOARD_TEXT11") }}</h2>
          </div>
          <div class="chartArea">
            <!-- Chart placeholder -->
          </div>
          <div class="statInfo">
            <div class="growthIndicator">
              <span class="growthValue">31%</span>
              <div class="growthIcon"></div>
            </div>
            <div class="statValue">1,245</div>
          </div>
        </div>

        <div class="statCard">
          <div class="cardHeader">
            <div class="iconCircle">
              <img :src="chat" alt="chat" />
            </div>
            <h2 class="cardTitle">Total Interviews</h2>
          </div>
          <div class="chartArea">
            <!-- Chart placeholder -->
          </div>
          <div class="statInfo">
            <div class="growthIndicator">
              <span class="growthValue">31%</span>
              <div class="growthIcon"></div>
            </div>
            <div class="statValue">3,920</div>
          </div>
        </div>

        <div class="statCard">
          <div class="cardHeader">
            <div class="iconCircle">
              <img :src="progress" alt="progress" />
            </div>
            <h2 class="cardTitle">Avg Score</h2>
          </div>
          <div class="chartArea">
            <!-- Chart placeholder -->
          </div>
          <div class="scoreInfo">
            <div class="scoreValue">82</div>
            <div class="scoreMax">/100</div>
          </div>
        </div>
      </div>

      <div class="chartCard">
        <div class="chartHeader">
          <div class="chartTitles">
            <h2 class="chartTitle">Platform Usage (Last 7 Days)</h2>
            <p class="chartSubtitle">Daily active students & interviews</p>
          </div>
        </div>
        <div class="chartContent">

          <div class="chartLegend">
            <div class="legendItem">
              <div class="legendDot students"></div>
              <div class="legendText">Active Students</div>
            </div>
            <div class="legendItem">
              <div class="legendDot interviews"></div>
              <div class="legendText">Interviews</div>
            </div>
          </div>
          <div ref="chartContainer" class="echartContainer"></div>

        </div>
      </div>


    </div>
  </div>
</template>

<script setup>
import { getAssetsFile } from "@/utils/getAssets"
import * as echarts from 'echarts/core';
import { LineChart } from 'echarts/charts';
import {
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([
  LineChart,
  GridComponent,
  TooltipComponent,
  TitleComponent,
  LegendComponent,
  CanvasRenderer
]);

const chartContainer = ref(null);
let chart = null;

const days = ['Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed'];
const studentsData = [120, 82, 89, 69, 0, 34, 17];
const interviewsData = [130, 89, 111, 68, 0, 33, 17];

onMounted(() => {
  if (chartContainer.value) {
    chart = echarts.init(chartContainer.value);

    const option = {
      grid: {
        top: 40,
        right: 20,
        bottom: 0,
        left: 20,
        containLabel: true
      },
      xAxis: {
        type: 'category',
        data: days,
        axisLine: {
          lineStyle: {
            color: '#E8ECF0',
            width: 2
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#6B7B8F',
          fontSize: 14
        }
      },
      yAxis: {
        type: 'value',
        min: 0,
        max: 160,
        interval: 20,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#6B7B8F',
          fontSize: 14
        },
        splitLine: {
          lineStyle: {
            color: '#E8ECF0',
            type: 'solid'
          }
        }
      },
      tooltip: {
        trigger: 'axis',
        backgroundColor: '#FFFFFF',
        borderColor: '#E8ECF0',
        borderWidth: 1,
        textStyle: {
          color: '#1F2D3D'
        },
        formatter: function (params) {
          let result = `<div style="font-weight: bold; margin-bottom: 5px;">${params[0].axisValue}</div>`;
          params.forEach(param => {
            const color = param.seriesName === 'Active Students' ? '#1A4D8C' : '#17B0A7';
            result += `<div style="display: flex; align-items: center; margin: 3px 0;">
              <div style="width: 10px; height: 10px; border-radius: 50%; background-color: ${color}; margin-right: 5px;"></div>
              <span style="margin-right: 5px;">${param.seriesName}:</span>
              <span style="font-weight: bold;">${param.value}</span>
            </div>`;
          });
          return result;
        }
      },
      series: [
        {
          name: 'Active Students',
          type: 'line',
          data: studentsData,
          smooth: true,
          symbol: 'circle',
          symbolSize: 14,
          itemStyle: {
            color: '#1A4D8C'
          },
          lineStyle: {
            width: 2,
            color: '#1A4D8C'
          }
        },
        {
          name: 'Interviews',
          type: 'line',
          data: interviewsData,
          smooth: true,
          symbol: 'circle',
          symbolSize: 14,
          itemStyle: {
            color: '#17B0A7'
          },
          lineStyle: {
            width: 2,
            color: '#17B0A7'
          }
        }
      ]
    };

    chart.setOption(option);

    window.addEventListener('resize', handleResize);
  }
});

onUnmounted(() => {
  if (chart) {
    chart.dispose();
    chart = null;
  }
  window.removeEventListener('resize', handleResize);
});

const handleResize = () => {
  if (chart) {
    chart.resize();
  }
};


const chat = getAssetsFile("chat.png", "dashboard")
const progress = getAssetsFile("progress.png", "dashboard")
const team = getAssetsFile("team.png", "dashboard")
const invite = getAssetsFile("invite.png", "dashboard")

const router = useRouter();

function goStudent() {
  router.push("/student")
}
</script>

<style lang="scss" scoped>
.dashboardPage {
  width: 100%;
  min-height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  .contentContainer {
    max-width: 1200px;
    margin: 0 auto;
    position: relative;

    .topRow {
      display: flex;
      justify-content: space-between;
      gap: 24px;
      margin-bottom: 24px;

      .statCard {
        width: 384px;
        height: 174px;
        background-color: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
        padding: 24px;
        box-sizing: border-box;
        position: relative;

        .cardHeader {
          display: flex;
          align-items: center;
          gap: 8px;

          .iconCircle {
            width: 28px;
            height: 22px;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
              height: 22px;
              width: auto;
            }
          }

          .cardTitle {
            font-size: 16px;
            font-weight: 700;
            line-height: 17px;
            color: #6B7B8F;
            margin: 0;
          }
        }

        .chartArea {
          position: absolute;
          top: 86px;
          right: 24px;
          width: 141px;
          height: 75px;
          background: url("@/assets/images/dashboard/charts.png") no-repeat;
          background-size: contain;
          background-position: center;
        }

        .statInfo {
          position: absolute;
          bottom: 24px;
          left: 24px;

          .growthIndicator {
            display: flex;
            align-items: center;
            gap: 6px;
            margin-bottom: 5px;

            .growthValue {
              font-size: 14px;
              font-weight: 400;
              line-height: 14px;
              color: #17B0A7;
            }

            .growthIcon {
              width: 8px;
              height: 6px;
              background-color: #17B0A7;
              clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
            }
          }

          .statValue {
            font-size: 32px;
            font-weight: 700;
            line-height: 32px;
            color: #1A4D8C;
          }
        }

        .scoreInfo {
          position: absolute;
          bottom: 24px;
          left: 24px;
          display: flex;
          align-items: flex-end;

          .scoreValue {
            font-size: 32px;
            font-weight: 700;
            line-height: 32px;
            color: #17B0A7;
          }

          .scoreMax {
            font-size: 16px;
            font-weight: 400;
            line-height: 20px;
            color: #6B7B8F;
            margin-left: 6px;
            margin-bottom: 5px;
          }
        }
      }
    }

    .chartCard {
      width: 100%;
      height: 467px;
      background-color: #FFFFFF;
      border: 1px solid #E5E7EB;
      border-radius: 12px;
      box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
      padding: 32px 24px;
      box-sizing: border-box;
      margin-bottom: 24px;

      .chartHeader {
        display: flex;
        justify-content: space-between;
        margin-bottom: 25px;

        .chartTitles {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;

          .chartTitle {
            font-size: 20px;
            font-weight: 700;
            line-height: 24px;
            color: #1A4D8C;
            letter-spacing: -0.055em;
            margin: 0 0 8px 0;
          }

          .chartSubtitle {
            font-size: 14px;
            font-weight: 400;
            line-height: 14px;
            color: #6B7B8F;
            margin: 0;
          }
        }
      }

      .chartContent {
        height: 354px;

        .echartContainer {
          width: 100%;
          height: 300px;
        }

        .chartLegend {
          display: flex;
          justify-content: center;
          gap: 16px;
          margin-top: 16px;

          .legendItem {
            display: flex;
            align-items: center;
            gap: 8px;

            .legendDot {
              width: 16px;
              height: 16px;
              border-radius: 50%;

              &.students {
                background-color: #1A4D8C;
              }

              &.interviews {
                background-color: #17B0A7;
              }
            }

            .legendText {
              font-size: 14px;
              font-weight: 400;
              line-height: 14px;
              color: #6B7B8F;
            }
          }
        }
      }
    }

    .inviteButton {
      top: 0;
      right: 0;
      height: 40px;
      padding: 10px 16px;
      background-color: #17B0A7;
      border: none;
      border-radius: 40px;
      display: flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
      cursor: pointer;
      margin: 0 0 20px auto;

      span {
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        color: #FFFFFF;
        white-space: nowrap;
      }
    }
  }
}
</style>
