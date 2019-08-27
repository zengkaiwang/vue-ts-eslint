<template>
  <div class="card" :style="dataObj.style">
    <div class="left">
      <i :class="dataObj.icon"></i>
    </div>
    <div class="right">
      <p class="num">{{dataObj.num}}</p>
      <p class="tip">{{dataObj.tip}}</p>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component({})
export default class Card extends Vue {
  @Prop() dataObj?: any
  created() {}
}
</script>

<style lang='less' scoped>
.card {
  display: flex;
  width: 100%;
  .left {
    padding: 40px 30px;
    i {
      width: 60px;
      height: 60px;
      font-size: 60px;
    }
  }
  .right {
    color: #ffffff;
    padding-top: 24px;
    .num {
      font-size: 40px;
      letter-spacing: -2px;
      line-height: 58px;
    }
    .tip {
      opacity: 0.6;
      font-size: 14px;
      letter-spacing: -0.7px;
      line-height: 20px;
    }
  }
}
</style>
