<template>
  <div class="suggestionsPage">
    <div class="contentContainer">
      <div class="headerCard">
        <div class="iconSection">
          <div class="iconCircle">
            <div class="iconInner">
              <div class="iconPlaceholder"></div>
            </div>
          </div>
        </div>
        <div class="headerContent">
          <h1 class="title">Feedback Details</h1>
          <p class="subtitle">
            Here's your detailed, AI-powered feedback for each interview question. Review improvement suggestions and
            see where you can grow!
          </p>
        </div>
      </div>

      <div class="feedbackCards">
        <!-- First Question Card (Expanded) -->
        <div class="feedbackCard" :class="{ expanded: expandList.includes(0) }" @click="expandCard(0)">
          <div class="cardHeader">
            <h2 class="questionTitle">Q1. Tell me about yourself</h2>
            <p class="questionType">Fit Question</p>
          </div>
          <div class="expandIcon">
            <div class="iconPlaceholder"></div>
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon">
                <div class="iconPlaceholder"></div>
              </div>
              <h3 class="sectionTitle">Your Answer</h3>
            </div>
            <div class="answerBox">
              <p class="answerText">
                I'm a recent business graduate from Riverside University with experience in student government and
                twomarketing internships. l'm passionate about helping organizations grow and excited to apply my skils
                in a real-world environment.
              </p>
            </div>
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon aiIcon">
                <div class="iconPlaceholder"></div>
              </div>
              <h3 class="sectionTitle aiTitle">AI Feedback</h3>
            </div>
            <p class="feedbackText">
              Good structure and clear academic background. You highlighted relevant experiences and showed enthusiasm.
              Consider quantifying achievements for more impact.
            </p>
            <div class="improvementBox">
              <div class="improvementContent">
                <div class="improvementRow">
                  <div class="improvementIcon">
                    <div class="iconPlaceholder"></div>
                  </div>
                  <div class="improvementPoint">
                    <div class="pointMarker"></div>
                    <p class="pointText">Include an achievement with results (e.g., "increased event attendance by 30%")
                    </p>
                  </div>
                </div>
                <div class="improvementRow">
                  <div class="pointMarker"></div>
                  <p class="pointText">Briefly connect your experience to the target role</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Question Card (Collapsed) -->
        <div class="feedbackCard" :class="{ expanded: expandList.includes(1) }" @click="expandCard(1)">
          <div class="cardHeader">
            <h2 class="questionTitle">Q2. Describe a time you solved a problem in a team</h2>
            <p class="questionType">Behavioral Question</p>
          </div>
          <div class="expandIcon">
            <div class="iconPlaceholder"></div>
          </div>
        </div>

        <!-- Third Question Card (Collapsed) -->
        <div class="feedbackCard" :class="{ expanded: expandList.includes(2) }" @click="expandCard(2)">
          <div class="cardHeader">
            <h2 class="questionTitle">Q3. What interests you about this position?</h2>
            <p class="questionType">Fit Question</p>
          </div>
          <div class="expandIcon">
            <div class="iconPlaceholder"></div>
          </div>
        </div>

        <button class="downloadButton">
          <div class="buttonIcon">
            <div class="iconPlaceholder"></div>
          </div>
          <span>Download PDF</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here
const expandList = ref([])

function expandCard(index) {
  expandList.value.includes(index) ? expandList.value.splice(expandList.value.indexOf(index), 1) : expandList.value.push(index)
}
</script>

<style lang="scss" scoped>
.suggestionsPage {
  width: 100%;
  min-height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  padding: 32px 0;
  box-sizing: border-box;

  .contentContainer {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 32px;

    .headerCard {
      width: 100%;
      height: 104px;
      background-color: #FFFFFF;
      border-radius: 8px;
      border: 1px solid;
      border-image: linear-gradient(90deg, #4F6FE5 0%, #17B0A7 20%, #4F6FE5 100%) 1;
      box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
      display: flex;
      align-items: center;
      padding: 24px;
      box-sizing: border-box;

      .iconSection {
        width: 56px;
        height: 56px;
        margin-right: 16px;

        .iconCircle {
          width: 56px;
          height: 56px;
          background-color: #F7F9FC;
          border-radius: 50%;
          box-shadow: 0px 0.7px 1.4px rgba(0, 0, 0, 0.05);
          display: flex;
          justify-content: center;
          align-items: center;

          .iconInner {
            width: 39.2px;
            height: 39.2px;
            background-color: #4F6FE5;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;

            .iconPlaceholder {
              width: 21px;
              height: 21px;
              background-color: #FFFFFF;
              border-radius: 2px;
            }
          }
        }
      }

      .headerContent {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .title {
          font-size: 18px;
          font-weight: 700;
          line-height: 21px;
          color: #1A4D8C;
          margin: 0;
        }

        .subtitle {
          font-size: 14px;
          font-weight: 400;
          line-height: 14px;
          color: #6B7B8F;
          margin: 0;
          max-width: 948px;
        }
      }
    }

    .feedbackCards {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;

      .feedbackCard {
        width: 100%;
        background-color: #FFFFFF;
        border: 1px solid #E8ECF0;
        border-radius: 8px;
        box-shadow: 0px 4px 8px rgba(26, 77, 140, 0.04);
        padding: 28px 24px;
        box-sizing: border-box;
        position: relative;
        height: 102px;
        overflow: hidden;
        transition: height 0.3s ease;

        &.expanded {
          height: 400px;
        }

        .cardHeader {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 16px;

          .questionTitle {
            font-size: 18px;
            font-weight: 700;
            line-height: 21px;
            color: #1A4D8C;
            margin: 0;
          }

          .questionType {
            font-size: 14px;
            font-weight: 400;
            line-height: 17px;
            color: #6B7B8F;
            margin: 0;
          }
        }

        .expandIcon {
          position: absolute;
          top: 41px;
          right: 24px;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          .iconPlaceholder {
            width: 17.5px;
            height: 10px;
            background-color: #1A4D8C;
            border-radius: 2px;
          }
        }

        .contentSection {
          margin-top: 24px;
          width: 100%;

          .sectionHeader {
            display: flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;

            .sectionIcon {
              width: 14px;
              height: 14px;
              display: flex;
              justify-content: center;
              align-items: center;

              .iconPlaceholder {
                width: 12.25px;
                height: 14px;
                background-color: #1F2D3D;
                border-radius: 2px;
              }

              &.aiIcon {
                width: 17.5px;
                height: 14px;

                .iconPlaceholder {
                  width: 17.5px;
                  height: 14px;
                  background-color: #17B0A7;
                  border-radius: 2px;
                }
              }
            }

            .sectionTitle {
              font-size: 16px;
              font-weight: 700;
              line-height: 24px;
              color: #1F2D3D;
              margin: 0;

              &.aiTitle {
                color: #1A4D8C;
              }
            }
          }

          .answerBox {
            width: 100%;
            height: 76px;
            background-color: #F7F9FC;
            border-radius: 8px;
            padding: 16px;
            box-sizing: border-box;
            margin-bottom: 16px;

            .answerText {
              font-size: 14px;
              font-weight: 400;
              line-height: 22px;
              color: #1F2D3D;
              margin: 0;
            }
          }

          .feedbackText {
            font-size: 14px;
            font-weight: 400;
            line-height: 22px;
            color: #1F2D3D;
            margin: 0 0 16px 0;
          }

          .improvementBox {
            width: 100%;
            height: 76px;
            background-color: #FFF5EE;
            border-radius: 8px;
            padding: 0 0 0 4px;
            box-sizing: border-box;

            .improvementContent {
              width: calc(100% - 4px);
              height: 100%;
              border-radius: 0 8px 8px 0;
              padding: 12px 20px;
              box-sizing: border-box;

              .improvementRow {
                display: flex;
                align-items: flex-start;
                margin-bottom: 8px;

                .improvementIcon {
                  width: 16px;
                  height: 16px;
                  margin-top: 3px;
                  margin-right: 8px;
                  display: flex;
                  justify-content: center;
                  align-items: center;

                  .iconPlaceholder {
                    width: 16px;
                    height: 16px;
                    background-color: #FF9D5C;
                    border-radius: 2px;
                  }
                }

                .improvementPoint {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                }

                .pointMarker {
                  width: 6px;
                  height: 6px;
                  background-color: #FF9D5C;
                  border-radius: 50%;
                  margin-top: 8px;
                  flex-shrink: 0;
                }

                .pointText {
                  font-size: 14px;
                  font-weight: 700;
                  line-height: 22px;
                  color: #FF9D5C;
                  margin: 0;
                }
              }
            }
          }
        }
      }

      .downloadButton {
        align-self: flex-start;
        height: 40px;
        padding: 10px 16px;
        background-color: transparent;
        border: 1px solid #1A4D8C;
        border-radius: 40px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        margin-top: 16px;

        .buttonIcon {
          width: 12px;
          height: 16px;
          display: flex;
          justify-content: center;
          align-items: center;

          .iconPlaceholder {
            width: 12px;
            height: 16px;
            background-color: #1A4D8C;
            border-radius: 2px;
          }
        }

        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          color: #1A4D8C;
        }
      }
    }
  }
}
</style>
