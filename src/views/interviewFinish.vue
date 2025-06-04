<template>
  <section class="interviewFinish">
    <div class="interviewContent">
      <div class="statusContainer">
        <div class="statusCircle">
        </div>
        <div class="textContainer">
          <h1 class="title">Entretien terminé</h1>
          <p class="description">
            Félicitations pour avoir terminé votre simulation d’entretien ! Vous êtes un pas de plus vers votre emploi
            de rêve. 🎉
          </p>
        </div>
      </div>
      <button class="primaryButton" @click="goScore">
        Obtenez votre Feedback
      </button>
    </div>
  </section>
</template>

<script setup>
const router = useRouter()

function goScore() {
  router.push("/score")
}
</script>

<style lang="scss" scoped>
.interviewFinish {
  width: 976px;
  height: 708px;
  background-color: #FFFFFF;
  border-radius: 8px;
  box-shadow: 0px 4px 16px 0px rgba(26, 77, 140, 0.08);
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;

  .interviewContent {
    width: 480px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .statusContainer {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 32px;

      .statusCircle {
        width: 80px;
        height: 80px;
        background: url("@/assets/images/div.png") no-repeat;
        background-size: contain;
      }

      .textContainer {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 16px;

        .title {
          width: 100%;
          font-family: Inter, sans-serif;
          font-weight: 700;
          font-size: 28px;
          line-height: 28px;
          color: #1A4D8C;
          text-align: center;
          margin: 0;
        }

        .description {
          width: 100%;
          font-family: Inter, sans-serif;
          font-weight: 400;
          font-size: 18px;
          line-height: 26px;
          color: #6B7B8F;
          text-align: center;
          margin: 0;
          width: 608px;
        }
      }
    }

    .primaryButton {
      height: 40px;
      padding: 10px 16px;
      background-color: #1A4D8C;
      color: #FFFFFF;
      border: 1px solid #F7F9FC;
      border-radius: 40px;
      font-family: Inter, sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 19.36px;
      cursor: pointer;
      box-shadow: 0px 2px 4px 0px rgba(26, 77, 140, 0.1);
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
