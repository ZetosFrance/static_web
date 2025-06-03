<template>
  <div class="letterPage">
    <div class="reviewSection">
      <div class="reviewHeader">
        <div class="reviewIcon">
          <!-- Document icon placeholder -->
          <div class="iconPlaceholder"></div>
        </div>
        <h1 class="reviewTitle">CV & Cover Letter Review</h1>
      </div>

      <div class="reviewNav">
        <div class="navTabs">
          <div class="navTab" :class="{ navTabActive: activeTab === 'cv' }" @click="activeTab = 'cv'">
            <span class="tabText" :class="{ tabActive: activeTab === 'cv', tabInactive: activeTab !== 'cv' }">CV
              review</span>
          </div>
          <div class="navTab" :class="{ navTabActive: activeTab === 'letter' }" @click="activeTab = 'letter'">
            <span class="tabText"
              :class="{ tabActive: activeTab === 'letter', tabInactive: activeTab !== 'letter' }">Cover letter
              review</span>
          </div>
        </div>
      </div>

      <!-- Cover Letter Content -->
      <div v-if="activeTab === 'letter'" class="letterContent">
        <div class="letterGreeting">
          Dear Recruiter,
        </div>

        <div class="letterParagraph">
          <div class="paragraphText">
            I am writing to express my
            <span class="highlightedText">interest in the Marketing Analyst position at Acme Corp.</span>
            <!-- Highlight icon placeholder -->
            <el-tooltip class="item" effect="dark" content="Overused phrase: try to differentiate your introduction"
              placement="bottom">
              <div class="highlightIcon"></div>
            </el-tooltip>
          </div>
          <!-- <div class="tooltip">
            <div class="tooltipPointer">
              <div class="pointerPlaceholder"></div>
            </div>
            <div class="tooltipContent">
              <span class="tooltipText">Overused phrase: try to differentiate your introduction</span>
            </div>
          </div> -->
        </div>

        <div class="letterParagraph">
          <div class="paragraphText">
            In my CV, I have listed achievements, but did not include quantifiable impact.
            <!-- Highlight icon placeholder -->
            <div class="highlightIcon"></div>
          </div>
        </div>


        <div class="letterParagraph">
          <div class="paragraphText">
            My previous role
            <span class="highlightedText">involved various tasks</span>, such as coordinating campaigns and conducting
            market research. I believe my skills would be a great fit for your team
            <span class="highlightedText">.</span>
            <!-- Highlight icon placeholder -->
            <div class="highlightIcon"></div>
            <!-- Highlight icon placeholder -->
            <div class="highlightIcon"></div>
          </div>
        </div>

        <div class="letterSignature">
          <div class="signatureText">Thank you for considering my application.</div>
          <div class="signatureText">Sincerely</div>
          <div class="signatureText">Jamie Lee</div>
        </div>
      </div>

      <!-- CV Content -->
      <div v-if="activeTab === 'cv'" class="cvContent">
        <div class="cvTitle">
          CV Review – Alex Taylor (with bullet points)
        </div>

        <div class="cvSection">
          <div class="sectionHeader">
            <div class="sectionIcon">
              <!-- Success icon placeholder -->
              <div class="successIconPlaceholder"></div>
            </div>
            <span class="sectionLabel">Strengths</span>
          </div>
          <div class="sectionContent">
            <p class="sectionText">Visually appealing design with a professional headshot and modern layout.</p>
            <p class="sectionText">Clear, concise summary outlining career goals, relevant skills, and enthusiasm.</p>
            <p class="sectionText">Relevant experience through two marketing internships and leadership in student
              government.</p>
            <p class="sectionText">Strong education section with GPA and honors included.</p>
            <p class="sectionText">Well-chosen skills such as digital marketing tools and communication.</p>
          </div>
        </div>

        <div class="cvSection">
          <div class="sectionHeader">
            <div class="sectionIcon">
              <!-- Warning icon placeholder -->
              <div class="warningIconPlaceholder"></div>
            </div>
            <span class="sectionLabel">Areas for Improvement</span>
          </div>
          <div class="sectionContent">
            <p class="sectionText">Multiple typos and spelling errors (e.g., "solying," "oronented," "initiâives").</p>
            <p class="sectionText">Inaccurate or incomplete details, such as "Graduated: May 204" instead of 2024.</p>
            <p class="sectionText">Inconsistent formatting and punctuation in bullets and section alignment.</p>
            <p class="sectionText">Minor software name errors (e.g., "Cariva" should be "Canva," "Googe" → "Google").
            </p>
          </div>
        </div>

        <div class="cvSection">
          <div class="sectionHeader">
            <div class="sectionIcon">
              <!-- Success icon placeholder -->
              <div class="successIconPlaceholder"></div>
            </div>
            <span class="sectionLabel">Overall</span>
          </div>
          <div class="sectionContent">
            <p class="sectionText">A strong, entry-level CV with solid content and a professional look, but it needs
              proofreading and polishing to reflect the candidate's attention to detail.</p>
          </div>
        </div>
      </div>

      <div class="reviewActions">
        <button class="actionButton uploadButton">
          <div class="buttonContent">
            <!-- Upload icon placeholder -->
            <div class="buttonIcon"></div>
            <span class="buttonText">Upload New Document</span>
          </div>
        </button>
        <button class="actionButton regenerateButton">
          <div class="buttonContent">
            <!-- Regenerate icon placeholder -->
            <div class="buttonIcon"></div>
            <span class="buttonText">Regenerate Review</span>
          </div>
        </button>
      </div>
    </div>

    <div>
      <div class="insightsSection">
        <div class="sectionHeader">
          <div class="headerIcon">
            <!-- Insights icon placeholder -->
            <div class="iconPlaceholder"></div>
          </div>
          <h2 class="sectionTitle">Automated Review Insights</h2>
        </div>

        <div class="insightsList">
          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Warning icon placeholder -->
                <div class="warningIconPlaceholder"></div>
              </div>
              <span class="insightLabel">Clarity Issue:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">Phrases are too vague; include specific examples and details.</p>
            </div>
          </div>

          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Warning icon placeholder -->
                <div class="warningIconPlaceholder"></div>
              </div>
              <span class="insightLabel">Impact Missing:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">Your CV lacks quantifiable achievements; add numbers/results.</p>
            </div>
          </div>

          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Warning icon placeholder -->
                <div class="warningIconPlaceholder"></div>
              </div>
              <span class="insightLabel">Repetitive Language:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">Avoid overused intro phrases; make your opening unique.</p>
            </div>
          </div>

          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Success icon placeholder -->
                <div class="successIconPlaceholder"></div>
              </div>
              <span class="insightLabel">Formatting:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">Structure and layout are clear and easy to read.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="suggestionsSection">
        <div class="sectionHeader">
          <div class="headerIcon">
            <!-- Suggestions icon placeholder -->
            <div class="iconPlaceholder"></div>
          </div>
          <h2 class="sectionTitle">Suggestions for Improvement</h2>
        </div>

        <div class="suggestionsList">
          <div class="suggestionItem">
            <p class="suggestionText">Replace generic phrases with unique, role-specific language.</p>
          </div>
          <div class="suggestionItem">
            <p class="suggestionText">Add specific measurable results for each experience.</p>
          </div>
          <div class="suggestionItem">
            <p class="suggestionText">Use active verbs to clearly convey your contributions.</p>
          </div>
          <div class="suggestionItem">
            <p class="suggestionText">Briefly mention how your skills align with the company's goals.</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { ref } from 'vue';

// State to track active tab
const activeTab = ref('letter'); // Default to 'letter' tab
</script>

<style lang="scss" scoped>
.letterPage {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  padding: 24px 120px;
  box-sizing: border-box;
  gap: 24px;

  .reviewSection {
    width: 708px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
    padding: 32px 24px;
    margin-bottom: 24px;
    box-sizing: border-box;
    height: fit-content;

    .reviewHeader {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 24px;

      .reviewIcon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        .iconPlaceholder {
          width: 18px;
          height: 24px;
          background-color: #1A4D8C;
          /* Icon placeholder */
        }
      }

      .reviewTitle {
        font-weight: 700;
        font-size: 24px;
        line-height: 1em;
        letter-spacing: -0.04583em;
        color: #1A4D8C;
        margin: 0;
      }
    }

    .reviewNav {
      padding: 0 12px;
      margin-bottom: 38px;

      .navTabs {
        display: flex;
        align-items: center;
        gap: 24px;

        .navTab {
          height: 38px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          min-width: 81px;

          &.navTabActive {
            border-bottom: 2px solid #1A4D8C;
          }

          .tabText {
            font-size: 16px;
            line-height: 1.21em;
            padding: 7px 0;

            &.tabInactive {
              font-weight: 400;
              color: #6B7B8F;
            }

            &.tabActive {
              font-weight: 700;
              color: #1A4D8C;
            }
          }
        }
      }
    }

    .letterContent {
      background-color: #F5F7FA;
      border: 1px solid #E8ECF0;
      border-radius: 8px;
      padding: 56px 24px;
      margin-bottom: 24px;
      position: relative;

      .letterGreeting {
        font-weight: 400;
        font-size: 16px;
        line-height: 1em;
        color: #1F2D3D;
        margin-bottom: 40px;
      }

      .letterParagraph {
        position: relative;
        margin-bottom: 40px;

        .paragraphText {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5em;
          color: #1F2D3D;
          position: relative;

          .highlightedText {
            background-color: rgba(255, 157, 92, 0.2);
            padding: 0 2px;
          }

          .highlightIcon {
            display: inline-block;
            width: 18px;
            height: 18px;
            background-color: #FF9D5C;
            position: absolute;
            margin-left: 4px;
            /* Icon placeholder */
          }
        }

        .tooltip {
          position: absolute;
          top: 24px;
          left: 30px;
          z-index: 10;

          .tooltipPointer {
            width: 34px;
            height: 46px;
            position: relative;

            .pointerPlaceholder {
              width: 15px;
              height: 16px;
              background-color: #DC0000;
              position: absolute;
              top: 12px;
              left: 9px;
              /* Tooltip pointer placeholder */
            }
          }

          .tooltipContent {
            background-color: #212121;
            border-radius: 4px;
            padding: 8px;
            box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.12);
            max-width: 280px;

            .tooltipText {
              font-weight: 400;
              font-size: 14px;
              line-height: 1.14em;
              color: #FFFFFF;
            }
          }
        }
      }

      .letterSignature {
        display: flex;
        flex-direction: column;
        gap: 8px;

        .signatureText {
          font-weight: 400;
          font-size: 16px;
          line-height: 1em;
          color: #1F2D3D;
        }
      }
    }

    .cvContent {
      background-color: #F5F7FA;
      border: 1px solid #E8ECF0;
      border-radius: 8px;
      padding: 56px 24px;
      margin-bottom: 24px;

      .cvTitle {
        font-weight: 400;
        font-size: 16px;
        line-height: 1em;
        color: #1F2D3D;
        margin-bottom: 40px;
      }

      .cvSection {
        margin-bottom: 40px;

        .sectionHeader {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 16px;

          .sectionIcon {
            width: 18px;
            height: 18px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .warningIconPlaceholder {
              width: 18px;
              height: 18px;
              background-color: #FF9D5C;
              /* Warning icon placeholder */
            }

            .successIconPlaceholder {
              width: 18px;
              height: 18px;
              background-color: #3CB371;
              /* Success icon placeholder */
            }
          }

          .sectionLabel {
            font-weight: 700;
            font-size: 16px;
            line-height: 1.5em;
            color: #1F2D3D;
          }
        }

        .sectionContent {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .sectionText {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5em;
            color: #1F2D3D;
            margin: 0;
          }
        }
      }
    }

    .reviewActions {
      display: flex;
      align-items: center;
      gap: 24px;
      justify-content: center;

      .actionButton {
        height: 40px;
        border-radius: 40px;
        padding: 10px 16px;
        cursor: pointer;
        box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);

        &.uploadButton {
          background-color: #17B0A7;
          border: none;
        }

        &.regenerateButton {
          background-color: transparent;
          border: 1px solid #1A4D8C;
        }

        .buttonContent {
          display: flex;
          align-items: center;
          gap: 8px;

          .buttonIcon {
            width: 18px;
            height: 18px;
            background-color: #FFFFFF;
            /* For uploadButton icon */

            .regenerateButton & {
              background-color: #1A4D8C;
              /* For regenerateButton icon */
            }
          }

          .buttonText {
            font-weight: 400;
            font-size: 16px;
            line-height: 1em;
            color: #FFFFFF;

            .regenerateButton & {
              color: #1A4D8C;
            }
          }
        }
      }
    }
  }

  .insightsSection {
    width: 468px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
    padding: 32px 24px;
    box-sizing: border-box;
    margin-bottom: 24px;
    align-self: flex-end;

    .sectionHeader {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 40px;

      .headerIcon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        .iconPlaceholder {
          width: 24px;
          height: 24px;
          background-color: #17B0A7;
          /* Icon placeholder */
        }
      }

      .sectionTitle {
        font-weight: 700;
        font-size: 20px;
        line-height: 1em;
        letter-spacing: -0.055em;
        color: #1A4D8C;
        margin: 0;
      }
    }

    .insightsList {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .insightItem {
        display: flex;
        flex-direction: column;
        gap: 4px;

        .insightHeader {
          display: flex;
          align-items: center;
          gap: 8px;

          .insightIcon {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;

            .warningIconPlaceholder {
              width: 18px;
              height: 18px;
              background-color: #FF9D5C;
              /* Warning icon placeholder */
            }

            .successIconPlaceholder {
              width: 20px;
              height: 20px;
              background-color: #3CB371;
              /* Success icon placeholder */
            }
          }

          .insightLabel {
            font-weight: 600;
            font-size: 16px;
            line-height: 1em;
            color: #1F2D3D;
          }
        }

        .insightContent {
          padding-left: 40px;

          .insightText {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.5em;
            color: #6B7B8F;
            margin: 0;
          }
        }
      }
    }
  }

  .suggestionsSection {
    width: 468px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
    padding: 32px 24px;
    box-sizing: border-box;
    align-self: flex-end;

    .sectionHeader {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 40px;

      .headerIcon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;

        .iconPlaceholder {
          width: 18px;
          height: 24px;
          background-color: #17B0A7;
          /* Icon placeholder */
        }
      }

      .sectionTitle {
        font-weight: 700;
        font-size: 20px;
        line-height: 1em;
        letter-spacing: -0.055em;
        color: #1A4D8C;
        margin: 0;
      }
    }

    .suggestionsList {
      display: flex;
      flex-direction: column;
      gap: 12px;

      .suggestionItem {
        padding-left: 40px;

        .suggestionText {
          font-weight: 400;
          font-size: 16px;
          line-height: 1.5em;
          color: #1F2D3D;
          margin: 0;
        }
      }
    }
  }
}
</style>
