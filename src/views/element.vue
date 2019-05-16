<template>
  <div class="wrap">
    <div>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success" size="mini">成功按钮</el-button>
        <!-- <el-button type="info">信息按钮</el-button> -->
        <!-- <el-button type="warning">警告按钮</el-button> -->
        <!-- <el-button type="danger">危险按钮</el-button> -->
      </el-row>
    </div>

    <div>
      <el-radio v-model="radio" label="1">备选项</el-radio>
      <el-radio v-model="radio" label="2">备选项</el-radio>
    </div>

    <div>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div>

    <div>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
  }
})
export default class MyElement extends Vue {
  private name:string = 'jack'
  private radio:string = '1'
  private input:string = ''
  private value:string = ''
  private options: any = [
    {
      value: '选项1',
      label: '黄金糕'
    }, 
    {
      value: '选项2',
      label: '双皮奶'
    }
  ]
  created () {
    // this.$message('这是一条消息提示')
  }
}
</script>

<style lang="less" scoped>
  .wrap {
    div {
      padding: 10px;
    }
  }
</style>