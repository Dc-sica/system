<!--
 * @Author: Jason_Ma
 * @Date: 2021-01-06 11:32:34
 * @LastEditors: Jason_Ma
 * @LastEditTime: 2021-01-06 17:25:31
 * @FilePath: /hos-logistics-management/src/views/Home.vue
-->

<template>
  <div id="sys-home">
    <header-bar @getLeftShow="getLeftShow"></header-bar>
    <div class="p-clear main-box">
      <sider-bar class="p-left"
        :leftShow="leftShow"></sider-bar>
      <div class="main-content p-animation"
        :class="{'main-large':!leftShow}">
        <div class="bread p-clear">
          <span class="current-position">当前位置 : </span>
          <template v-for="(item, index) in breadList">
            <span :key="item"
              v-if="index < breadList.length -1"
              class="current-position p-cursor"
              @click="goPrev(item)">{{item}} > </span>
            <span :key="item"
              v-else>{{item}}</span>
          </template>
        </div>
        <div class="mian-container">
          <router-view />
        </div>
        <div class="footer-info">
          {{this.$baseInfo.COPY_RIGHT}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBar from '../components/common/headerBar'
import siderBar from '../components/common/siderBar'
import routeList from '../routeList'
export default {
  name: 'home',
  components: {
    headerBar,
    siderBar
  },
  data () {
    return {
      breadList: [],
      leftShow: true
    }
  },
  created () {
    this.setBread(this.$route.meta.menuBread)
  },
  methods: {
    setBread (addr) {
      this.breadList = addr
    },
    goPrev (currentUrl) {
      routeList[1].children.forEach(item => {
        if (item.text === currentUrl) {
          this.$router.push(item.path)
        }
      })
    },
    getLeftShow () {
      this.leftShow = !this.leftShow
    }
  },
  watch: {
    $route (to, from) {
      this.setBread(to.meta.menuBread)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/css/home.less";
</style>
