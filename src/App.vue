<template>
  <div id="app">
    <el-container>
      <el-aside width="220px" style="overflow:hidden;">
        <Menu :defalutOpens="defalutOpens"></Menu>
      </el-aside>

      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import Menu from '@/components/menu.vue'

@Component({
  components: {
    Menu
  }
})
export default class Home extends Vue {
  public defalutOpens: any[] = ['2', '3']
  // public defalutOpens: any[] = []

  created() {}
}
</script>

<style lang="less">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.el-container {
  // align-items: center;
  height: 100vh;

  .el-aside {
    height: 100%;
    .el-menu {
      height: 100%;
    }
  }

  .el-main {
    height: 100%;
    background-color: pink;
  }
}
</style>
