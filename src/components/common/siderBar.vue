<template>
  <div id="sider-bar"
    :class="{ 'hide-menu': !leftShow }"
    class="p-animation">
    <el-menu router
      mode="vertical"
      :collapse="!leftShow"
      :collapse-transition="false">
      <sidebar-item v-for="item in treeData"
        :key="item.menuId"
        :index="item.path"
        :item="item" />
    </el-menu>
  </div>
</template>

<script>
import SidebarItem from '../common/sideBarItem'
import menuItems from './../../utils/menuItems' // 调试
export default {
  name: 'siderbar',
  components: { SidebarItem },
  props: {
    leftShow: Boolean
  },
  data () {
    return {
      currentPath: '/home',
      topLen: 0,
      defaultProps: {
        children: 'childNodes',
        label: 'name'
      },
      routersData: [
      ],
      treeData: [],
    }
  },
  created () {
    this.setCurrentPath(this.$route.meta.menuPath)
    this.getMenusTree()
  },
  methods: {
    setCurrentPath (hroutePath) {
      this.currentPath = hroutePath
    },
    linkrouter (obj) {
      this.$router.push({ path: obj.path })
    },
    getMenusTree () {
      this.treeData = menuItems
      // this.treeData = JSON.parse(localStorage.menuTree)
    },

  },
  watch: {
    $route (to, from) {
      this.setCurrentPath(to.meta.menuPath)
    }
  }
}
</script>

<style lang="less" scoped>
.hide-menu {
  width: 58px !important;
  .el-submenu__icon-arrow {
    display: none;
  }
}
.menu-tips-box {
  position: fixed;
  border: 1px solid #eeee;
  border-radius: 3px;
  box-shadow: 0px 2px 6px #999;
  top: 0px;
  left: 62px;
  background: #fff;
  color: #999;
  font-size: 12px;
  padding: 8px 8px;
}
#sider-bar {
  height: calc(100vh - 0px);
  width: 200px;
  margin-right: 15px;
  overflow-x: hidden;
  overflow-y: scroll;
  background: #1c93a7;
  color: #fff;
}
#sider-bar /deep/ .el-menu {
  background: #1c93a7;
  border-right: none;
  margin-top: 10px;
}
#sider-bar /deep/ .el-menu-item:hover {
  background-color: #24b4ce;
}

#sider-bar /deep/ .el-menu-item:focus {
  background-color: #24b4ce;
}
#sider-bar /deep/.el-menu-item i {
  color: #fff;
}
#sider-bar /deep/ .el-menu-item {
  color: #fff;
}
#sider-bar /deep/ .el-submenu__title {
  color: #fff;
}
#sider-bar /deep/ .el-submenu__title i {
  color: #fff;
}
#sider-bar /deep/ .el-submenu__title i.iconfont {
  font-size: 20px;
}
#sider-bar /deep/ .el-submenu__title:hover:hover {
  background-color: #24b4ce;
}
</style>
<style>
.hide-menu {
  width: 58px !important;
}
.hide-menu span {
  display: none;
}
.hide-menu .el-submenu__icon-arrow {
  display: none;
}
</style>
