<template>
  <section id="sys-login">
    <div class="main-content p-clear">
      <div class="center-container">
        <div class="bg-img p-clear">
          <div class="right-content p-right">
            <div class="right-login-box">
              <p style="text-align: center;font-size: 30px;margin-bottom: 30px;color: #fff;">
                医院后勤管理系统
              </p>
              <div class="login-content">
                <div class="input-item p-clear"
                  :class="{'error-box': errorTips.userName}">
                  <div class="icon-user"></div>
                  <el-input type="text"
                    placeholder="请输入用户名"
                    autofocus
                    v-model="userName" />
                  <div class="err-tips">{{errorTips.userName}}</div>
                </div>
                <div class="input-item p-clear"
                  :class="{'error-box': errorTips.passWord}">
                  <div class="icon-lock"></div>
                  <input type="password"
                    placeholder="请输入登陆密码"
                    v-model="passWord"
                    style="border-bottom: 1px solid #8f97c0;border-radius:0;"
                    @keyup.enter="login" />
                  <div class="err-tips">{{errorTips.passWord}}</div>
                </div>
                <div
                  style="padding:10px 0px; margin-top:-20px;display:flex;justify-content: space-between;">
                  <p style="line-height:40px">
                    <el-checkbox v-model="checked">记住密码</el-checkbox>
                  </p>
                  <p>
                    <el-button type="text">忘记密码</el-button>
                  </p>
                </div>
                <el-button class="login-btn p-cursor"
                  @click="login()"
                  :loading="loading">{{loading?'正在登录...':'登录'}}</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="p-align-center login-footer">欢迎使用{{this.$baseInfo.BASE_TITLE}}</div> -->
    </div>
  </section>
</template>
<script>

import { setNewToken, setNewIdenity } from '../utils/publicFun'
import baseInfo from './../config/config'
import menuItems from './../utils/menuItems'
export default {
  name: 'login',
  data () {
    return {
      userName: '',
      passWord: '',
      checked: false,
      loading: false,
      errorTips: {
        userName: '',
        passWord: '',
        userId: ''
      },
      downUrl: baseInfo.DOWN_URL
    }
  },
  created () {

    if (localStorage.password) {
      this.checked = true
      this.passWord = localStorage.password
      this.userName = localStorage.userName
    }
  },
  methods: {
    login () {
      if (this.validate()) {
        this.loading = true
        localStorage.menuTree = JSON.stringify(menuItems)
        /*   sysLogin({
            username: this.userName,
            password: this.passWord
          }).then(res => {
            if (res.data.code === 200) {
              this.loading = false
              setNewToken(res.data.data.tokenHead + ' ' + res.data.data.token, 36000000)
              getInfo().then(res => {
                if (res.data.code === 200) {
                  res.data.data.menus.forEach(item => {
                    if (item.childNodes.length > 0) {
                      item.path = item.childNodes[0].path
                    }
                  })
                  // localStorage.menuTree = JSON.stringify(res.data.data.menus)
                  localStorage.menuTree = JSON.stringify(menuItems)
                  let userInfo = {
                    userName: res.data.data.userInfo.username,
                    realName: res.data.data.userInfo.nickName,
                    userId: res.data.data.userInfo.userId,
                    password: this.passWord
                  }
                  localStorage.userInfo = JSON.stringify(userInfo)
                  this.$router.push('/home')
                } else {
                  this.$message.error(res.data.message)
                }
              })
            } else {
              this.loading = false
              for (let i in this.errorTips) {
                this.errorTips[i] = ''
              }
              this.errorTips.passWord = '用户名或密码错误'
            }
          }).catch(error => {
            this.loading = false
            console.log(error)
          }) */
      }
    },
    validate () {
      for (let i in this.errorTips) {
        this.errorTips[i] = ''
      }
      if (this.userName === '') {
        this.errorTips.userName = '请输入工号'
        return false
      }
      if (this.passWord === '') {
        this.errorTips.passWord = '请输入密码'
        return false
      }
      return true
    },

  }
}
</script>
<style lang="less">
#sys-login {
  .login-content {
    .el-input__inner {
      border: none;
      border-bottom: 1px solid #8f97c0;
      border-radius: 0;
    }
  }
  .download-url {
    margin-top: 10px;
    font-size: 12px;
    color: #666;
    a {
      color: #009eb9;
    }
  }
}
</style>
<style lang="less" scoped>
@import "~@/assets/css/login.less";
</style>
