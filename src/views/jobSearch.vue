<template>
  <div class="jobRoleSelection">
    <div class="section">
      <div class="frame86">
        <div class="frame85">
          <h1 class="title">Pour quel poste postulez-vous ?</h1>
          <p class="subtitle">
            Sélectionnez votre poste pour personnaliser votre simulation d’entretien. Commencez à taper ou choisissez
            parmi les plus populaires ci-dessous.
          </p>
        </div>
        <div class="inputContainer">
          <div class="input">
            <input type="text" placeholder="e.g. Product Manager" />
          </div>
          <a-tooltip title="Vous n’avez pas téléchargé de description de poste avec votre CV et lettre de motivation."
            placement="bottom">
            <div class="searchIcon">
              <div class="iconPlaceholder"></div>
            </div>
          </a-tooltip>
        </div>
        <div class="iconCircle">
          <!-- Teal circle with icon placeholder -->
          <div class="iconPlaceholder"></div>
        </div>
        <div class="jobButtons">
          <div class="buttonRow">
            <button class="roleButton" v-for="(job, index) in jobRoles" :key="index"
              :class="{ active: selectedJobs === index }" @click="toggleJobSelection(index)">
              <div class="buttonIcon">
                <img :src="job.icon" alt="">
              </div>
              <span>{{ job.name }}</span>
            </button>
          </div>
        </div>
      </div>
      <button class="nextButton" :class="{ active: selectedJobs !== -1 }" @click="goChat">
        <span>Suivant</span>
        <div class="arrowIcon">
          <ArrowRightOutlined />
        </div>
      </button>
    </div>
  </div>
</template>

<script setup>
import { getAssetsFile } from "@/utils/getAssets";

const circle = getAssetsFile("circle.png", "job")
const pie = getAssetsFile("pie.png", "job")
const pm = getAssetsFile("pm.png", "job")
const dev = getAssetsFile("dev.png", "job")
const sound = getAssetsFile("sound.png", "job")

const jobRoles = ref([
  { icon: circle, name: "Audit Intern" },
  { icon: pie, name: "Financial Analyst" },
  { icon: pm, name: "Product Manager" },
  { icon: dev, name: "Software Engineer" },
  { icon: sound, name: "Marketing Associate" }
])


const selectedJobs = ref(-1);

const toggleJobSelection = (job) => {
  selectedJobs.value === job ? selectedJobs.value = -1 : selectedJobs.value = job;
};

const router = useRouter()

function goChat() {
  if (selectedJobs.value !== -1) {
    router.push("/chat")
  }
}
</script>

<style lang="scss" scoped>
.jobRoleSelection {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  .section {
    width: 976px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(26, 77, 140, 0.08);
    padding: 48px 32px;
    box-sizing: border-box;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;
    justify-content: space-between;

    .frame86 {
      width: 912px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;

      .frame85 {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;
        width: 100%;
        margin-top: 68px;

        .title {
          color: #1A4D8C;
          font-size: 24px;
          font-weight: 700;
          line-height: 24px;
          letter-spacing: -0.046em;
          text-align: center;
          margin: 0;
        }

        .subtitle {
          color: #6B7B8F;
          font-size: 14px;
          font-weight: 400;
          line-height: 22px;
          text-align: center;
          margin: 0;
        }
      }

      .inputContainer {
        width: 508px;
        height: 48px;
        position: relative;
        margin-top: 40px;

        .input {
          width: 100%;
          height: 100%;
          background-color: #F5F7FA;
          border: 1px solid #E8ECF0;
          border-radius: 40px;
          position: relative;

          input {
            width: 100%;
            height: 100%;
            border: none;
            background: transparent;
            padding: 0 48px 0 16px;
            font-size: 16px;
            line-height: 24px;
            color: #1F2D3D;
            outline: none;
            box-sizing: border-box;

            &::placeholder {
              color: #ADAEBC;
            }
          }
        }

        .searchIcon {
          position: absolute;
          top: 14px;
          right: 16px;
          width: 20px;
          height: 20px;
          display: flex;
          justify-content: center;
          align-items: center;

          .iconPlaceholder {
            width: 20px;
            height: 20px;
            background: url("@/assets/images/job/question.png") no-repeat;
            background-size: cover;
          }
        }
      }

      .iconCircle {
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 40px;
        height: 40px;
        background: url("@/assets/images/job/job.png") no-repeat;
        background-size: contain;
      }

      .jobButtons {
        display: flex;
        flex-direction: column;
        gap: 12px;
        margin-top: 32px;

        .buttonRow {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          width: 508px;

          .roleButton {
            height: 40px;
            padding: 12px 16px;
            border: 1px solid #17B0A7;
            border-radius: 40px;
            background-color: transparent;
            cursor: pointer;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            gap: 8px;

            &.active {
              background-color: #F1FCFA;
              border-color: #17B0A71A;
              box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
              border: 1px solid #17B0A7;
            }

            .buttonIcon {
              width: 15px;
              height: 15px;
              display: flex;
              justify-content: center;
              align-items: center;

              .iconPlaceholder {
                width: 15px;
                height: 15px;
                background-color: #17B0A7;
                border-radius: 2px;
              }
            }

            span {
              color: #17B0A7;
              font-size: 14px;
              font-weight: 400;
              line-height: 14px;
              white-space: nowrap;
            }
          }
        }
      }
    }

    .nextButton {
      width: 368px;
      height: 44px;
      background-color: #A3B8D1;
      border-radius: 40px;
      border: none;
      box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;

      &.active {
        background-color: #1A4D8C;
      }

      span {
        color: #FFFFFF;
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
      }

      .arrowIcon {
        width: 18px;
        height: 18px;
        display: flex;
        justify-content: center;
        align-items: center;

        .iconPlaceholder {
          width: 18px;
          height: 12px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
