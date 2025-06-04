<template>
  <div class="letterPage">
    <div class="reviewSection">
      <div class="reviewHeader">
        <div class="reviewIcon">
          <!-- Document icon placeholder -->
          <FileTextOutlined style="font-size: 24px; color: #1A4D8C;" />
        </div>
        <h1 class="reviewTitle">Révision CV & lettre de motivation</h1>
      </div>

      <div class="reviewNav">
        <div class="navTabs">
          <div class="navTab" :class="{ navTabActive: activeTab === 'cv' }" @click="activeTab = 'cv'">
            <span class="tabText" :class="{ tabActive: activeTab === 'cv', tabInactive: activeTab !== 'cv' }">Révision
              CV</span>
          </div>
          <div class="navTab" :class="{ navTabActive: activeTab === 'letter' }" @click="activeTab = 'letter'">
            <span class="tabText"
              :class="{ tabActive: activeTab === 'letter', tabInactive: activeTab !== 'letter' }">Révision lettre de
              motivation</span>
          </div>
        </div>
      </div>

      <!-- Cover Letter Content -->
      <div v-if="activeTab === 'letter'" class="letterContent">
        <div class="letterGreeting">
          Cher recruteur,
        </div>

        <div class="letterParagraph">
          <div class="paragraphText">
            Je vous écris pour exprimer
            <a-tooltip title="Phrase trop utilisée : essayez de rendre votre introduction plus originale."
              placement="bottom">
              <div class="highlightIcon">
                <ExclamationCircleFilled style="color: #FF9D5C;font-size: 18px;" />
              </div>
            </a-tooltip> mon intérêt pour le poste d’analyste marketing chez Acme Corp.
          </div>
        </div>

        <div class="letterParagraph">
          <div class="paragraphText">
            Dans mon précédent poste
            <div class="highlightIcon">
              <img :src="flash" alt="">
            </div> , j’ai mené diverses missions, comme la coordination de campagnes et la réalisation
            d'études de marché. Je pense que mes compétences seraient un atout pour votre équipe .
            <a-tooltip title="Phrase trop utilisée : essayez de rendre votre introduction plus originale."
              placement="bottom">
              <div class="highlightIcon">
                <ExclamationCircleFilled style="color: #FF9D5C;font-size: 18px;" />
              </div>
            </a-tooltip>
          </div>
        </div>

        <div class="letterParagraph">
          <div class="paragraphText">
            Dans mon CV, j’ai mentionné des réalisations, mais sans indiquer d’impact chiffré.
            <a-tooltip title="Phrase trop utilisée : essayez de rendre votre introduction plus originale."
              placement="bottom">
              <div class="highlightIcon">
                <ExclamationCircleFilled style="color: #FF9D5C;font-size: 18px;" />
              </div>
            </a-tooltip>
          </div>
        </div>

        <div class="letterSignature">
          <div class="signatureText">Merci d’avoir examiné ma candidature.</div>
          <div class="signatureText">Cordialement</div>
          <div class="signatureText">Alex Taylor</div>
        </div>
      </div>

      <!-- CV Content -->
      <div v-if="activeTab === 'cv'" class="cvContent">
        <div class="cvTitle">
          Révision de CV – Alex Taylor (avec des puces)
        </div>

        <div class="cvSection">
          <div class="sectionHeader">
            <div class="sectionIcon">
              <!-- Success icon placeholder -->
              <div class="successIconPlaceholder">
                <CheckCircleFilled style="color: #17B0A7;font-size: 18px;" />
              </div>
            </div>
            <span class="sectionLabel">Points forts</span>
          </div>
          <div class="sectionContent">
            <p class="sectionText">Design attrayant avec photo professionnelle et mise en page moderne. Résumé clair et
              concis présentant les objectifs de carrière, les compétences clés et la motivation. Expérience pertinente
              avec deux stages en marketing et un rôle de leader dans le gouvernement étudiant. Section éducation solide
              incluant le GPA et les distinctions. Compétences bien choisies, notamment les outils de marketing digital
              et la communication.</p>
          </div>
        </div>

        <div class="cvSection">
          <div class="sectionHeader">
            <div class="sectionIcon">
              <!-- Warning icon placeholder -->
              <div class="warningIconPlaceholder">
                <ExclamationCircleFilled style="color: #FF9D5C;font-size: 18px;" />
              </div>
            </div>
            <span class="sectionLabel">Axes d’amélioration</span>
          </div>
          <div class="sectionContent">
            <p class="sectionText">Plusieurs fautes de frappe et d’orthographe (ex. : « solying », « oronented », «
              initiâives »). Détails incorrects ou incomplets, comme « Graduated : May 204 » au lieu de 2024. Formatage
              et ponctuation incohérents dans les listes à puces et l’alignement des sections. Petites erreurs dans les
              noms de logiciels (ex. : « Cariva » au lieu de « Canva », « Googe » au lieu de « Google »).</p>
          </div>
        </div>

        <div class="cvSection">
          <div class="sectionHeader">
            <div class="sectionIcon">
              <!-- Success icon placeholder -->
              <div class="successIconPlaceholder">
                <CheckCircleFilled style="color: #17B0A7;font-size: 18px;" />
              </div>
            </div>
            <span class="sectionLabel">Globalement</span>
          </div>
          <div class="sectionContent">
            <p class="sectionText">Un CV solide pour un profil débutant, avec un contenu pertinent et un aspect
              professionnel, mais qui nécessite une relecture et une finition pour mieux refléter le souci du détail du
              candidat.</p>
          </div>
        </div>
      </div>

      <div class="reviewActions">
        <button class="actionButton uploadButton" @click="goUpload">
          <div class="buttonContent">
            <!-- Upload icon placeholder -->
            <img :src="upload" alt="">
            <span class="buttonText">Télécharger un nouveau document</span>
          </div>
        </button>
        <button class="actionButton regenerateButton">
          <div class="buttonContent">
            <!-- Regenerate icon placeholder -->
            <img :src="reload" alt="">
            <span class="buttonText" style="color: #1A4D8C;">Regénérer la Révision</span>
          </div>
        </button>
      </div>
    </div>

    <div>
      <div class="insightsSection">
        <div class="sectionHeader">
          <div class="headerIcon">
            <div class="iconPlaceholder"></div>
          </div>
          <h2 class="sectionTitle">Analyse automatisée</h2>
        </div>

        <div class="insightsList">
          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Warning icon placeholder -->
                <div class="warningIconPlaceholder">
                  <img :src="flash" alt="">

                </div>
              </div>
              <span class="insightLabel">Problème de clarté:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">Les phrases sont trop vagues ; ajoutez des exemples et des détails précis.</p>
            </div>
          </div>

          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Warning icon placeholder -->
                <div class="warningIconPlaceholder">

                  <img :src="ruler" alt="">
                </div>
              </div>
              <span class="insightLabel">Manque d’impact:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">Votre CV manque de résultats chiffrés ; ajoutez des chiffres et des résultats.</p>
            </div>
          </div>

          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Warning icon placeholder -->
                <div class="warningIconPlaceholder">

                  <ExclamationCircleFilled style="color: #FF9D5C;font-size: 18px;" />
                </div>

              </div>
              <span class="insightLabel">Langage répétitif:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">Évitez les phrases d’intro trop utilisées ; rendez votre ouverture unique.</p>
            </div>
          </div>

          <div class="insightItem">
            <div class="insightHeader">
              <div class="insightIcon">
                <!-- Success icon placeholder -->
                <div class="successIconPlaceholder">
                  <CheckOutlined style="color: #17B0A7;font-size: 18px;" />
                </div>
              </div>
              <span class="insightLabel">Mise en forme:</span>
            </div>
            <div class="insightContent">
              <p class="insightText">La structure et la mise en page sont claires et faciles à lire.</p>
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
          <h2 class="sectionTitle">Suggestions d’amélioration</h2>
        </div>

        <div class="suggestionsList">
          <div class="suggestionItem">
            <p class="suggestionText">
              Remplacez les phrases génériques par un <span>langage précis et adapté au poste.</span></p>
          </div>
          <div class="suggestionItem">
            <p class="suggestionText">
              Ajoutez des <span>résultats mesurables précis</span> pour chaque expérience.</p>
          </div>
          <div class="suggestionItem">
            <p class="suggestionText">
              Utilisez des <span>verbes d’action</span> pour exprimer clairement vos contributions.</p>
          </div>
          <div class="suggestionItem">
            <p class="suggestionText">
              Mentionnez brièvement <span>comment vos compétences s’alignent</span> avec les objectifs de l’entreprise.
            </p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
import { getAssetsFile } from "@/utils/getAssets"

const flash = getAssetsFile("flash.png", "letter")
const ruler = getAssetsFile("ruler.png", "letter")
const upload = getAssetsFile("upload.png", "letter")
const reload = getAssetsFile("reload.png", "letter")

const activeTab = ref('letter');

const router = useRouter()

function goUpload() {
  router.push("/upload")
}
</script>

<style lang="scss" scoped>
.letterPage {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
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
            font-family: 'Inter', sans-serif;

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
      padding: 56px 22px;
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
          line-height: 24px;
          color: #1F2D3D;
          position: relative;
          letter-spacing: 0;

          .highlightedText {
            background-color: rgba(255, 157, 92, 0.2);
            padding: 0 2px;
          }

          .highlightIcon {
            display: inline-block;
            width: 18px;
            height: 18px;
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
              /* Warning icon placeholder */
            }

            .successIconPlaceholder {
              width: 18px;
              height: 18px;
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
          background: url("../assets/images/letter/search.png") no-repeat center center;
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
              width: 32px;
              height: 32px;
              background-color: #FFF5EE;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;

              img {
                width: 16px;
                height: auto;
              }

              /* Warning icon placeholder */
            }

            .successIconPlaceholder {
              width: 32px;
              height: 32px;
              background-color: #F1FCFA;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
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

          span {
            color: #17B0A7;
          }
        }
      }
    }
  }
}
</style>
