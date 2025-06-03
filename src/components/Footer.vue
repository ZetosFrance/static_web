<template>
  <footer class="footer">
    <div class="footerContent">
      <div class="footerInfo">
        <h4 class="footerLogo">Prepwise</h4>
        <p class="footerCopyright">© 2025 Prepwise. All rights reserved.</p>
      </div>
      <div class="footerSocial">
        <div class="footerSocialIcon"></div>
        <div class="footerSocialIcon"></div>
        <div class="footerSocialIcon"></div>
      </div>
    </div>
  </footer>
  <div class="footerContext"></div>
</template>

<script setup>
// No script needed for the footer
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
    padding: 0 120px;
    height: 100%;

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
        background-color: #6B7B8F;
        /* Placeholder for social icons */
        border-radius: 50%;
      }
    }
  }
}

.footerContext {
  width: 100%;
  height: 92px;
}
</style>