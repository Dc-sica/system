
<template>
  <div v-if="item.keepAlive!=1">
    <template v-if="item.childNodes.length===0">
      <el-menu-item :index="item.path"
        :key="item.menuId"
        v-if="item.hidden!==1"
        :class="{ 'active':item.path==currentPath}">
        <i class="iconfont"
          v-html="item.icon">{{item.icon}}</i>
        <span slot="title">{{item.name}}</span>
      </el-menu-item>
    </template>
    <template v-else>
      <el-submenu :index="item.path"
        :key="item.menuId">
        <template slot="title">
          <i class="iconfont"
            v-html="item.icon"
            style="padding-right:15px">{{item.icon}}</i>
          <span>{{item.name}}</span>
        </template>
        <template v-for="child in item.childNodes">
          <sidebar-item v-if="child.childNodes.length>0"
            :item="child"
            :key="child.menuId" />
          <template v-else>
            <el-menu-item :index="child.path"
              v-if="child.hidden!==1"
              :key="child.menuId"
              :class="{ 'active':child.path==currentPath}">
              <i class="iconfont"
                v-html="child.icon"></i>
              <span slot="title">{{child.name}}</span>
            </el-menu-item>
          </template>
        </template>
      </el-submenu>
    </template>
  </div>
</template>
<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      currentPath: ''
    }
  },
  methods: {
    setCurrentPath (hroutePath) {
      this.currentPath = hroutePath
    }
  },
  created () {
    this.setCurrentPath(this.$route.meta.menuPath)
  },
  watch: {
    $route (to, from) {
      this.setCurrentPath(to.meta.menuPath)
    }
  }
}
</script>

<style lang="less" scoped>
.el-menu-item {
  font-size: 15px;
  i {
    font-size: 16px;
    margin-right: 10px;
  }
}
.el-menu-item.active {
  background-color: #24b4ce;
  font-weight: bold;
}
</style>
