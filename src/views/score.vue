<template>
  <div class="scorePage">
    <div class="contentContainer">
      <div class="feedbackHeader">
        <h1 class="feedbackTitle">Feedback Summary</h1>
        <p class="feedbackDescription">Here's how you performed in this interview. Review your strengths and areas for
          growth.</p>
      </div>

      <div class="scoreCards">
        <div class="overallScoreCard">
          <h2 class="scoreTitle">Overall Score</h2>
          <div class="scoreCircle">
            <div ref="overallChart" class="chartContainer"></div>
            <div class="scoreValue">
              <span class="scoreNumber">84</span>
              <span class="scoreMax">/ 100</span>
            </div>
          </div>
          <div class="scoreMessage">
            <span>Great job! Keep improving</span>
          </div>
        </div>

        <div class="scoreCardsGrid">
          <div class="categoryScoreCard">
            <div class="categoryHeader">
              <div class="categoryIcon experienceIcon">
                <div class="iconWrapper"></div>
              </div>
              <h3 class="categoryTitle experienceTitle">Experience Clarity</h3>
            </div>
            <div class="categoryDivider"></div>
            <div class="categoryScore">
              <div ref="experienceChart" class="chartContainer"></div>
              <span class="scoreNumberSmall experienceColor">91</span>
            </div>
          </div>

          <div class="categoryScoreCard">
            <div class="categoryHeader">
              <div class="categoryIcon fitIcon">
                <div class="iconWrapper"></div>
              </div>
              <h3 class="categoryTitle fitTitle">Fit & Motivation</h3>
            </div>
            <div class="categoryDivider"></div>
            <div class="categoryScore">
              <div ref="fitChart" class="chartContainer"></div>
              <span class="scoreNumberSmall fitColor">78</span>
            </div>
          </div>

          <div class="categoryScoreCard">
            <div class="categoryHeader">
              <div class="categoryIcon technicalIcon">
                <div class="iconWrapper"></div>
              </div>
              <h3 class="categoryTitle technicalTitle">Technical Strength</h3>
            </div>
            <div class="categoryDivider"></div>
            <div class="categoryScore">
              <div ref="technicalChart" class="chartContainer"></div>
              <span class="scoreNumberSmall technicalColor">82</span>
            </div>
          </div>

          <div class="categoryScoreCard">
            <div class="categoryHeader">
              <div class="categoryIcon communicationIcon">
                <div class="iconWrapper"></div>
              </div>
              <h3 class="categoryTitle communicationTitle">Communication</h3>
            </div>
            <div class="categoryDivider"></div>
            <div class="categoryScore">
              <div ref="communicationChart" class="chartContainer"></div>
              <span class="scoreNumberSmall communicationColor">67</span>
            </div>
          </div>
        </div>
      </div>

      <div class="actionButtons">
        <button class="viewDetailsButton">
          <span>View Details</span>
        </button>
        <button class="newInterviewButton">
          <span>New Interview</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as echarts from 'echarts/core';
import { GaugeChart } from 'echarts/charts';
import { CanvasRenderer } from 'echarts/renderers';

echarts.use([GaugeChart, CanvasRenderer]);

// 引用DOM元素
const overallChart = ref(null);
const experienceChart = ref(null);
const fitChart = ref(null);
const technicalChart = ref(null);
const communicationChart = ref(null);

// 分数数据
const scores = {
  overall: 84,
  experience: 91,
  fit: 78,
  technical: 82,
  communication: 67
};

// 颜色配置
const colors = {
  experience: '#1A4D8C',
  fit: '#17B0A7',
  technical: '#4F6FE5',
  communication: '#FF9D5C',
  background: '#E8ECF0'
};

// 初始化总体分数图表
const initOverallChart = () => {
  const chart = echarts.init(overallChart.value);

  const option = {
    series: [{
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      radius: '100%',
      pointer: { show: false },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          color: '#1A4D8C',
          borderWidth: 0
        }
      },
      axisLine: {
        lineStyle: {
          width: 20,
          color: [[1, colors.background]]
        }
      },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      detail: { show: false },
      data: [{
        value: scores.overall
      }]
    }]
  };

  chart.setOption(option);

  // 窗口大小变化时重新渲染
  window.addEventListener('resize', () => {
    chart.resize();
  });
};

// 初始化类别分数图表
const initCategoryChart = (chartRef, score, color) => {
  const chart = echarts.init(chartRef);

  const option = {
    series: [{
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      radius: '100%',
      pointer: { show: false },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          color: color,
          borderWidth: 0
        }
      },
      axisLine: {
        lineStyle: {
          width: 12,
          color: [[1, colors.background]]
        }
      },
      splitLine: { show: false },
      axisTick: { show: false },
      axisLabel: { show: false },
      detail: { show: false },
      data: [{
        value: score
      }]
    }]
  };

  chart.setOption(option);

  // 窗口大小变化时重新渲染
  window.addEventListener('resize', () => {
    chart.resize();
  });
};

// 组件挂载后初始化图表
onMounted(() => {
  // 延迟一下确保DOM已经渲染
  setTimeout(() => {
    initOverallChart();
    initCategoryChart(experienceChart.value, scores.experience, colors.experience);
    initCategoryChart(fitChart.value, scores.fit, colors.fit);
    initCategoryChart(technicalChart.value, scores.technical, colors.technical);
    initCategoryChart(communicationChart.value, scores.communication, colors.communication);
  }, 0);
});
</script>

<style lang="scss" scoped>
.scorePage {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  box-sizing: border-box;

  .contentContainer {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    display: flex;
    flex-direction: column;

    .feedbackHeader {
      margin-top: 40px;
      margin-bottom: 40px;

      .feedbackTitle {
        font-size: 28px;
        font-weight: 700;
        line-height: 28px;
        color: #1A4D8C;
        margin: 0;
        margin-bottom: 16px;
      }

      .feedbackDescription {
        font-size: 16px;
        font-weight: 400;
        line-height: 20px;
        color: #6B7B8F;
        margin: 0;
      }
    }

    .scoreCards {
      display: flex;
      gap: 24px;
      margin-bottom: 40px;

      .overallScoreCard {
        width: 420px;
        height: 392px;
        background-color: #FFFFFF;
        border: 1px solid #E5E7EB;
        border-radius: 12px;
        box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
        position: relative;

        .scoreTitle {
          font-size: 18px;
          font-weight: 700;
          line-height: 18px;
          color: #1F2D3D;
          position: absolute;
          top: 36px;
          left: 151px;
          margin: 0;
        }

        .scoreCircle {
          width: 212px;
          height: 212px;
          position: absolute;
          top: 97px;
          left: 104px;
          display: flex;
          align-items: center;
          justify-content: center;

          .chartContainer {
            width: 212px;
            height: 212px;
            position: absolute;
            top: 0;
            left: 0;
          }

          .scoreValue {
            display: flex;
            flex-direction: column;
            align-items: center;
            z-index: 1;
            position: relative;

            .scoreNumber {
              font-size: 40px;
              font-weight: 700;
              line-height: 40px;
              color: #1A4D8C;
            }

            .scoreMax {
              font-size: 16px;
              font-weight: 400;
              line-height: 16px;
              color: #6B7B8F;
              margin-top: 9px;
            }
          }
        }

        .scoreMessage {
          width: 178px;
          height: 20px;
          position: absolute;
          bottom: 32px;
          left: 121px;
          border-top: 1px solid #E5E7EB;
          padding-top: 12px;

          span {
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            color: #6B7B8F;
          }
        }
      }

      .scoreCardsGrid {
        display: grid;
        grid-template-columns: repeat(2, 362px);
        grid-template-rows: repeat(2, 184px);
        gap: 24px;

        .categoryScoreCard {
          background-color: #FFFFFF;
          border: 1px solid #E5E7EB;
          border-radius: 12px;
          box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
          position: relative;

          .categoryHeader {
            display: flex;
            align-items: center;
            gap: 8px;
            position: absolute;
            top: 24px;
            left: 24px;

            .categoryIcon {
              width: 20px;
              height: 20px;
              display: flex;
              justify-content: center;
              align-items: center;

              &.experienceIcon .iconWrapper {
                width: 13.75px;
                height: 20px;
                background-color: #1A4D8C;
              }

              &.fitIcon .iconWrapper {
                width: 20px;
                height: 17.08px;
                background-color: #17B0A7;
              }

              &.technicalIcon .iconWrapper {
                width: 25px;
                height: 20px;
                background-color: #4F6FE5;
              }

              &.communicationIcon .iconWrapper {
                width: 25px;
                height: 20px;
                background-color: #FF9D5C;
              }
            }

            .categoryTitle {
              font-size: 16px;
              font-weight: 700;
              line-height: 16px;
              margin: 0;

              &.experienceTitle {
                color: #1A4D8C;
              }

              &.fitTitle {
                color: #17B0A7;
              }

              &.technicalTitle {
                color: #4F6FE5;
              }

              &.communicationTitle {
                color: #FF9D5C;
              }
            }
          }

          .categoryDivider {
            width: 204px;
            height: 1px;
            background-color: #E5E7EB;
            position: absolute;
            top: 60px;
            left: 24px;
          }

          .categoryScore {
            position: absolute;
            top: 80px;
            left: 50%;
            transform: translateX(-50%);
            width: 166px;
            height: 92px;
            display: flex;
            justify-content: center;
            align-items: center;

            .chartContainer {
              width: 166px;
              height: 92px;
              position: absolute;
              top: 0;
              left: 0;
            }

            .scoreNumberSmall {
              font-size: 18px;
              font-weight: 700;
              line-height: 18px;
              position: absolute;
              top: 63px;

              &.experienceColor {
                color: #1A4D8C;
                left: 75px;
              }

              &.fitColor {
                color: #17B0A7;
                left: 72px;
              }

              &.technicalColor {
                color: #4F6FE5;
                left: 71px;
              }

              &.communicationColor {
                color: #FF9D5C;
                left: 71px;
              }
            }
          }
        }
      }
    }

    .actionButtons {
      display: flex;
      gap: 24px;
      margin-bottom: 40px;

      .viewDetailsButton {
        width: 126px;
        height: 40px;
        background-color: #17B0A7;
        border: none;
        border-radius: 40px;
        padding: 10px 16px;
        box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
        cursor: pointer;

        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          color: #FFFFFF;
          text-align: center;
        }
      }

      .newInterviewButton {
        width: 141px;
        height: 40px;
        background-color: transparent;
        border: 1px solid #1A4D8C;
        border-radius: 40px;
        padding: 10px 16px;
        box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
        cursor: pointer;

        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          color: #1A4D8C;
          text-align: center;
        }
      }
    }
  }
}
</style>
