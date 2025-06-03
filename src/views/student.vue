<template>
  <div class="studentPage">
    <div class="contentContainer">
      <div class="pageHeader">
        <div class="headerInfo">
          <h1 class="pageTitle">Student Management</h1>
          <p class="pageDescription">Monitor and manage student accounts</p>
        </div>
        <button class="addStudentButton">
          <div class="buttonIcon">
            <div class="iconPlaceholder"></div>
          </div>
          <span>Add Student</span>
        </button>
      </div>

      <div class="studentTable">
        <el-table :data="tableData" style="width: 100%" :stripe="true">
          <el-table-column label="Name">
            <template #default="scope">
              <div class="userInfo">
                <div :class="['userAvatar', scope.$index % 2 === 1 ? 'alternate' : '']"></div>
                <span class="userName">{{ scope.row.name }}</span>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="Email">
            <template #default="scope">
              <span class="emailText">{{ scope.row.email }}</span>
            </template>
          </el-table-column>

          <el-table-column label="Group">
            <template #default="scope">
              <div class="groupSelect">
                <span>{{ scope.row.group }}</span>
                <div class="selectIcon"></div>
              </div>
            </template>
          </el-table-column>

          <el-table-column label="Last Active">
            <template #default="scope">
              <span class="lastActiveText">{{ scope.row.lastActive }}</span>
            </template>
          </el-table-column>

          <el-table-column label="Interview Count">
            <template #default="scope">
              <span class="countText">{{ scope.row.interviewCount }}</span>
            </template>
          </el-table-column>

          <el-table-column label="Actions">
            <template #default>
              <span class="actionLink">Reset Password</span>
            </template>
          </el-table-column>
        </el-table>

        <div class="tablePagination">
          <div class="paginationInfo">
            <span>Showing</span>
            <span class="boldText">{{ (currentPage - 1) * pageSize + 1 }}-{{ Math.min(currentPage * pageSize, total)
            }}</span>
            <span>of</span>
            <span class="boldText">{{ total }}</span>
            <span>students</span>
          </div>

          <el-pagination v-model:current-page="currentPage" v-model:page-size="pageSize" :page-sizes="[10, 20, 30, 40]"
            layout="prev, pager, next" :total="total" @size-change="handleSizeChange"
            @current-change="handleCurrentChange" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

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
const currentPage = ref(1);
const pageSize = ref(10);
const total = ref(32);

const handleSizeChange = (val) => {
  pageSize.value = val;
};

const handleCurrentChange = (val) => {
  currentPage.value = val;
};
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

        .buttonIcon {
          width: 18px;
          height: 14.4px;
          display: flex;
          justify-content: center;
          align-items: center;

          .iconPlaceholder {
            width: 18px;
            height: 14.4px;
            background-color: #FFFFFF;
            border-radius: 2px;
          }
        }

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

::v-deep(.el-table th.el-table__cell) {
  background-color: #F7F9FC;
  padding: 18px 12px;
}
</style>
