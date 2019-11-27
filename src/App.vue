<template>
  <div id="app">
    <!-- <div id="nav"> -->
    <el-button>
      <router-link to="/demo">demo</router-link>
    </el-button>
    <el-button>
      <router-link to="/print">打印</router-link>
    </el-button>
    <el-button>
      <router-link to="/home">Home</router-link>
    </el-button>
    <el-button>
      <router-link to="/about">About</router-link>
    </el-button>
    <el-button>
      <router-link to="/index">dashload</router-link>
    </el-button>
    <el-button>
      <router-link to="/tree">树结构</router-link>
    </el-button>
    <el-button>
      <router-link to="/index/treeTable">treeTable</router-link>
    </el-button>
    <!-- </div> -->
    <router-view />
  </div>
</template>

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
</style>
