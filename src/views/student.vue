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
        <div class="tableContent">
          <div class="tableColumn">
            <div class="tableHeader">
              <span>Name</span>
            </div>
            <div class="tableCell">
              <div class="userInfo">
                <div class="userAvatar"></div>
                <span class="userName">Sophia Green</span>
              </div>
            </div>
            <div class="tableCell alternate">
              <div class="userInfo">
                <div class="userAvatar alternate"></div>
                <span class="userName">Liam Chen</span>
              </div>
            </div>
            <div class="tableCell">
              <div class="userInfo">
                <div class="userAvatar"></div>
                <span class="userName">Sophia Green</span>
              </div>
            </div>
            <div class="tableCell alternate">
              <div class="userInfo">
                <div class="userAvatar alternate"></div>
                <span class="userName">Liam Chen</span>
              </div>
            </div>
            <div class="tableCell">
              <div class="userInfo">
                <div class="userAvatar"></div>
                <span class="userName">Sophia Green</span>
              </div>
            </div>
            <div class="tableCell alternate">
              <div class="userInfo">
                <div class="userAvatar alternate"></div>
                <span class="userName">Liam Chen</span>
              </div>
            </div>
          </div>

          <div class="tableColumn">
            <div class="tableHeader">
              <span>Email</span>
            </div>
            <div class="tableCell">
              <span class="emailText">sophia.green@email.edu</span>
            </div>
            <div class="tableCell alternate">
              <span class="emailText">sophia.green@email.edu</span>
            </div>
            <div class="tableCell">
              <span class="emailText">sophia.green@email.edu</span>
            </div>
            <div class="tableCell alternate">
              <span class="emailText">sophia.green@email.edu</span>
            </div>
            <div class="tableCell">
              <span class="emailText">sophia.green@email.edu</span>
            </div>
            <div class="tableCell alternate">
              <span class="emailText">sophia.green@email.edu</span>
            </div>
          </div>

          <div class="tableColumn">
            <div class="tableHeader">
              <span>Group</span>
            </div>
            <div class="tableCell">
              <div class="groupSelect">
                <span>Business</span>
                <div class="selectIcon"></div>
              </div>
            </div>
            <div class="tableCell alternate">
              <div class="groupSelect">
                <span>Business</span>
                <div class="selectIcon"></div>
              </div>
            </div>
            <div class="tableCell">
              <div class="groupSelect">
                <span>Business</span>
                <div class="selectIcon"></div>
              </div>
            </div>
            <div class="tableCell alternate">
              <div class="groupSelect">
                <span>Business</span>
                <div class="selectIcon"></div>
              </div>
            </div>
            <div class="tableCell">
              <div class="groupSelect">
                <span>Business</span>
                <div class="selectIcon"></div>
              </div>
            </div>
            <div class="tableCell alternate">
              <div class="groupSelect">
                <span>Business</span>
                <div class="selectIcon"></div>
              </div>
            </div>
          </div>

          <div class="tableColumn">
            <div class="tableHeader">
              <span>Last Active</span>
            </div>
            <div class="tableCell">
              <span class="lastActiveText">5 hours ago</span>
            </div>
            <div class="tableCell alternate">
              <span class="lastActiveText">5 hours ago</span>
            </div>
            <div class="tableCell">
              <span class="lastActiveText">5 hours ago</span>
            </div>
            <div class="tableCell alternate">
              <span class="lastActiveText">5 hours ago</span>
            </div>
            <div class="tableCell">
              <span class="lastActiveText">5 hours ago</span>
            </div>
            <div class="tableCell alternate">
              <span class="lastActiveText">5 hours ago</span>
            </div>
          </div>

          <div class="tableColumn">
            <div class="tableHeader">
              <span>Interview Count</span>
            </div>
            <div class="tableCell">
              <span class="countText">4</span>
            </div>
            <div class="tableCell alternate">
              <span class="countText">7</span>
            </div>
            <div class="tableCell">
              <span class="countText">8</span>
            </div>
            <div class="tableCell alternate">
              <span class="countText">23</span>
            </div>
            <div class="tableCell">
              <span class="countText">21</span>
            </div>
            <div class="tableCell alternate">
              <span class="countText">21</span>
            </div>
          </div>

          <div class="tableColumn">
            <div class="tableHeader">
              <span>Actions</span>
            </div>
            <div class="tableCell">
              <span class="actionLink">Reset Password</span>
            </div>
            <div class="tableCell alternate">
              <span class="actionLink">Reset Password</span>
            </div>
            <div class="tableCell">
              <span class="actionLink">Reset Password</span>
            </div>
            <div class="tableCell alternate">
              <span class="actionLink">Reset Password</span>
            </div>
            <div class="tableCell">
              <span class="actionLink">Reset Password</span>
            </div>
            <div class="tableCell alternate">
              <span class="actionLink">Reset Password</span>
            </div>
          </div>
        </div>

        <div class="tablePagination">
          <div class="paginationInfo">
            <span>Showing</span>
            <span class="boldText">1-4</span>
            <span>of</span>
            <span class="boldText">32</span>
            <span>students</span>
          </div>

          <div class="paginationControls">
            <button class="paginationButton">
              <div class="arrowIcon prev"></div>
            </button>
            <button class="paginationButton active">
              <span>1</span>
            </button>
            <button class="paginationButton">
              <span>2</span>
            </button>
            <button class="paginationButton">
              <span>3</span>
            </button>
            <button class="paginationButton">
              <span>4</span>
            </button>
            <button class="paginationButton">
              <div class="arrowIcon next"></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// Component logic can be added here
</script>

<style lang="scss" scoped>
.studentPage {
  width: 100%;
  min-height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  padding: 24px 0;
  box-sizing: border-box;

  .contentContainer {
    max-width: 1200px;
    margin: 0 auto;

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
      overflow: hidden;

      .tableContent {
        display: flex;
        width: 100%;

        .tableColumn {
          &:first-child {
            width: 174px;
          }

          &:nth-child(2) {
            width: 227px;
          }

          &:nth-child(3) {
            width: 198px;
          }

          &:nth-child(4) {
            width: 166px;
          }

          &:nth-child(5) {
            width: 174px;
          }

          &:last-child {
            width: 213px;
          }

          .tableHeader {
            height: 56px;
            background-color: #F7F9FC;
            display: flex;
            align-items: center;

            span {
              font-size: 16px;
              font-weight: 700;
              line-height: 16px;
              color: #1A4D8C;
              margin-left: 12px;
            }
          }

          .tableCell {
            height: 56px;
            background-color: #FFFFFF;
            display: flex;
            align-items: center;

            &.alternate {
              background-color: #F5F7FA;
            }

            .userInfo {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-left: 12px;

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
              margin-left: 12px;
            }

            .groupSelect {
              width: 173px;
              height: 36px;
              border: 1px solid #E8ECF0;
              border-radius: 8px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              margin-left: 12px;

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
              margin-left: 12px;
            }

            .countText {
              font-size: 16px;
              font-weight: 400;
              line-height: 19.36px;
              color: #6B7B8F;
              margin-left: 12px;
            }

            .actionLink {
              font-size: 16px;
              font-weight: 400;
              line-height: 16px;
              color: #1A4D8C;
              margin-left: 12px;
              cursor: pointer;
            }
          }
        }
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

        .paginationControls {
          display: flex;
          align-items: center;

          .paginationButton {
            width: 32px;
            height: 40px;
            display: flex;
            justify-content: center;
            align-items: center;
            background: transparent;
            border: none;
            cursor: pointer;

            &.active {
              background-color: #F5F7FA;
              border-radius: 4px;
            }

            span {
              font-size: 16px;
              font-weight: 400;
              line-height: 19.36px;
              color: #1A4D8C;
            }

            .arrowIcon {
              width: 7px;
              height: 12px;
              background-color: #1A4D8C;

              &.prev {
                clip-path: polygon(100% 0, 0 50%, 100% 100%);
              }

              &.next {
                clip-path: polygon(0 0, 100% 50%, 0 100%);
              }
            }
          }
        }
      }
    }
  }
}
</style>
