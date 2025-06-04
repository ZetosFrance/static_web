<template>
  <footer class="footer">
    <div class="footerContent">
      <div class="footerInfo">
        <h4 class="footerLogo">{{ $t("KEY_HEAD_TEXT1") }}</h4>
        <p class="footerCopyright">{{ $t("KEY_HEAD_TEXT10") }}</p>
      </div>
      <div class="footerSocial" v-if="router.currentRoute.value.path === '/'">
        <div class="footerSocialIcon">
          <LinkedinFilled style="font-size: 20px; color: #6B7B8F;" />
        </div>
        <div class="footerSocialIcon">
          <TwitterOutlined style="font-size: 20px; color: #6B7B8F;" />
        </div>
        <div class="footerSocialIcon">
          <InstagramOutlined style="font-size: 20px; color: #6B7B8F;" />
        </div>
      </div>
      <div class="footerSocial" v-else>
        <div class="item">
          À propos
        </div>
        <div class="item">
          Politique de confidentialité
        </div>
        <div class="item">
          Contact
        </div>
      </div>
    </div>
  </footer>
  <div class="footerContext"></div>
</template>

<script setup>
const router = useRouter()
</script>

<style lang="scss" scoped>
.footer {
  width: 100%;
  height: 72px;
  border-top: 1px solid #E8ECF0;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: #FFFFFF;

  .footerContent {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    width: 1200px;
    margin: 0 auto;

    .footerInfo {
      display: flex;
      align-items: center;

      .footerLogo {
        font-weight: 700;
        font-size: 14px;
        line-height: 1em;
        color: #1A4D8C;
        margin: 0;
      }

      .footerCopyright {
        font-weight: 400;
        font-size: 14px;
        line-height: 1em;
        color: #ADAEBC;
        margin: 0 0 0 8px;
      }
    }

    .footerSocial {
      display: flex;
      align-items: center;
      gap: 20px;

      .footerSocialIcon {
        width: 20px;
        height: 20px;
        /* Placeholder for social icons */
        border-radius: 50%;
        cursor: pointer;
      }

      .item {
        font-family: Inter;
        font-weight: 400;
        font-size: 14px;
        line-height: 14px;
        letter-spacing: 0%;
        vertical-align: middle;
        color: #6B7B8F;
        cursor: pointer;
      }
    }
  }
}

.footerContext {
  width: 100%;
  height: 92px;
}
</style>