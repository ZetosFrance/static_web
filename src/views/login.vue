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
              <h1 class="loginSidebarTitle">Join 50,000+ students preparing smarter</h1>
              <p class="loginSidebarDescription">Empower your next interview with PrepWise's AI-driven tools.</p>
            </div>
          </div>
        </section>
        <section class="loginContent">
          <div class="loginHeader">
            <div class="loginLogo">
              <div class="loginLogoIcon">
                <!-- Logo placeholder with background color -->
                <div class="loginLogoIconBg"></div>
                <div class="loginLogoIconShape"></div>
                <div class="loginLogoIconRect"></div>
              </div>
              <div class="loginLogoText">PrepWise</div>
            </div>
            <nav class="loginNav">
              <div class="loginNavButtons">
                <div class="loginNavGroup">
                  <button :class="['loginNavButton', { 'loginNavButtonActive': activeForm === 'login' }]"
                    @click="switchForm('login')">
                    Login
                  </button>
                </div>
                <div class="loginNavGroup">
                  <button :class="['loginNavButton', { 'loginNavButtonActive': activeForm === 'register' }]"
                    @click="switchForm('register')">
                    Register
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
                  <input type="email" placeholder="Please enter" v-model="loginForm.email" />
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">Password</label>
                <div class="loginFormInput">
                  <input :type="showLoginPassword ? 'text' : 'password'" placeholder="Please enter"
                    v-model="loginForm.password" />
                  <div class="loginFormInputIcon" @click="showLoginPassword = !showLoginPassword">
                    <!-- Eye icon placeholder -->
                  </div>
                </div>
              </div>
              <div class="loginFormOptions">
                <label class="loginFormCheckbox">
                  <div :class="['loginFormCheckboxInput', { 'loginFormCheckboxInputActive': loginForm.rememberMe }]"
                    @click="loginForm.rememberMe = !loginForm.rememberMe"></div>
                  <span>Remember me</span>
                </label>
                <span class="loginFormForgot">Forgot password?</span>
              </div>
              <button type="submit" class="loginFormSubmit">Login</button>
              <div class="loginFormDivider">
                <div class="loginFormDividerLine"></div>
                <div class="loginFormDividerText">or</div>
                <div class="loginFormDividerLine"></div>
              </div>
              <div class="loginFormSocial">
                <button type="button" class="loginFormSocialButton" @click="handleGoogleLogin">
                  <div class="loginFormSocialButtonContent">
                    <div class="loginFormSocialIcon loginFormSocialIconGoogle">
                      <!-- Google icon placeholder -->
                    </div>
                    <span>Continue with Google</span>
                  </div>
                </button>
                <button type="button" class="loginFormSocialButton" @click="handleLinkedInLogin">
                  <div class="loginFormSocialButtonContent">
                    <div class="loginFormSocialIcon loginFormSocialIconLinkedin">
                      <!-- LinkedIn icon placeholder -->
                    </div>
                    <span>Continue with LinkedIn</span>
                  </div>
                </button>
              </div>
            </form>

            <!-- Register Form -->
            <form class="loginForm" v-if="activeForm === 'register'" @submit.prevent="handleRegister">
              <div class="loginFormGroup">
                <label class="loginFormLabel">User name</label>
                <div class="loginFormInput">
                  <input type="text" placeholder="Please enter" v-model="registerForm.username" />
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">Email</label>
                <div class="loginFormInput">
                  <input type="email" placeholder="Please enter" v-model="registerForm.email" />
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">Password</label>
                <div class="loginFormInput">
                  <input :type="showRegisterPassword ? 'text' : 'password'" placeholder="Please enter"
                    v-model="registerForm.password" />
                  <div class="loginFormInputIcon" @click="showRegisterPassword = !showRegisterPassword">
                    <!-- Eye icon placeholder -->
                  </div>
                </div>
              </div>
              <div class="loginFormGroup">
                <label class="loginFormLabel">Password again</label>
                <div class="loginFormInput">
                  <input :type="showRegisterPasswordConfirm ? 'text' : 'password'" placeholder="Please enter"
                    v-model="registerForm.passwordConfirm" />
                  <div class="loginFormInputIcon" @click="showRegisterPasswordConfirm = !showRegisterPasswordConfirm">
                    <!-- Eye icon placeholder -->
                  </div>
                </div>
              </div>
              <button type="submit" class="loginFormSubmit">Register now</button>
            </form>

            <div class="loginRegisterLink" v-if="activeForm === 'login'">
              Don't have an account? <span class="loginRegisterLinkText" @click="switchForm('register')">Register</span>
            </div>
            <div class="loginRegisterLink" v-else>
              Already have an account? <span class="loginRegisterLinkText" @click="switchForm('login')">Login</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script setup>
const activeForm = ref('login')

const loginForm = ref({
  email: '',
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
}

const handleRegister = () => {
  // Implement register logic here
  console.log('Register with:', registerForm.value)
}

const handleGoogleLogin = () => {
  // Implement Google login
  console.log('Google login')
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

          .loginSidebarImagePlaceholder {
            width: 100%;
            height: 100%;
            background-color: #1A4D8C;
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
                width: 73px;
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
                  line-height: 1.5em;
                  color: #000000;
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
                  background-color: #ADAEBC;
                  /* Placeholder for the eye icon */
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
                  }

                  .loginFormSocialIcon {
                    width: 18px;
                    height: 18px;

                    &.loginFormSocialIconGoogle {
                      background-color: #FBBC05;
                      /* Placeholder for Google icon */
                    }

                    &.loginFormSocialIconLinkedin {
                      background-color: #0B66C1;
                      /* Placeholder for LinkedIn icon */
                    }
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
