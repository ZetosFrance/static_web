<template>
  <div class="loginPage">
    <div class="loginContainer">
      <div class="loginMain">
        <section class="loginSidebar">
          <div class="loginSidebarImage">
            <!-- Image placeholder with background color -->
            <div class="loginSidebarImagePlaceholder"></div>
            <div class="loginSidebarOverlay"></div>
          </div>
          <div class="loginSidebarContent">
            <div class="loginSidebarText">
              <h1 class="loginSidebarTitle">{{ $t("KEY_LOGIN_TEXT1") }}</h1>
              <p class="loginSidebarDescription">{{ $t("KEY_LOGIN_TEXT2") }}</p>
            </div>
          </div>
        </section>
        <section class="loginContent">
          <div class="loginHeader">
            <div class="loginLogo">
              <div class="loginLogoIcon">
                <!-- Logo placeholder with background color -->
                <img :src="logo" alt="">
              </div>
              <div class="loginLogoText">{{ $t("KEY_HEAD_TEXT1") }}</div>
            </div>
            <nav class="loginNav">
              <div class="loginNavButtons">
                <div class="loginNavGroup">
                  <button :class="['loginNavButton', { 'loginNavButtonActive': activeForm === 'login' }]"
                    @click="switchForm('login')">
                    {{ $t("KEY_LOGIN_TEXT3") }}
                  </button>
                </div>
                <div class="loginNavGroup">
                  <button :class="['loginNavButton', { 'loginNavButtonActive': activeForm === 'register' }]"
                    @click="switchForm('register')">
                    {{ $t("KEY_LOGIN_TEXT4") }}
                  </button>
                </div>
              </div>
            </nav>
          </div>
          <div class="loginFormContainer">
            <!-- Login Form -->
            <form class="loginForm" v-if="activeForm === 'login'" @submit.prevent="handleLogin">
              <div class="loginFormGroup">
                <label class="loginFormLabel">Email</label>
                <div class="loginFormInput">
                  <input type="email" placeholder="Email" v-model="loginForm.email" />
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">{{ $t("KEY_LOGIN_TEXT6") }}</label>
                <div class="loginFormInput">
                  <input :type="showLoginPassword ? 'text' : 'password'" placeholder="Mot de passe"
                    v-model="loginForm.password" />
                  <div class="loginFormInputIcon" @click="showLoginPassword = !showLoginPassword">
                    <EyeOutlined v-if="showLoginPassword" />
                    <EyeInvisibleOutlined v-else />
                  </div>
                </div>
              </div>
              <div class="loginFormOptions">
                <label class="loginFormCheckbox">
                  <div :class="['loginFormCheckboxInput', { 'loginFormCheckboxInputActive': loginForm.rememberMe }]"
                    @click="loginForm.rememberMe = !loginForm.rememberMe"></div>
                  <span>{{ $t("KEY_LOGIN_TEXT7") }}</span>
                </label>
                <span class="loginFormForgot">{{ $t("KEY_LOGIN_TEXT8") }}</span>
              </div>
              <button type="submit" class="loginFormSubmit" :class="{ 'loginFormSubmitActive': loginForm.email }"
                @click="handleLogin">Se
                connecter</button>
              <div class="loginFormDivider">
                <div class="loginFormDividerLine"></div>
                <div class="loginFormDividerText">{{ $t("KEY_LOGIN_TEXT11") }}</div>
                <div class="loginFormDividerLine"></div>
              </div>
              <div class="loginFormSocial">
                <button type="button" class="loginFormSocialButton" @click="handleGoogleLogin">
                  <div class="loginFormSocialButtonContent">
                    <div class="loginFormSocialIcon">
                      <img :src="google" alt="">
                      <!-- Google icon placeholder -->
                    </div>
                    <span>{{ $t("KEY_LOGIN_TEXT9") }}</span>
                  </div>
                </button>
                <button type="button" class="loginFormSocialButton" @click="handleLinkedInLogin">
                  <div class="loginFormSocialButtonContent">
                    <div class="loginFormSocialIcon">
                      <LinkedinFilled style="font-size: 18px; color: #0B66C1;" />
                      <!-- LinkedIn icon placeholder -->
                    </div>
                    <span>{{ $t("KEY_LOGIN_TEXT10") }}</span>
                  </div>
                </button>
              </div>
            </form>

            <!-- Register Form -->
            <form class="loginForm" v-if="activeForm === 'register'" @submit.prevent="handleRegister">
              <div class="loginFormGroup">
                <label class="loginFormLabel">{{ $t("KEY_LOGIN_TEXT15") }}</label>
                <div class="loginFormInput">
                  <input type="text" placeholder="Nom d’utilisateur" v-model="registerForm.username" />
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">Email</label>
                <div class="loginFormInput">
                  <input type="email" placeholder="Please enter" v-model="registerForm.email" />
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">{{ $t("KEY_LOGIN_TEXT15") }}</label>
                <div class="loginFormInput">
                  <input :type="showRegisterPassword ? 'text' : 'password'" placeholder="Mot de passer"
                    v-model="registerForm.password" />
                  <div class="loginFormInputIcon" @click="showRegisterPassword = !showRegisterPassword">
                    <EyeOutlined v-if="showRegisterPassword" />
                    <EyeInvisibleOutlined v-else />
                  </div>
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">{{ $t("KEY_LOGIN_TEXT16") }}</label>
                <div class="loginFormInput">
                  <input :type="showRegisterPasswordConfirm ? 'text' : 'password'" placeholder="Mot de passe"
                    v-model="registerForm.passwordConfirm" />
                  <div class="loginFormInputIcon" @click="showRegisterPasswordConfirm = !showRegisterPasswordConfirm">
                    <EyeOutlined v-if="showRegisterPasswordConfirm" />
                    <EyeInvisibleOutlined v-else />
                  </div>
                </div>
              </div>
              <button type="submit" class="loginFormSubmit">Register now</button>
            </form>

            <div class="loginRegisterLink" v-if="activeForm === 'login'">
              {{ $t("KEY_LOGIN_TEXT13") }} <span class="loginRegisterLinkText"
                @click="switchForm('register')">Inscrivez-vous</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
import { getAssetsFile } from "@/utils/getAssets"
import { useUserStore } from "@/store/modules/user"

const logo = getAssetsFile("logo2.png")
const google = getAssetsFile("google.png")
const activeForm = ref('login')

const store = useUserStore()
const router = useRouter()

const loginForm = ref({
  email: 'student@zetos.fr',
  password: '',
  rememberMe: false
})

const registerForm = ref({
  username: '',
  email: '',
  password: '',
  passwordConfirm: ''
})

const showLoginPassword = ref(false)
const showRegisterPassword = ref(false)
const showRegisterPasswordConfirm = ref(false)

const switchForm = (form) => {
  activeForm.value = form
}

const handleLogin = () => {
  // Implement login logic here
  console.log('Login with:', loginForm.value)
  if (loginForm.value.email) {
    store.setIsLogin(true)
    router.push("/upload")
  }
}

const handleRegister = () => {
  // Implement register logic here
  console.log('Register with:', registerForm.value)
}

const handleGoogleLogin = () => {
  // Implement Google login
  console.log('Google login')
  handleLogin()
}

const handleLinkedInLogin = () => {
  // Implement LinkedIn login
  console.log('LinkedIn login')
}
</script>

<style lang="scss" scoped>
.loginPage {
  width: 100%;
  height: 100vh;
  background-color: #F7F9FC;
  display: flex;
  justify-content: center;
  align-items: center;

  .loginContainer {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    .loginMain {
      width: 852px;
      height: 804px;
      background-color: #FFFFFF;
      border-radius: 12px;
      box-shadow: 0px 4px 24px 0px rgba(26, 77, 140, 0.12);
      display: flex;

      position: relative;

      .loginSidebar {
        width: 362px;
        height: 804px;
        position: relative;

        .loginSidebarImage {
          width: 362px;
          height: 804px;
          position: absolute;
          top: 0;
          left: 0;
          border-radius: 12px 0 0 12px;

          .loginSidebarImagePlaceholder {
            width: 100%;
            height: 100%;
            background: url('../assets/images/login.png');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 12px 0 0 12px;
            /* Placeholder for the actual image */
          }
        }

        .loginSidebarOverlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-color: #1A4D8C;
          opacity: 0.8;
          border-radius: 12px 0 0 12px;
        }

        .loginSidebarContent {
          position: relative;
          z-index: 1;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .loginSidebarText {
            width: 274px;
            height: 230px;
            margin-top: 48px;

            .loginSidebarTitle {
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              font-size: 36px;
              line-height: 1em;
              color: #FFFFFF;
              text-align: center;
              margin-bottom: 32px;
            }

            .loginSidebarDescription {
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 18px;
              line-height: 1.5em;
              color: #FFFFFF;
              opacity: 0.9;
              text-align: center;
            }
          }
        }
      }

      .loginContent {
        width: 490px;
        height: 804px;
        padding: 50px 64px 50px 63px;
        display: flex;
        box-sizing: border-box;
        flex-direction: column;

        .loginHeader {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 40px;

          .loginLogo {
            display: flex;
            align-items: center;
            gap: 12px;

            .loginLogoIcon {
              width: 34px;
              height: 40px;
              position: relative;

              .loginLogoIconBg {
                width: 18px;
                height: 40px;
                background-color: #1A4D8C;
                opacity: 0.4;
                position: absolute;
                top: 0;
                left: 0;
              }

              .loginLogoIconShape {
                width: 25px;
                height: 32px;
                background-color: #1A4D8C;
                position: absolute;
                top: 2px;
                left: 9px;
              }

              .loginLogoIconRect {
                width: 14px;
                height: 10px;
                background-color: #1A4D8C;
                position: absolute;
                top: 7px;
                left: 9px;
              }
            }

            .loginLogoText {
              font-family: 'Inter', sans-serif;
              font-weight: 700;
              font-size: 24px;
              line-height: 1em;
              letter-spacing: -1.1px;
              color: #1A4D8C;
            }
          }

          .loginNav {
            width: 100%;
            margin-top: 24px;

            .loginNavButtons {
              display: flex;
              align-items: center;
              gap: 28px;
              justify-content: center;

              .loginNavGroup {
                width: fit-content;
                height: 38px;
              }

              .loginNavButton {
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 18px;
                line-height: 1.21em;
                color: #6B7B8F;
                border: none;
                background: transparent;
                cursor: pointer;
                padding-bottom: 15px;

                &.loginNavButtonActive {
                  font-weight: 700;
                  color: #1A4D8C;
                  border-bottom: 2px solid #1A4D8C;
                }
              }
            }
          }
        }

        .loginFormContainer {
          margin-top: 40px;
          width: 361px;

          .loginForm {
            width: 100%;

            .loginFormGroup {
              margin-bottom: 24px;
              width: 100%;

              .loginFormLabel {
                display: block;
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 1.21em;
                color: #546E7A;
                margin-bottom: 8px;
              }

              .loginFormInput {
                width: 100%;
                height: 41px;
                border-bottom: 1px solid #FFFFFF;
                position: relative;

                input {
                  width: 100%;
                  height: 100%;
                  border: none;
                  outline: none;
                  background: transparent;
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 16px;
                  line-height: 24px;
                  color: #ADAEBC;
                  padding: 0 4px;

                  &::placeholder {
                    color: #ADAEBC;
                  }
                }

                .loginFormInputIcon {
                  position: absolute;
                  top: 50%;
                  right: 8px;
                  transform: translateY(-50%);
                  width: 16px;
                  height: 16px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  cursor: pointer;
                }
              }
            }

            .loginFormOptions {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 32px;

              .loginFormCheckbox {
                display: flex;
                align-items: center;
                gap: 8px;
                cursor: pointer;

                span {
                  font-family: 'Inter', sans-serif;
                  font-weight: 400;
                  font-size: 14px;
                  line-height: 1.21em;
                  color: #546E7A;
                }

                .loginFormCheckboxInput {
                  width: 16px;
                  height: 16px;
                  border: 0.5px solid #333333;
                  background-color: #FFFFFF;
                  border-radius: 1px;
                  position: relative;

                  &.loginFormCheckboxInputActive::after {
                    content: '';
                    position: absolute;
                    top: 2px;
                    left: 5px;
                    width: 6px;
                    height: 9px;
                    border: solid #1A4D8C;
                    border-width: 0 2px 2px 0;
                    transform: rotate(45deg);
                  }
                }
              }

              .loginFormForgot {
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 1em;
                color: #1A4D8C;
                cursor: pointer;
              }
            }

            .loginFormSubmit {
              width: 100%;
              height: 44px;
              background-color: #A3B8D1;
              border-radius: 30px;
              border: none;
              font-family: 'Inter', sans-serif;
              font-weight: 400;
              font-size: 16px;
              line-height: 1.21em;
              color: #FFFFFF;
              cursor: pointer;
              box-shadow: 0px 2px 4px 0px rgba(26, 77, 140, 0.1);
              margin-bottom: 48px;

              &.loginFormSubmitActive {
                background-color: #1A4D8C;
              }
            }

            .loginFormDivider {
              display: flex;
              align-items: center;
              margin-bottom: 40px;

              .loginFormDividerLine {
                flex: 1;
                height: 1px;
                background-color: #E3E9F0;
              }

              .loginFormDividerText {
                font-family: 'Inter', sans-serif;
                font-weight: 400;
                font-size: 14px;
                line-height: 1em;
                color: #CED4DA;
                margin: 0 12px;
              }
            }

            .loginFormSocial {
              display: flex;
              flex-direction: column;
              gap: 12px;

              .loginFormSocialButton {
                width: 100%;
                height: 46px;
                background-color: #FFFFFF;
                border: 1px solid #CED4DA;
                border-radius: 30px;
                display: flex;
                justify-content: center;
                align-items: center;
                cursor: pointer;

                .loginFormSocialButtonContent {
                  display: flex;
                  align-items: center;
                  gap: 12px;

                  span {
                    font-family: 'Inter', sans-serif;
                    font-weight: 400;
                    font-size: 16px;
                    line-height: 1em;
                    color: #1A4D8C;
                    width: 200px;
                    text-align: left;
                  }

                  .loginFormSocialIcon {
                    width: 18px;
                    height: 18px;
                  }
                }
              }
            }
          }

          .loginRegisterLink {
            font-family: 'Inter', sans-serif;
            font-weight: 400;
            font-size: 14px;
            line-height: 1em;
            color: #000000;
            text-align: center;
            margin-top: 32px;

            .loginRegisterLinkText {
              color: #1A4D8C;
              cursor: pointer;
              font-weight: 600;
            }
          }
        }
      }
    }
  }
}
</style>
