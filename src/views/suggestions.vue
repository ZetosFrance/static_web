<template>
  <div class="suggestionsPage">
    <div class="contentContainer">
      <div class="headerCard">
        <div class="iconSection">
        </div>
        <div class="headerContent">
          <h1 class="title">Détails du feedback</h1>
          <p class="subtitle">
            Voici votre feedback détaillé généré par l’IA pour chaque question d’entretien. Consultez les suggestions
            d’amélioration et découvrez vos points de progression !
          </p>
        </div>
      </div>

      <div class="feedbackCards">
        <!-- First Question Card (Expanded) -->
        <div class="feedbackCard" :class="{ expanded: expandList.includes(0) }" @click="expandCard(0)">
          <div class="cardHeader">
            <h2 class="questionTitle">Q1. Parlez-moi de vous.</h2>
            <p class="questionType">Question d’adéquation</p>
          </div>
          <div :class="['expandIcon', expandList.includes(0) && 'expand']">
            <RightOutlined />
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon">
              </div>
              <h3 class="sectionTitle">Télécharger le PDF</h3>
            </div>
            <div class="answerBox">
              <p class="answerText">
                Je suis récemment diplômé en commerce de l’université Riverside, avec une expérience dans le
                gouvernement étudiant et deux stages en marketing. Je suis passionné par l’aide à la croissance des
                organisations et enthousiaste à l’idée de mettre mes compétences en pratique dans un environnement réel.
              </p>
            </div>
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon aiIcon">
                <div class="iconPlaceholder"></div>
              </div>
              <h3 class="sectionTitle aiTitle">Feedback IA</h3>
            </div>
            <p class="feedbackText">
              Bonne structure et parcours académique clair. Vous avez mis en avant des expériences pertinentes et montré
              de l’enthousiasme. Pensez à quantifier vos réussites pour plus d’impact.
            </p>
            <div class="improvementBox">
              <div class="improvementContent">
                <div class="improvementRow">
                  <div class="improvementIcon">
                    <ExclamationCircleFilled style="color: #FF9D5C;" />
                  </div>
                  <div class="improvementPoint">
                    <div class="pointMarker"></div>
                    <p class="pointText">Incluez une réussite avec des résultats précis (ex. : « augmentation de la
                      participation aux événements de 30 % »).
                    </p>
                  </div>
                </div>
                <div class="improvementRow noPoint">
                  <div class="pointMarker"></div>
                  <p class="pointText">Reliez brièvement votre expérience au poste visé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Second Question Card (Collapsed) -->
        <div class="feedbackCard" :class="{ expanded: expandList.includes(1) }" @click="expandCard(1)">
          <div class="cardHeader">
            <h2 class="questionTitle">Q2. Décrivez une situation où vous avez résolu un problème en équipe.</h2>
            <p class="questionType">Question comportementale</p>
          </div>
          <div :class="['expandIcon', expandList.includes(1) && 'expand']">
            <RightOutlined />
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon">
              </div>
              <h3 class="sectionTitle">Télécharger le PDF</h3>
            </div>
            <div class="answerBox">
              <p class="answerText">
                Je suis récemment diplômé en commerce de l’université Riverside, avec une expérience dans le
                gouvernement étudiant et deux stages en marketing. Je suis passionné par l’aide à la croissance des
                organisations et enthousiaste à l’idée de mettre mes compétences en pratique dans un environnement réel.
              </p>
            </div>
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon aiIcon">
                <div class="iconPlaceholder"></div>
              </div>
              <h3 class="sectionTitle aiTitle">Feedback IA</h3>
            </div>
            <p class="feedbackText">
              Bonne structure et parcours académique clair. Vous avez mis en avant des expériences pertinentes et montré
              de l’enthousiasme. Pensez à quantifier vos réussites pour plus d’impact.
            </p>
            <div class="improvementBox">
              <div class="improvementContent">
                <div class="improvementRow">
                  <div class="improvementIcon">
                    <ExclamationCircleFilled style="color: #FF9D5C;" />
                  </div>
                  <div class="improvementPoint">
                    <div class="pointMarker"></div>
                    <p class="pointText">Incluez une réussite avec des résultats précis (ex. : « augmentation de la
                      participation aux événements de 30 % »).
                    </p>
                  </div>
                </div>
                <div class="improvementRow noPoint">
                  <div class="pointMarker"></div>
                  <p class="pointText">Reliez brièvement votre expérience au poste visé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Third Question Card (Collapsed) -->
        <div class="feedbackCard" :class="{ expanded: expandList.includes(2) }" @click="expandCard(2)">
          <div class="cardHeader">
            <h2 class="questionTitle">Q3. Qu’est-ce qui vous intéresse dans ce poste ?</h2>
            <p class="questionType">Question sur l’adéquation</p>
          </div>
          <div :class="['expandIcon', expandList.includes(2) && 'expand']">
            <RightOutlined />
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon">
              </div>
              <h3 class="sectionTitle">Télécharger le PDF</h3>
            </div>
            <div class="answerBox">
              <p class="answerText">
                Je suis récemment diplômé en commerce de l’université Riverside, avec une expérience dans le
                gouvernement étudiant et deux stages en marketing. Je suis passionné par l’aide à la croissance des
                organisations et enthousiaste à l’idée de mettre mes compétences en pratique dans un environnement réel.
              </p>
            </div>
          </div>

          <div class="contentSection">
            <div class="sectionHeader">
              <div class="sectionIcon aiIcon">
                <div class="iconPlaceholder"></div>
              </div>
              <h3 class="sectionTitle aiTitle">Feedback IA</h3>
            </div>
            <p class="feedbackText">
              Bonne structure et parcours académique clair. Vous avez mis en avant des expériences pertinentes et montré
              de l’enthousiasme. Pensez à quantifier vos réussites pour plus d’impact.
            </p>
            <div class="improvementBox">
              <div class="improvementContent">
                <div class="improvementRow">
                  <div class="improvementIcon">
                    <ExclamationCircleFilled style="color: #FF9D5C;" />
                  </div>
                  <div class="improvementPoint">
                    <div class="pointMarker"></div>
                    <p class="pointText">Incluez une réussite avec des résultats précis (ex. : « augmentation de la
                      participation aux événements de 30 % »).
                    </p>
                  </div>
                </div>
                <div class="improvementRow noPoint">
                  <div class="pointMarker"></div>
                  <p class="pointText">Reliez brièvement votre expérience au poste visé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="downloadButton">
          <div class="buttonIcon">
          </div>
          <span>Télécharger le PDF</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
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
        width: 60px;
        height: 60px;
        margin-right: 16px;
        background: url("@/assets/images/suggestion/feedback.png") no-repeat;
        background-size: contain;
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
          line-height: 16px;
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
          height: fit-content;
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

          &.expand {
            transform: rotate(90deg);
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
              width: 13px;
              height: 14px;
              display: flex;
              background: url("@/assets/images/suggestion/user.png") no-repeat;
              background-size: contain;

              &.aiIcon {
                width: 13px;
                height: 14px;
                background: url("@/assets/images/home/bot.png") no-repeat;
                background-size: contain;
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
            background-color: #FF9D5C;
            border-radius: 8px;
            padding: 0 0 0 4px;
            box-sizing: border-box;

            .improvementContent {
              width: calc(100% - 2px);
              background-color: #FFF5EE;
              height: 100%;
              border-radius: 8px;
              padding: 12px 20px;
              box-sizing: border-box;
              margin-left: 2px;

              .improvementRow {
                display: flex;
                align-items: center;
                margin-bottom: 8px;
                gap: 8px;

                .improvementIcon {
                  width: 16px;
                  height: 16px;
                  margin-top: 3px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                }

                .improvementPoint {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                }

                &.noPoint {
                  margin-left: 24px;
                }

                .pointMarker {
                  width: 6px;
                  height: 6px;
                  background-color: #FF9D5C;
                  border-radius: 50%;
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
          background: url("@/assets/images/suggestion/download.png") no-repeat;
          background-size: contain;
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
