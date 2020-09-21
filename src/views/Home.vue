<template>
  <div class="home">
    <textarea v-model="message" @input="doSomething"></textarea>
    <input v-on:keyup.ctrl.67="doSomething" />
    <div>sfsfsf</div>
    <el-table :data="tableData" style="width: 600px;">
      <el-table-column prop="date" label="日期" width="180"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="address" label="di"></el-table-column>
    </el-table>
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private name: string = 'name'
  public message = '111'
  tableData: any[] = []

  created() {
    console.log(this.$router)
    // this.$message('这是一条消息提示')
    // this.$router.push({ path: 'about' })
  }
  doSomething() {
    console.log(121212)
  }
}
</script>
