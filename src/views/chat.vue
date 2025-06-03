<template>
  <div class="chatPage">
    <div class="chatSection">
      <div class="chatContent">
        <div class="chatContainer">
          <div class="chatHeader">
            <div class="userSelectorContainer">
              <div class="userSelector">
                <div class="userOption" :class="{ active: activeUser === 'interviewer' }"
                  @click="setActiveUser('interviewer')">
                  <div class="userAvatar">
                    <!-- Interviewer avatar placeholder -->
                    <div class="avatarPlaceholder interviewer"></div>
                  </div>
                  <div class="userLabel">
                    <div class="labelWrapper">
                      <div class="labelIcon">
                        <!-- User icon placeholder -->
                        <div class="iconPlaceholder"></div>
                      </div>
                      <span class="labelText">Interviewer</span>
                    </div>
                  </div>
                </div>

                <div class="userOption" :class="{ active: activeUser === 'you' }" @click="setActiveUser('you')">
                  <div class="userAvatar">
                    <!-- User avatar placeholder -->
                    <div class="avatarPlaceholder user"></div>
                  </div>
                  <div class="userLabel">
                    <div class="labelWrapper">
                      <div class="labelIcon">
                        <!-- User icon placeholder -->
                        <div class="iconPlaceholder"></div>
                      </div>
                      <span class="labelText">You</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="chatMessages">
                <!-- Interviewer message -->
                <div class="messageRow interviewer">
                  <div class="messageAvatar">
                    <div class="avatarBorder">
                      <!-- Interviewer avatar placeholder -->
                      <div class="avatarPlaceholder interviewer"></div>
                    </div>
                  </div>
                  <div class="messageContent">
                    <p class="messageText">Hi Alex, hope you're doing great! Are you ready to start the interview?</p>
                  </div>
                </div>

                <!-- User message -->
                <div class="messageRow user">
                  <div class="messageContent">
                    <p class="messageText">Yes</p>
                  </div>
                  <div class="messageAvatar">
                    <div class="avatarBorder">
                      <!-- User avatar placeholder -->
                      <div class="avatarPlaceholder user"></div>
                    </div>
                  </div>
                </div>

                <!-- Interviewer message -->
                <div class="messageRow interviewer">
                  <div class="messageAvatar">
                    <div class="avatarBorder">
                      <!-- Interviewer avatar placeholder -->
                      <div class="avatarPlaceholder interviewer"></div>
                    </div>
                  </div>
                  <div class="messageContent">
                    <p class="messageText">
                      Hi Alex, I see that you've applied for the position of Marketing Associate. I'm Lukas Schneider,
                      Marketing Manager at Horizon Brands. I've been here for a few years leading digital campaigns, I'm
                      going to run the interview today. It should last between 45 and 60 minutes. If you're ok we can
                      then
                      start. Can you please begin with introducing yourself?
                    </p>
                  </div>
                </div>
                <div class="messageRow interviewer">
                  <div class="messageAvatar">
                    <div class="avatarBorder">
                      <!-- Interviewer avatar placeholder -->
                      <div class="avatarPlaceholder interviewer"></div>
                    </div>
                  </div>
                  <div class="messageContent">
                    <p class="messageText">
                      Hi Alex, I see that you've applied for the position of Marketing Associate. I'm Lukas Schneider,
                      Marketing Manager at Horizon Brands. I've been here for a few years leading digital campaigns, I'm
                      going to run the interview today. It should last between 45 and 60 minutes. If you're ok we can
                      then
                      start. Can you please begin with introducing yourself?
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div class="questionSection">
              <div class="questionHeader">
                <div class="questionTag">
                  Behavioral
                </div>
                <h2 class="questionText">Tell me about a time you worked successfully in a team. What was your approach?
                </h2>
              </div>

              <div class="responseArea">
                <textarea class="responseInput" v-model="chatMessages"
                  placeholder="Type your response here..."></textarea>
                <div class="responseActions">
                  <button class="recordButton">
                    <div class="buttonContent">
                      <div class="buttonIcon">
                        <div class="iconPlaceholder"></div>
                      </div>
                      <span class="buttonText">Record your answer</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div class="questContent"></div>

          </div>

          <button class="submitButton" :class="{ active: chatMessages.trim().length > 0 }">
            Submit Answer
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const activeUser = ref('interviewer');
const chatMessages = ref("")

const setActiveUser = (user) => {
  activeUser.value = user;
};
</script>

<style lang="scss" scoped>
.chatPage {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  .chatSection {
    width: 976px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 16px rgba(26, 77, 140, 0.08);
    padding: 24px;
    box-sizing: border-box;
    height: 100%;

    .chatContent {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 24px;
      height: 100%;

      .chatContainer {
        width: 928px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;


        .chatHeader {
          background-color: #F5F7FA;
          border: 1px solid #E8ECF0;
          border-radius: 8px;
          position: relative;
          overflow: hidden;
          flex: 1;
          display: flex;
          flex-direction: column;
          width: 100%;
          height: 100%;

          .userSelectorContainer {
            width: 100%;
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: center;
            overflow-y: auto;
            min-height: 0;
          }

          .userSelector {
            display: flex;
            flex-direction: row;
            align-items: center;
            gap: 24px;
            padding: 16px 0;
            height: fit-content;

            .userOption {
              width: 252px;
              height: 162px;
              border-radius: 8px;
              position: relative;
              cursor: pointer;

              &.active {
                border: 1px solid #1A4D8C;
                box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
              }

              .userAvatar {
                width: 250px;
                height: 160px;
                position: absolute;
                top: 1px;
                left: 1px;

                .avatarPlaceholder {
                  width: 100%;
                  height: 100%;

                  &.interviewer {
                    background-color: #808080;
                    /* Placeholder for interviewer image */
                  }

                  &.user {
                    background-color: #A0A0A0;
                    /* Placeholder for user image */
                  }
                }
              }

              .userLabel {
                position: absolute;
                bottom: 9px;
                left: 9px;
                background-color: #1A4D8C;
                opacity: 0.9;
                border-radius: 4px;
                padding: 5px 8px;
                min-width: 59px;

                .labelWrapper {
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  gap: 8px;

                  .labelIcon {
                    width: 11.375px;
                    height: 13px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .iconPlaceholder {
                      width: 11.375px;
                      height: 13px;
                      background-color: #FFFFFF;
                    }
                  }

                  .labelText {
                    color: #FFFFFF;
                    font-size: 12px;
                    font-weight: 400;
                    line-height: 1.21em;
                  }
                }
              }
            }
          }

          .chatMessages {
            padding: 0 24px;
            display: flex;
            flex-direction: column;
            gap: 16px;
            width: 100%;
            box-sizing: border-box;

            .messageRow {
              display: flex;
              gap: 8px;
              max-width: 880px;

              &.interviewer {
                align-self: flex-start;
              }

              &.user {
                flex-direction: row-reverse;
                align-self: flex-end;
              }

              .messageAvatar {
                width: 32px;
                height: 32px;

                .avatarBorder {
                  width: 32px;
                  height: 32px;
                  border-radius: 50%;
                  border: 1px solid #FFFFFF;
                  box-shadow: 0px 2px 3px rgba(26, 77, 140, 0.08);
                  overflow: hidden;

                  .avatarPlaceholder {
                    width: 35px;
                    height: 35px;
                    margin-top: -1.5px;
                    margin-left: -1px;

                    &.interviewer {
                      background-color: #808080;
                      /* Placeholder for interviewer image */
                    }

                    &.user {
                      background-color: #A0A0A0;
                      /* Placeholder for user image */
                    }
                  }
                }
              }

              .messageContent {
                background-color: #17B0A7;
                border-radius: 4px;
                padding: 8px 16px;
                box-shadow: 0px 4px 8px rgba(26, 77, 140, 0.04);

                .messageText {
                  color: #FFFFFF;
                  font-size: 14px;
                  font-weight: 400;
                  line-height: 1.57em;
                  margin: 0;
                  max-width: 572px;
                }
              }
            }
          }

          .questionSection {
            padding: 24px;
            display: flex;
            flex-direction: column;
            gap: 24px;
            height: 244px;
            background-color: #F5F7FA;
            z-index: 10;
            flex-shrink: 0;
          }

          .questionHeader {
            display: flex;
            flex-direction: column;
            gap: 8px;

            .questionTag {
              background-color: #F1FCFA;
              border-radius: 4px;
              height: 28px;
              color: #3CB371;
              line-height: 28px;
              text-align: center;
              font-size: 12px;
              font-weight: 700;
              width: 86px;
            }

            .questionText {
              color: #1A4D8C;
              font-size: 20px;
              font-weight: 600;
              line-height: 28px;
              margin: 0;
            }
          }

          .responseArea {
            width: 100%;
            height: 160px;
            background-color: #FFFFFF;
            border: 1px solid #E8ECF0;
            border-radius: 8px;
            position: relative;
            box-shadow: 0px 4px 8px rgba(26, 77, 140, 0.04);

            .responseInput {
              width: 100%;
              height: 100%;
              border: none;
              background: transparent;
              padding: 12px 16px;
              box-sizing: border-box;
              font-family: 'Inter', sans-serif;
              font-size: 14px;
              font-weight: 400;
              line-height: 1.57em;
              color: #1F2D3D;
              resize: none;
              outline: none;

              &::placeholder {
                color: #ADAEBC;
              }
            }

            .responseActions {
              position: absolute;
              bottom: 12px;
              right: 16px;

              .recordButton {
                width: 190px;
                height: 40px;
                border-radius: 40px;
                border: 1px solid #17B0A7;
                background-color: transparent;
                cursor: pointer;
                display: flex;
                align-items: center;
                justify-content: center;

                .buttonContent {
                  display: flex;
                  align-items: center;
                  gap: 8px;
                  padding: 0 16px;

                  .buttonIcon {
                    width: 13.5px;
                    height: 18px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .iconPlaceholder {
                      width: 12.375px;
                      height: 18px;
                      background-color: #17B0A7;
                    }
                  }

                  .buttonText {
                    color: #17B0A7;
                    font-size: 14px;
                    font-weight: 400;
                    line-height: 1em;
                  }
                }
              }
            }
          }

          .questContent {
            display: none;
          }

        }

        .submitButton {
          width: 368px;
          height: 44px;
          background-color: #A3B8D1;
          border-radius: 40px;
          border: none;
          box-shadow: 0px 2px 4px rgba(26, 77, 140, 0.1);
          margin-top: 24px;
          cursor: pointer;
          color: #FFFFFF;
          font-size: 16px;
          line-height: 44px;
          text-align: center;

          &.active {
            background-color: #1A4D8C;
          }
        }
      }
    }
  }
}
</style>
