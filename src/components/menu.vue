<template>
  <el-menu
    mode="vertical"
    :router="true"
    default-active="/print"
    class="el-menu-demo"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-openeds="defalutOpens"
    :unique-opened="false"
  >
    <el-menu-item index="/home">Home</el-menu-item>
    <el-menu-item index="/about">About</el-menu-item>
    <el-menu-item index="/index">dashload</el-menu-item>
    <el-menu-item index="/print">打印</el-menu-item>
    <el-submenu index="2">
      <template slot="title">甘特图</template>
      <el-menu-item index="/gantt">甘特图一</el-menu-item>
      <el-menu-item index="/gantt02">甘特图二</el-menu-item>
    </el-submenu>
    <el-submenu index="3">
      <template slot="title">树结构</template>
      <el-menu-item index="/tree">tree</el-menu-item>
      <el-menu-item index="/index/treeTable">treeTable</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Menu extends Vue {
  @Prop() defalutOpens!: any

  public navList: any[] = []
  public defaultOpenedUrl: any[] = [
    '/commodity',
    '/merchandise',
    '/transaction'
  ]

  created() {
    // console.log('defalutOpens', this.defalutOpens)
  }
}
</script>

<style lang="less">
.el-menu {
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
