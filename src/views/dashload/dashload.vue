<template>
  <div class="dashload-wrap">
    <div class="cards"></div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component({})
export default class About extends Vue {
  created() {
    this.$message({
      message: '恭喜你，这是一条成功消息',
      type: 'success'
    })
  }
}
</script>

<style lang='less' scoped>
.dashload-wrap {
  width: 100%;
  .aaa {
    font-size: 30px;
    color: red;
  }
}
</style>
