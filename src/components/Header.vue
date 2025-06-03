<template>
  <div class="header">
    <div class="headerLogo">
      <div class="headerLogoIcon">
        <div class="headerLogoIconRect"></div>
        <div class="headerLogoIconShape"></div>
        <div class="headerLogoIconInner"></div>
      </div>
      <div class="headerLogoText">Prepwise</div>
    </div>
    <nav class="headerNav">
      <div class="headerNavItem">
        <span>How it works</span>
      </div>
      <div class="headerNavItem">
        <span>Benefits</span>
      </div>
      <div class="headerNavItem">
        <span>Pricing</span>
      </div>
      <div class="headerNavItem" @click="goLogin">
        <span>Login</span>
      </div>
    </nav>
  </div>
  <div class="headerContent"></div>
</template>

<script setup>
const router = useRouter()

function goLogin() {
  router.push("/login")
}
</script>

<style lang="scss" scoped>
.header {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 64px;
  background-color: #FFFFFF;
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 120px;
  box-sizing: border-box;
  z-index: 10;

  .headerLogo {
    display: flex;
    align-items: center;
    gap: 8px;

    .headerLogoIcon {
      width: 23.74px;
      height: 28px;
      position: relative;

      .headerLogoIconRect {
        position: absolute;
        width: 12.78px;
        height: 28px;
        background-color: #1A4D8C;
        opacity: 0.4;
      }

      .headerLogoIconShape {
        position: absolute;
        width: 17.65px;
        height: 22.52px;
        background-color: #1A4D8C;
        top: 1.22px;
        left: 6.09px;
      }

      .headerLogoIconInner {
        position: absolute;
        width: 9.74px;
        height: 6.7px;
        background-color: #1A4D8C;
        top: 4.87px;
        left: 6.09px;
      }
    }

    .headerLogoText {
      font-weight: 700;
      font-size: 20px;
      line-height: 1em;
      letter-spacing: -5.5%;
      color: #1A4D8C;
    }
  }

  .headerNav {
    display: flex;
    align-items: center;
    gap: 16px;

    .headerNavItem {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 24px 8px;
      cursor: pointer;

      span {
        font-weight: 400;
        font-size: 16px;
        line-height: 1em;
        color: #1F2D3D;
      }
    }
  }
}

.headerContent {
  width: 100vw;
  height: 84px;
}
</style>