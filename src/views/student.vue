<template>
  <div class="studentPage">
    <div class="contentContainer">
      <div class="pageHeader">
        <div class="headerInfo">
          <h1 class="pageTitle">Gestion d'étudiants</h1>
          <p class="pageDescription">Monitor and manage student accounts</p>
        </div>
        <button class="addStudentButton">
          <img :src="invite" alt="">
          <span>Add Student</span>
        </button>
      </div>

      <div class="studentTable">
        <a-table :dataSource="tableData" :columns="columns" :pagination="false" :rowKey="record => record.email"
          :rowClassName="(record, index) => index % 2 === 0 ? 'evenRow' : 'oddRow'">
          <template #bodyCell="{ column, record }">
            <template v-if="column.key === 'name'">
              <div class="userInfo">
                <div :class="['userAvatar', tableData.indexOf(record) % 2 === 1 ? 'alternate' : '']"></div>
                <span class="userName">{{ record.name }}</span>
              </div>
            </template>

            <template v-if="column.key === 'group'">
              <div class="groupSelect">
                <span>{{ record.group }}</span>
                <div class="selectIcon"></div>
              </div>
            </template>

            <template v-if="column.key === 'actions'">
              <span class="actionLink">Reset Password</span>
            </template>
          </template>
        </a-table>

        <div class="tablePagination">
          <div class="paginationInfo">
            <span>Showing</span>
            <span class="boldText">{{ (current - 1) * pageSize + 1 }}-{{ Math.min(current * pageSize, total)
              }}</span>
            <span>of</span>
            <span class="boldText">{{ total }}</span>
            <span>students</span>
          </div>

          <a-pagination v-model:current="current" v-model:pageSize="pageSize" :total="total"
            @change="handleCurrentChange" @showSizeChange="handleSizeChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAssetsFile } from "@/utils/getAssets"

// Table columns
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
  },
  {
    title: 'Group',
    dataIndex: 'group',
    key: 'group',
  },
  {
    title: 'Last Active',
    dataIndex: 'lastActive',
    key: 'lastActive',
  },
  {
    title: 'Interview Count',
    dataIndex: 'interviewCount',
    key: 'interviewCount',
  },
  {
    title: 'Actions',
    key: 'actions',
  },
];

// 表格数据
const tableData = ref([
  {
    name: 'Sophia Green',
    email: 'sophia.green@email.edu',
    group: 'Business',
    lastActive: '5 hours ago',
    interviewCount: 4
  },
  {
    name: 'Liam Chen',
    email: 'sophia.green@email.edu',
    group: 'Business',
    lastActive: '5 hours ago',
    interviewCount: 7
  },
  {
    name: 'Sophia Green',
    email: 'sophia.green@email.edu',
    group: 'Business',
    lastActive: '5 hours ago',
    interviewCount: 8
  },
  {
    name: 'Liam Chen',
    email: 'sophia.green@email.edu',
    group: 'Business',
    lastActive: '5 hours ago',
    interviewCount: 23
  },
  {
    name: 'Sophia Green',
    email: 'sophia.green@email.edu',
    group: 'Business',
    lastActive: '5 hours ago',
    interviewCount: 21
  },
  {
    name: 'Liam Chen',
    email: 'sophia.green@email.edu',
    group: 'Business',
    lastActive: '5 hours ago',
    interviewCount: 21
  },
]);

// 分页相关
const current = ref(1);
const pageSize = ref(10);
const total = ref(32);

const handleSizeChange = (page, size) => {
  pageSize.value = size;
};

const handleCurrentChange = (page) => {
  current.value = page;
};

const invite = getAssetsFile("invite.png", "dashboard")

</script>

<style lang="scss" scoped>
.studentPage {
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

    .pageHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;

      .headerInfo {
        display: flex;
        flex-direction: column;
        gap: 16px;

        .pageTitle {
          font-size: 28px;
          font-weight: 700;
          line-height: 28px;
          color: #1A4D8C;
          margin: 0;
        }

        .pageDescription {
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          color: #6B7B8F;
          margin: 0;
        }
      }

      .addStudentButton {
        height: 40px;
        padding: 10px 16px;
        background-color: #1A4D8C;
        border: none;
        border-radius: 40px;
        display: flex;
        align-items: center;
        gap: 8px;
        box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
        cursor: pointer;

        span {
          font-size: 16px;
          font-weight: 400;
          line-height: 16px;
          color: #FFFFFF;
          white-space: nowrap;
        }
      }
    }

    .studentTable {
      background-color: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 4px 12px rgba(26, 77, 140, 0.08);
      overflow-y: auto;
      padding: 32px 24px;
      flex: 1;
      height: fit-content;

      :deep(.ant-table) {
        background: transparent;

        .ant-table-thead>tr>th {
          background: transparent;
          border-bottom: none;
          padding: 12px;
          color: #1A4D8C;
          background-color: #F7F9FC;
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
      }

      .userInfo {
        display: flex;
        align-items: center;
        gap: 12px;

        .userAvatar {
          width: 32px;
          height: 32px;
          background-color: #F0C3A0;
          border: 1px solid #E8ECF0;
          border-radius: 50%;

          &.alternate {
            background-color: #A0C3F0;
          }
        }

        .userName {
          font-size: 16px;
          font-weight: 700;
          line-height: 19.36px;
          color: #1F2D3D;
        }
      }

      .emailText {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        color: #6B7B8F;
      }

      .groupSelect {
        width: 173px;
        height: 36px;
        border: 1px solid #E8ECF0;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        span {
          font-size: 14px;
          font-weight: 400;
          line-height: 16.94px;
          color: #6B7B8F;
          margin-left: 12px;
        }

        .selectIcon {
          width: 9.51px;
          height: 5.71px;
          background-color: #6B7B8F;
          margin-right: 12px;
          clip-path: polygon(0 0, 100% 0, 50% 100%);
        }
      }

      .lastActiveText {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        color: #6B7B8F;
      }

      .countText {
        font-size: 16px;
        font-weight: 400;
        line-height: 19.36px;
        color: #6B7B8F;
      }

      .actionLink {
        font-size: 16px;
        font-weight: 400;
        line-height: 16px;
        color: #1A4D8C;
        cursor: pointer;
      }

      .tablePagination {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 24px;

        .paginationInfo {
          display: flex;
          align-items: center;
          gap: 8px;

          span {
            font-size: 16px;
            font-weight: 400;
            line-height: 16px;
            color: #6B7B8F;
          }

          .boldText {
            font-weight: 700;
            color: #1A4D8C;
          }
        }
      }
    }
  }
}

::v-deep(.ant-table-wrapper .ant-table-thead>tr>th) {
  &::before {
    display: none;
  }
}

::v-deep(.ant-pagination .ant-pagination-item-active) {
  background-color: #F5F7FA;
  color: #1A4D8C;
  border: none;

  a {
    color: #1A4D8C;
    font-weight: 700;
  }
}
</style>
