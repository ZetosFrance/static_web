<template>
  <div class="homePage">

    <!-- Hero Section -->
    <section class="heroSection">
      <div class="heroBackground">
        <div class="heroBackgroundImage"></div>
        <div class="heroBackgroundOverlay"></div>
      </div>
      <div class="heroContent">
        <div class="heroTextContainer">
          <h1 class="heroTitle">{{ $t("KEY_HOME_TEXT1") }}</h1>
          <p class="heroDescription">
            {{ $t("KEY_HOME_TEXT2") }}
          </p>
        </div>
        <button class="heroButton">
          <div class="heroButtonContent" @click="goUpload">
            <div class="heroButtonIcon">
              <div class="heroButtonIconSvg"></div>
            </div>
            <span>{{ $t("KEY_HOME_TEXT3") }}</span>
          </div>
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <div class="featuresSection">
      <div class="featureCard">
        <div class="featureIconContainer">
          <div class=" featureIconFeedback"></div>
        </div>
        <h3 class="featureTitle">{{ $t("KEY_HOME_TEXT4") }}</h3>
        <p class="featureDescription">
          {{ $t("KEY_HOME_TEXT5") }}
        </p>
      </div>

      <div class="featureCard">
        <div class="featureIconContainer">
          <div class=" featureIconProgress"></div>
        </div>
        <h3 class="featureTitle">{{ $t("KEY_HOME_TEXT6") }}</h3>
        <p class="featureDescription">
          {{ $t("KEY_HOME_TEXT7") }}
        </p>
      </div>

      <div class="featureCard">
        <div class="featureIconContainer">
          <div class=" featureIconSimulation"></div>
        </div>
        <h3 class="featureTitle">{{ $t("KEY_HOME_TEXT8") }}</h3>
        <p class="featureDescription">
          {{ $t("KEY_HOME_TEXT9") }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
const router = useRouter()

function goUpload() {
  router.push("/upload")
}
</script>

<style lang="scss" scoped>
.homePage {
  width: 100%;
  height: 100%;
  font-family: 'Inter', sans-serif;
  position: relative;
  display: flex;
  flex-direction: column;

  /* Hero Section */
  .heroSection {
    width: 100%;
    height: 520px;
    position: relative;

    .heroBackground {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .heroBackgroundImage {
        width: 100%;
        height: 100%;
        background: url('../assets/images/home.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        /* Placeholder for the actual image */
      }

      .heroBackgroundOverlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #1A4D8C;
        opacity: 0.4;
        z-index: 1;

      }
    }

    .heroContent {
      position: relative;
      z-index: 1;
      max-width: 638px;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 auto;
      padding-top: 140px;

      .heroTextContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 28px;
        margin-bottom: 56px;

        .heroTitle {
          font-weight: 700;
          font-size: 40px;
          line-height: 1em;
          color: #FFFFFF;
          text-align: center;
          margin: 0;
        }

        .heroDescription {
          font-weight: 400;
          font-size: 18px;
          line-height: 1.5em;
          color: #FFFFFF;
          text-align: center;
          margin: 0;
        }
      }

      .heroButton {
        width: fit-content;
        height: 56px;
        background-color: #17B0A7;
        border-radius: 40px;
        border: none;
        box-shadow: 0px 4px 20px 0px rgba(26, 77, 140, 0.12);
        cursor: pointer;
        padding: 0;

        .heroButtonContent {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 18.5px 20px;

          .heroButtonIcon {
            width: 13.5px;
            height: 18px;

            .heroButtonIconSvg {
              width: 15px;
              height: 17px;
              background: url('../assets/images/home/play.png');
              background-size: cover;
              background-position: center;
              background-repeat: no-repeat;
              /* Placeholder for SVG icon */
            }
          }

          span {
            font-weight: 400;
            font-size: 16px;
            line-height: 1.21em;
            color: #FFFFFF;
          }
        }
      }
    }
  }

  /* Features Section */
  .featuresSection {
    display: flex;
    align-items: center;
    gap: 56px;
    justify-content: center;
    margin-top: -80px;
    padding: 0 120px;
    z-index: 2;

    .featureCard {
      width: 288px;
      height: 252px;
      background-color: #FFFFFF;
      border-radius: 8px;
      box-shadow: 0px 4px 16px 0px rgba(26, 77, 140, 0.08);
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 24px;
      box-sizing: border-box;

      .featureIconContainer {
        width: 64px;
        height: 64px;
        background-color: #F7F9FC;
        border-radius: 9999px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 16px;


        .featureIconFeedback {
          background: url('../assets/images/home/bot.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 30px;
          height: 24px;
          /* Placeholder for icon */
        }

        .featureIconProgress {
          background: url('../assets/images/home/progress.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          width: 24px;
          height: 22px;
          /* Placeholder for icon */
        }

        .featureIconSimulation {
          background: url('../assets/images/home/member.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          /* Placeholder for icon */
          width: 30px;
          height: 24px;
        }
      }

      .featureTitle {
        font-weight: 700;
        font-size: 18px;
        line-height: 1.44em;
        color: #1A4D8C;
        text-align: center;
        margin: 0 0 17px 0;
      }

      .featureDescription {
        font-weight: 400;
        font-size: 14px;
        line-height: 1.57em;
        color: #6B7B8F;
        text-align: center;
        margin: 0;
      }
    }
  }
}
</style>
