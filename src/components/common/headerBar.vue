<template>
  <div id="header-bar"
    class="p-clear">
    <div class="p-left logo-content p-animation">
      <div class="logo-text">
        <img src="./../../assets/image/logo_pic.png"
          alt="">
      </div>
    </div>
    <div class="right-content p-animation">
      <div class="right-container p-animation">
        <div class="p-left">
          <span class="systemName">后勤管理系统</span>
          <span style="    font-size: 24px; margin-left: 10px;">
            <i v-if="letfShow"
              @click="openLeft"
              class="el-icon-s-unfold sub-item-icon "></i>
            <i v-if="!letfShow"
              @click="openLeft"
              class="el-icon-s-fold sub-item-icon "></i>
          </span>
        </div>
        <div class="p-right right-box">
          <div class="message">
            <i class="el-icon-message"></i>
            <div class="message-box">
              消息
              <div class="message-num">10</div>
            </div>
          </div>
          <div class="user">管理员</div>
          <div class="icon-box">
            <i class="el-icon-switch-button logOut"
              title="退出"></i>
          </div>
        </div>
      </div>
    </div>
    <!--  <div class="sub-header">
      <ul class="sub-header-box">
        <li class="sub-header-item">
          <i v-if="letfShow"
            class="el-icon-s-fold sub-item-icon "></i>
          <i v-if="!letfShow"
            class="el-icon-s-unfold sub-item-icon "></i>
        </li>
        <li v-for="(item,index) in itemList"
          :key="index+item.id"
          class="sub-header-item"
          :class="{'sub-item-active':currentIndex===item.id}">
          <router-link :to="item.path">{{item.name}}</router-link>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script>

// import baseInfo from '../../utils/config'

export default {
  name: 'headerBar',
  components: {},
  data () {
    return {
      letfShow: true,
      itemList: []
    }
  },
  methods: {
    openLeft () {
      this.letfShow = !this.letfShow
      this.$emit('getLeftShow')
    },
  }

}
</script>

<style lang="less" scoped>
#header-bar {
  position: relative;
  .logo-small {
    width: 58px !important;
  }
  .logo-content {
    width: 80px;
    height: 50px;
    background: #fff;
  }
  .logo-text {
    width: 80px;
    height: 100%;
    text-align: center;
    padding-top: 3px;
    box-sizing: border-box;
  }
  .logo-icon {
    width: 58px;
    height: 50px;
    background: url("../../assets/image/logo-1.png") no-repeat center center;
    background-size: 80%;
  }
  .right-large {
    margin-left: 58px !important;
  }
  .right-content {
    background: #fff;
    margin-left: 80px;
    height: 50px;
    line-height: 50px;
    box-shadow: 0px 0px 5px #dedede;
    .right-container {
      vertical-align: middle;
      height: 100%;
      width: 100%;
      overflow: hidden;

      .menu-icon {
        margin-left: 10px;
        width: 20px;
        height: 28px;
        background: url("../../assets/image/icon-system.png") no-repeat center
          center;
        background-size: 100%;
        display: inline-block;
        vertical-align: middle;
      }
      .systemName {
        color: #333333;
        font-size: 22px;
        font-weight: bold;
        // float: left;
        // height: 28px;
        // line-height: 28px;
        padding-left: 10px;
      }
      .right-box {
        display: flex;
        line-height: 30px;
        height: 30px;
        padding-right: 40px;
        margin-top: 10px;
        .status-box {
          width: 33%;
        }
        .message {
          margin-right: 10px;
          .message-box {
            display: inline-block;
            position: relative;
            margin-left: 10px;
            cursor: pointer;
            .message-num {
              position: absolute;
              background: #ff8c00;
              display: inline-block;
              color: #fff;
              font-size: 5px;
              width: 12px;
              text-align: center;
              height: 12px;
              line-height: 12px;
              border-radius: 50%;
              right: -7px;
              top: 1px;
              // transform: scale(0.5);
              cursor: pointer;
            }
          }
        }
        .user {
          padding-left: 50px;
          position: relative;
          color: #31478f;
          margin-right: 8px;
        }
        .user::after {
          display: block;
          content: "";
          width: 14px;
          height: 14px;
          background: rgba(49, 71, 143, 1);
          border: 1px solid rgba(255, 255, 255, 1);
          border-radius: 50%;
          position: absolute;
          left: 20px;
          top: 7px;
        }
        .user::before {
          display: block;
          content: "";
          left: 5px;
          top: 7.5px;
          width: 2px;
          height: 15px;
          background: rgba(49, 71, 143, 1);
          position: absolute;
        }
        .icon-box {
          line-height: 30px;
          padding-left: 10px;
          color: #31478f;
          position: relative;
        }
        .icon-box::after {
          display: block;
          content: "";
          left: 5px;
          top: 7.5px;
          width: 2px;
          height: 15px;
          background: rgba(49, 71, 143, 1);
          position: absolute;
        }
      }
      // .message-box {
      //   width: 18px;
      //   height: 24px;
      //   background: url("../../assets/image/icon-msg.png") no-repeat center
      //     center;
      //   background-size: 85%;
      //   margin-right: 20px;
      //   position: relative;
      //   cursor: pointer;
      //   .msg-num {
      //     position: absolute;
      //     background: #e32020;
      //     display: inline-block;
      //     color: #fff;
      //     font-size: 15px;
      //     width: 30px;
      //     text-align: center;
      //     height: 22px;
      //     line-height: 20px;
      //     border-radius: 50%;
      //     right: -12px;
      //     top: -5px;
      //     transform: scale(0.5);
      //     cursor: pointer;
      //   }
      //   animation: myAnimation 1.5s infinite;
      // }
    }
  }
  .sub-header {
    background: #007c90;
    padding-left: 20px;
    .sub-header-item {
      display: inline-block;
      vertical-align: middle;
      line-height: 35px;
      color: #fff;
      font-size: 14px;
      cursor: pointer;
      padding: 5px 30px;
      .sub-item-icon {
        font-size: 30px;
        vertical-align: middle;
      }
    }
    .sub-item-active {
      background: #26b4ce;
    }
  }
  .logOut {
    font-weight: bold;
    cursor: pointer;
  }
  @keyframes myAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
<style lang="less" >
.dialog-box {
  .el-dialog {
    margin-right: 35px !important;
  }
  .el-dialog__body {
    padding-top: 10px;
  }
  .el-dialog__header {
    display: none;
  }
}

.msg-item {
  line-height: 28px;
  margin-bottom: 5px;
  .msg-info {
    color: #26b4ce;
  }
}
#header-bar {
  .right-content {
    .right-container {
      .right-box {
        .el-select {
          width: 65% !important;
          .el-input__inner {
            height: 30px !important;
            line-height: 30px !important;
          }
        }
      }
    }
  }
}
</style>
