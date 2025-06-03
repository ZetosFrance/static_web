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
          <h1 class="heroTitle">Train Smarter. Interview Better.</h1>
          <p class="heroDescription">
            Prepwise is your AI-powered practice partner for real-world job interviews.
            Get instant, friendly feedback and track your progress over time.
          </p>
        </div>
        <button class="heroButton">
          <div class="heroButtonContent">
            <div class="heroButtonIcon">
              <div class="heroButtonIconSvg"></div>
            </div>
            <span>Start Interview Simulation</span>
          </div>
        </button>
      </div>
    </section>

    <!-- Features Section -->
    <div class="featuresSection">
      <div class="featureCard">
        <div class="featureIconContainer">
          <div class="featureIcon featureIconFeedback"></div>
        </div>
        <h3 class="featureTitle">AI Practice & Feedback</h3>
        <p class="featureDescription">
          Experience realistic interviews with instant, actionable feedback to help you grow confidently.
        </p>
      </div>

      <div class="featureCard">
        <div class="featureIconContainer">
          <div class="featureIcon featureIconProgress"></div>
        </div>
        <h3 class="featureTitle">Track Your Progress</h3>
        <p class="featureDescription">
          Visual dashboards show your strengths and areas to improve, so you always know where you stand.
        </p>
      </div>

      <div class="featureCard">
        <div class="featureIconContainer">
          <div class="featureIcon featureIconSimulation"></div>
        </div>
        <h3 class="featureTitle">Real-World Simulation</h3>
        <p class="featureDescription">
          Practise in a lifelike interview environment to build your confidence before the real thing.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
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
    margin-top: -20px;

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
        background-color: #1A4D8C;
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
        width: 257px;
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
              width: 13.5px;
              height: 15.75px;
              background-color: #FFFFFF;
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

        .featureIcon {
          width: 28px;
          height: 28px;

          &.featureIconFeedback {
            background-color: #17B0A7;
            /* Placeholder for icon */
          }

          &.featureIconProgress {
            background-color: #3CB371;
            /* Placeholder for icon */
          }

          &.featureIconSimulation {
            background-color: #4F6FE5;
            /* Placeholder for icon */
          }
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
