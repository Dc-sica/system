<template>
  <div :class="{'hidden':hidden}"
       class="pagination-container">
    <el-pagination :hide-on-single-page="value"
                   :background="background"
                   :current-page.sync="currentPage"
                   :page-size.sync="currentPageSize"
                   :layout="layout"
                   :page-sizes="pageSizes"
                   :total="total"
                   v-bind="$attrs"
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange" />
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    total: {
      required: true,
      type: Number
    },
    page: {
      type: Number,
      default: 1
    },
    pageSize: {
      type: Number,
      default: 20
    },
    pageSizes: {
      type: Array,
      default () {
        return [10, 20, 30, 50]
      }
    },
    layout: {
      type: String,
      default: 'total, sizes, prev, pager, next, jumper'
    },
    background: {
      type: Boolean,
      default: true
    },
    value: {
      type: Boolean,
      default: false
    },
    hidden: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentPage: {
      get () {
        return this.page
      },
      set (val) {
        this.$emit('update:page', val)
      }
    },
    currentPageSize: {
      get () {
        // console.log(this.pageSize)
        return this.pageSize
      },
      set (val) {
        // console.log(val)
        this.$emit('update:pageSize', val)
      }
    }
  },
  methods: {
    handleSizeChange (val) {
      this.$emit('pagation', {
        page: this.currentPage,
        pageSize: val
      })
    },
    handleCurrentChange (val) {
      this.$emit('pagation', {
        page: val,
        pageSize: this.pageSize
      })
    }
  }
}
</script>

<style scoped lang="less" >
.pagination-container {
  background: #fff;
  padding: 20px 16px;
  text-align: right;
}

.pagination-container.hidden {
  display: none;
}
.pagination-container/deep/.el-pagination.is-background
  .el-pager
  li:not(.disabled).active {
  background-color: #ffff;
  color: #ff8c00;
  border: 1px solid #ff8c00;
}
.pagination-container/deep/.el-pagination.is-background .btn-next,
.el-pagination.is-background .btn-prev,
.el-pagination.is-background .el-pager li {
  background-color: #fff;
  border: 1px solid rgba(232, 234, 237, 1);
}
.pagination-container/deep/.el-pagination .btn-prev {
  background-color: #fff;
  border: 1px solid rgba(232, 234, 237, 1);
}
.pagination-container/deep/.el-pager li {
  background-color: #fff;
  border: 1px solid rgba(232, 234, 237, 1);
}
</style>
