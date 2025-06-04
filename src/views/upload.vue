<template>
  <div class="uploadPage">

    <div class="uploadSection">
      <div class="uploadHeader">
        <div class="uploadSteps">
          <div class="uploadStepItem">
            <div class="uploadStepNumber uploadStepActive">
              <span>1</span>
            </div>
            <div class="uploadStepLabel uploadStepLabelActive">Télécharger</div>
          </div>
          <div class="uploadStepDivider"></div>
          <div class="uploadStepItem">
            <div class="uploadStepNumber">
              <span>2</span>
            </div>
            <div class="uploadStepLabel">Révision</div>
          </div>
          <div class="uploadStepDivider"></div>
          <div class="uploadStepItem">
            <div class="uploadStepNumber">
              <span>3</span>
            </div>
            <div class="uploadStepLabel">Entretien</div>
          </div>
        </div>
      </div>

      <div class="uploadContent">
        <div class="uploadTitleGroup">
          <h1 class="uploadTitle">Téléversez vos documents</h1>
          <p class="uploadDescription">
            Ajoutez votre CV, lettre de motivation ou description de poste pour que Prepwise personnalise votre
            expérience d’entretien.
          </p>
        </div>

        <div class="uploadDropzone" @click="triggerFileInput" @dragover.prevent="onDragOver"
          @dragleave.prevent="onDragLeave" @drop.prevent="onDrop" :class="{ 'dragover': isDragging }">
          <input type="file" ref="fileInput" style="display: none" @change="handleFileUpload" accept=".pdf,.docx"
            multiple />
          <div class="uploadDropzoneContent">
            <div class="uploadDropzoneIcon">
              <FileTextOutlined style="font-size: 28px; color: #1A4D8C;" />
            </div>
            <div class="uploadDropzoneText">
              <div class="uploadDropzoneTitle">Glisser-déposer pour télécharger</div>
              <div class="uploadDropzoneSubtitle">ou <span>parcourir les fichiers</span> (PDF, DOCX)</div>
            </div>
          </div>
        </div>

        <div class="uploadFileList" v-if="fileList.length > 0">
          <div v-for="(file, index) in fileList" :key="index" class="uploadFileItem"
            :class="{ 'uploadFileProgress': file.uploading }">
            <div class="uploadFileInfo">
              <div class="uploadFileIcon">
                <FileTextOutlined style="font-size: 18px; color: #6B7B8F;" />
              </div>
              <div class="uploadFileName">{{ file.name }}</div>
            </div>
            <div class="uploadFileDelete" @click="removeFile(index)">
              <CloseOutlined style="font-size: 14px; color: #6B7B8F;" />
            </div>
            <div class="uploadFileProgressBar" v-if="file.uploading" :style="{ width: file.progress + '%' }"></div>
          </div>
        </div>

        <button class="uploadNextButton" :disabled="fileList.length === 0" @click="gouploadlist">Suivant</button>
      </div>
    </div>
  </div>
</template>

<script setup>
const fileInput = ref(null);
const fileList = ref([]);
const isDragging = ref(false);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const files = event.target.files;
  if (files.length) {
    uploadFiles(files);
  }
  event.target.value = '';
};

const onDragOver = () => {
  isDragging.value = true;
};

const onDragLeave = () => {
  isDragging.value = false;
};

const onDrop = (event) => {
  isDragging.value = false;
  const files = event.dataTransfer.files;
  if (files.length) {
    uploadFiles(files);
  }
};

const uploadFiles = (files) => {
  Array.from(files).forEach(file => {
    const fileObj = {
      name: file.name,
      size: file.size,
      type: file.type,
      uploading: true,
      progress: 0,
      file: file
    };

    fileList.value.push(fileObj);
    const fileIndex = fileList.value.length - 1;

    simulateUploadProgress(fileIndex);
  });
};

const simulateUploadProgress = (fileIndex) => {
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 10) + 5;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      setTimeout(() => {
        if (fileList.value[fileIndex]) {
          fileList.value[fileIndex].uploading = false;
          fileList.value[fileIndex].progress = 100;
        }
      }, 500);
    }

    if (fileList.value[fileIndex]) {
      fileList.value[fileIndex].progress = progress;
    } else {
      clearInterval(interval);
    }
  }, 300);
};

const removeFile = (index) => {
  fileList.value.splice(index, 1);
};

const router = useRouter()

function gouploadlist() {
  if (fileList.value.length > 0) {
    router.push("/uploadlist")
  }
}
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
    overflow-y: auto;
    height: 100%;

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
        cursor: pointer;
        transition: all 0.3s ease;

        &.dragover {
          background-color: #EAF0F7;
          border-color: #17B0A7;
        }

        .uploadDropzoneContent {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;

          .uploadDropzoneIcon {
            width: 28.5px;
            height: 38px;
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

              span {
                color: #17B0A7;
                text-decoration: underline;
              }
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
          position: relative;

          .uploadFileInfo {
            display: flex;
            align-items: center;
            gap: 8px;

            .uploadFileIcon {
              width: 18px;
              height: 24px;
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
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 1;
          }

          .uploadFileProgressBar {
            position: absolute;
            bottom: -8px;
            left: 0;
            height: 2px;
            background-color: #17B0A7;
            transition: width 0.3s ease;
          }
        }

        .uploadFileProgress {
          padding-bottom: 10px;
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

        &:disabled {
          background-color: #B3C2D8;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>
