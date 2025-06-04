<template>
  <div class="uploadlistPage">
    <div class="welcomeSection">
      <h1 class="welcomeTitle">Content de te revoir, <span>Alex!</span></h1>
    </div>

    <div class="practiceSection">
      <div class="practiceContent">
        <div class="practiceInfo">
          <div class="practiceIcon">
            <div class="iconWrapper">
              <img :src="flash" alt="">
            </div>
          </div>
          <div class="practiceText">
            <h2 class="practiceTitle">Prêt à t’entraîner ?</h2>
            <p class="practiceDescription">Lancez dès maintenant une nouvelle simulation d’entretien assistée par IA.
            </p>
          </div>
        </div>
        <div class="practiceButton">
          <div class="buttonContent">
            <div class="buttonIcon">
              <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5 7.13397C14.1667 7.51888 14.1667 8.48112 13.5 8.86602L1.5 15.7942C0.833334 16.1791 0 15.698 0 14.9282L0 1.0718C0 0.302 0.833333 -0.179051 1.5 0.205749L13.5 7.13397Z"
                  fill="white" />
              </svg>
            </div>
            <span class="buttonText" @click="goSearch">Commencer l’entretien</span>
          </div>
        </div>
      </div>
    </div>

    <div class="sessionsSection">
      <h2 class="sessionsTitle">Recent Sessions</h2>
      <a-table :dataSource="tableData" :columns="columns" :pagination="false"
        :rowClassName="(record, index) => index % 2 === 0 ? 'oddRow' : 'evenRow'">
        <template #bodyCell="{ column, text, record }">
          <template v-if="column.key === 'score'">
            <div class="scoreDisplay">
              <img v-if="record.score === 83" :src="greenprogress" class="progressImage" alt="Green progress" />
              <img v-if="record.score === 65" :src="orangeprogress" class="progressImage" alt="Orange progress" />
              <span :class="['scoreValue', record.score === 83 ? 'greenScore' : 'orangeScore']">{{ record.score
                }}</span>

            </div>
          </template>
          <template v-if="column.key === 'action'">
            <span class="actionLink" @click="goLetter">Voir</span>
          </template>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script setup>
import { getAssetsFile } from "@/utils/getAssets"

const flash = getAssetsFile("flash.png")
const orangeprogress = getAssetsFile("orangeprogress.png")
const greenprogress = getAssetsFile("greenprogress.png")

const columns = [
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Role',
    dataIndex: 'role',
    key: 'role',
  },
  {
    title: 'Score',
    dataIndex: 'score',
    key: 'score',
  },
  {
    title: 'Action',
    key: 'action',
  }
];

// Table data
const tableData = [
  { key: '1', date: '2024-05-21', role: 'Marketing Analyst', score: 83 },
  { key: '2', date: '2024-05-21', role: 'Software Intern', score: 65 },
  { key: '3', date: '2024-05-21', role: 'Finance Trainee', score: 83 },
  { key: '4', date: '2024-05-21', role: 'Sales Assistant', score: 65 },
  { key: '5', date: '2024-05-21', role: 'Data Researcher', score: 83 },
  { key: '6', date: '2024-05-21', role: 'Comms Intern', score: 65 },
  { key: '7', date: '2024-05-21', role: 'Project Support', score: 83 },
  { key: '8', date: '2024-05-21', role: 'Comms Intern', score: 65 },
  { key: '9', date: '2024-05-21', role: 'Marketing Analyst', score: 83 },
];

const router = useRouter()

function goLetter() {
  router.push("/letter")
}

function goSearch() {
  router.push("/jobSearch")
}
</script>

<style lang="scss" scoped>
.uploadlistPage {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .welcomeSection {
    width: 100%;
    max-width: 1200px;
    margin-top: 40px;

    .welcomeTitle {
      font-weight: 700;
      font-size: 24px;
      line-height: 1em;
      letter-spacing: -0.04583em;
      color: #1A4D8C;
      margin: 0;

      span {
        color: #17B0A7;
      }
    }
  }

  .practiceSection {
    width: 100%;
    max-width: 1200px;
    margin-top: 24px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);

    .practiceContent {
      padding: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;

      .practiceInfo {
        display: flex;
        align-items: center;
        gap: 16px;

        .practiceIcon {
          width: 56px;
          height: 56px;
          background-color: #E8ECF0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;

          .iconWrapper {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }

        .practiceText {
          display: flex;
          flex-direction: column;
          gap: 8px;

          .practiceTitle {
            font-weight: 700;
            font-size: 18px;
            line-height: 1em;
            color: #1A4D8C;
            margin: 0;
          }

          .practiceDescription {
            font-weight: 400;
            font-size: 14px;
            line-height: 1em;
            color: #6B7B8F;
            margin: 0;
          }
        }
      }

      .practiceButton {
        background-color: #17B0A7;
        border-radius: 40px;
        padding: 10px 16px;
        box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
        cursor: pointer;

        .buttonContent {
          display: flex;
          align-items: center;
          gap: 8px;

          .buttonIcon {
            width: 13.5px;
            height: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .buttonText {
            font-weight: 400;
            font-size: 16px;
            line-height: 1em;
            color: #FFFFFF;
          }
        }
      }
    }
  }

  .sessionsSection {
    width: 100%;
    max-width: 1200px;
    margin-top: 24px;
    background-color: #FFFFFF;
    border-radius: 8px 8px;
    box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
    padding: 32px 24px;
    box-sizing: border-box;

    .sessionsTitle {
      font-weight: 700;
      font-size: 20px;
      line-height: 1em;
      letter-spacing: -0.055em;
      color: #1A4D8C;
      margin: 0 0 24px 0;
    }

    // Style overrides for ant-design-vue table
    :deep(.ant-table) {
      background: transparent;

      .ant-table-thead>tr>th {
        background: transparent;
        border-bottom: none;
        padding: 12px;
        color: #6B7B8F;
        font-weight: 700;
        font-size: 16px;
      }

      .ant-table-tbody>tr>td {
        border-bottom: none;
        padding: 12px;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.21em;
        color: #1F2D3D;
      }

      .ant-table-tbody>tr.oddRow>td {
        background-color: #F5F7FA;
      }

      .ant-table-tbody>tr.evenRow>td {
        background-color: #FFFFFF;
      }

      .ant-table-tbody>tr:hover>td {
        background-color: rgba(23, 176, 167, 0.05);
      }
    }

    .scoreDisplay {
      display: flex;
      align-items: center;
      gap: 4px;

      .scoreIcon {
        width: 16px;
        height: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .scoreValue {
        font-weight: 400;
        font-size: 16px;
        line-height: 1em;

        &.greenScore {
          color: #3CB371;
        }

        &.orangeScore {
          color: #FF9D5C;
        }
      }

      .progressImage {
        height: 12px;
        width: 12px;
      }
    }

    .actionLink {
      font-weight: 400;
      font-size: 16px;
      line-height: 1em;
      color: #17B0A7;
      cursor: pointer;
    }
  }
}

::v-deep(.ant-table-wrapper .ant-table-thead>tr>th) {
  &::before {
    display: none;
  }
}
</style>
