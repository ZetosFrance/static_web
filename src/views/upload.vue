<template>
  <div class="uploadPage">

    <div class="uploadSection">
      <div class="uploadHeader">
        <div class="uploadSteps">
          <div class="uploadStepItem">
            <div class="uploadStepNumber uploadStepActive">
              <span>1</span>
            </div>
            <div class="uploadStepLabel uploadStepLabelActive">Upload</div>
          </div>
          <div class="uploadStepDivider"></div>
          <div class="uploadStepItem">
            <div class="uploadStepNumber">
              <span>2</span>
            </div>
            <div class="uploadStepLabel">Review</div>
          </div>
          <div class="uploadStepDivider"></div>
          <div class="uploadStepItem">
            <div class="uploadStepNumber">
              <span>3</span>
            </div>
            <div class="uploadStepLabel">Interview</div>
          </div>
        </div>
      </div>

      <div class="uploadContent">
        <div class="uploadTitleGroup">
          <h1 class="uploadTitle">Upload Your Documents</h1>
          <p class="uploadDescription">
            Add your CV、cover letter or job description to help Prepwise personalize your interview experience.
          </p>
        </div>

        <div class="uploadDropzone">
          <div class="uploadDropzoneContent">
            <div class="uploadDropzoneIcon">
              <!-- Document upload icon placeholder -->
            </div>
            <div class="uploadDropzoneText">
              <div class="uploadDropzoneTitle">Drag & drop to upload</div>
              <div class="uploadDropzoneSubtitle">or browse files (PDF, DOCX)</div>
            </div>
          </div>
        </div>

        <div class="uploadFileList">
          <div class="uploadFileItem">
            <div class="uploadFileInfo">
              <div class="uploadFileIcon">
                <!-- Document icon placeholder -->
              </div>
              <div class="uploadFileName">CV .docx</div>
            </div>
            <div class="uploadFileDelete">
              <!-- Delete icon placeholder -->
            </div>
          </div>

          <div class="uploadFileItem">
            <div class="uploadFileInfo">
              <div class="uploadFileIcon">
                <!-- Document icon placeholder -->
              </div>
              <div class="uploadFileName">Cover Letter .docx</div>
            </div>
            <div class="uploadFileDelete">
              <!-- Delete icon placeholder -->
            </div>
          </div>

          <div class="uploadFileProgress">
            <div class="uploadFileItem">
              <div class="uploadFileInfo">
                <div class="uploadFileIcon">
                  <!-- Document icon placeholder -->
                </div>
                <div class="uploadFileName">Job Description .docx</div>
              </div>
              <div class="uploadFileDelete">
                <!-- Delete icon placeholder -->
              </div>
            </div>
            <div class="uploadFileProgressBar"></div>
          </div>
        </div>

        <button class="uploadNextButton">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
// Import components
// The Header and Footer components are assumed to be globally registered
</script>

<style lang="scss" scoped>
.uploadPage {
  width: 100%;
  height: 100%;
  background-color: #F7F9FC;
  font-family: 'Inter', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  .uploadSection {
    width: 976px;
    background-color: #FFFFFF;
    border-radius: 8px;
    box-shadow: 0px 4px 16px 0px rgba(26, 77, 140, 0.08);
    overflow: hidden;

    .uploadHeader {
      height: 84px;
      border-bottom: 1px solid #E8ECF0;
      display: flex;
      align-items: center;
      padding: 0 80px;

      .uploadSteps {
        display: flex;
        align-items: center;
        width: 100%;
        position: relative;

        .uploadStepItem {
          display: flex;
          align-items: center;
          gap: 8px;

          .uploadStepNumber {
            width: 32px;
            height: 32px;
            border-radius: 50%;
            border: 2px solid #E8ECF0;
            display: flex;
            align-items: center;
            justify-content: center;

            span {
              font-weight: 500;
              font-size: 14px;
              line-height: 1.21em;
              color: #1F2D3D;
            }

            &.uploadStepActive {
              background-color: #17B0A7;
              border: 1px solid #1A4D8C;

              span {
                color: #FFFFFF;
              }
            }
          }

          .uploadStepLabel {
            font-weight: 400;
            font-size: 16px;
            line-height: 1em;
            color: #6B7B8F;

            &.uploadStepLabelActive {
              font-weight: 700;
              color: #1A4D8C;
            }
          }
        }

        .uploadStepDivider {
          width: 241px;
          height: 4px;
          background-color: #E8ECF0;
          margin: 0 8px;
        }
      }
    }

    .uploadContent {
      padding: 48px 32px;

      .uploadTitleGroup {
        text-align: center;
        margin-bottom: 48px;

        .uploadTitle {
          font-weight: 700;
          font-size: 24px;
          line-height: 1em;
          letter-spacing: -4.58%;
          color: #1A4D8C;
          margin-bottom: 20px;
        }

        .uploadDescription {
          font-weight: 400;
          font-size: 14px;
          line-height: 1.57em;
          color: #6B7B8F;
          max-width: 912px;
          margin: 0 auto;
        }
      }

      .uploadDropzone {
        width: 100%;
        height: 240px;
        background-color: #F5F7FA;
        border: 2px dashed #1A4D8C;
        border-radius: 8px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;

        .uploadDropzoneContent {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;

          .uploadDropzoneIcon {
            width: 28.5px;
            height: 38px;
            background-color: #1A4D8C;
            /* Placeholder for the actual icon */
          }

          .uploadDropzoneText {
            text-align: center;

            .uploadDropzoneTitle {
              font-weight: 600;
              font-size: 16px;
              line-height: 1em;
              color: #1A4D8C;
              margin-bottom: 8px;
            }

            .uploadDropzoneSubtitle {
              font-weight: 400;
              font-size: 12px;
              line-height: 1.17em;
              color: #000000;
            }
          }
        }
      }

      .uploadFileList {
        display: flex;
        flex-direction: column;
        gap: 16px;
        margin-bottom: 24px;

        .uploadFileItem {
          display: flex;
          justify-content: space-between;
          align-items: center;

          .uploadFileInfo {
            display: flex;
            align-items: center;
            gap: 8px;

            .uploadFileIcon {
              width: 18px;
              height: 24px;
              background-color: #6B7B8F;
              /* Placeholder for the actual icon */
            }

            .uploadFileName {
              font-weight: 400;
              font-size: 16px;
              line-height: 1.21em;
              color: #1F2D3D;
            }
          }

          .uploadFileDelete {
            width: 18px;
            height: 18px;
            background-color: #CED4DA;
            /* Placeholder for delete icon */
            cursor: pointer;
          }
        }

        .uploadFileProgress {
          display: flex;
          flex-direction: column;
          gap: 4px;

          .uploadFileProgressBar {
            width: 646px;
            height: 2px;
            background-color: #17B0A7;
            margin-left: 32px;
          }
        }
      }

      .uploadNextButton {
        width: 368px;
        height: 44px;
        background-color: #1A4D8C;
        border-radius: 40px;
        border: none;
        color: #FFFFFF;
        font-weight: 400;
        font-size: 16px;
        line-height: 1em;
        cursor: pointer;
        display: block;
        margin: 0 auto;
        box-shadow: 0px 2px 4px 0px rgba(26, 77, 140, 0.1);
      }
    }
  }
}
</style>
