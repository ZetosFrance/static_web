<template>
  <div class="header">
    <div class="headerContainer">
      <div class="headerLogo" @click="goHome">
        <div class="headerLogoIcon">
          <img :src="logo" alt="">
        </div>
        <div class="headerLogoText">Prepwise</div>
      </div>
      <nav class="headerNav" v-if="!store.isLogin">
        <div class="headerNavItem">
          <span>Accueil</span>
        </div>
        <div class="headerNavItem">
          <span>Avantages</span>
        </div>
        <div class="headerNavItem">
          <span>Tarifs</span>
        </div>
        <div class="headerNavItem" @click="goLogin">
          <span>Connexion</span>
        </div>
      </nav>
      <div class="chatHead" v-else-if="router.currentRoute.value.path === '/chat'">
        <div class="chatItem">
          Simulation d'entretien
        </div>
        <div class="chatItem">
          <ClockCircleOutlined />
          <span>04 : 12</span>
        </div>
        <div class="chatBtn" @click="goFinish">
          <ExclamationCircleFilled style="font-size: 18px; color: #fff;" />
          Terminer l'entretien
        </div>
      </div>
      <nav class="headerNav" v-else>
        <div class="headerNavItem">
          <span>Accueil</span>
        </div>
        <div class="headerNavItem">
          <span>Fonctionnalités</span>
        </div>
        <div class="headerNavItem">
          <span>Tarifs</span>
        </div>
        <div class="headerNavItem">
          <span>Pour Admins</span>
        </div>
        <div class="headerNavItem">
          <span>Aide</span>
        </div>
        <img :src="avatar" alt="" @click="logout">
      </nav>
    </div>
  </div>
  <div class="headerContent"></div>
</template>

<script setup>
import { getAssetsFile } from "@/utils/getAssets"
import { useUserStore } from "@/store/modules/user"

const router = useRouter()
const store = useUserStore()
function goLogin() {
  router.push("/login")
}

function goHome() {
  router.push("/")
}

const logo = getAssetsFile("logo2.png")
const avatar = getAssetsFile("avatar.png")

function logout() {
  store.setIsLogin(false)
  router.push("/login")
}

function goFinish() {
  router.push("/interviewFinish")
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
  box-sizing: border-box;
  z-index: 10;

  .headerContainer {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .headerLogo {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    .headerLogoIcon {
      width: 34px;
      height: 30px;
      position: relative;
      // background-color: #1A4D8C;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
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

    img {
      width: 33px;
      height: 33px;
      border-radius: 50%;
      margin-left: 100px;
      cursor: pointer;
    }

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

  .chatHead {
    display: flex;
    align-items: center;
    gap: 16px;

    .chatItem {
      display: flex;
      align-items: center;
      font-size: 18px;
      color: #1A4D8C;

      span {
        font-weight: bold;
        margin-left: 8px;
      }
    }

    .chatBtn {
      border-radius: 40px;
      height: 40px;
      background-color: #1A4D8C;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      line-height: 18px;
      cursor: pointer;
      color: #fff;
      padding: 0 16px;
      gap: 8px;
    }
  }
}

.headerContent {
  width: 100vw;
  height: 84px;
}
</style>