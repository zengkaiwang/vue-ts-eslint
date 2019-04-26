<template>
  <div class="header-wrap">
    <span class="com-title">{{ author }}</span>
    <div class="person-info">
      <el-badge is-dot class="item">
        <i class="el-icon-bell message" type="primary"></i>
      </el-badge>
      <span class="login-name">Bruce</span>
      <span class="login-avatar">

      </span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

  @Component({})
export default class Header extends Vue {
    @Getter author:any

    created () {
      //
    }

    activated () {
      //
    }

    mounted () {
      //
    }
}
</script>

<style lang="less">
  .el-badge__content.is-fixed {
    top: 18px;
    right: 10px;
  }
  .header-wrap {
    height: 60px;
    background: #E8EBF1;
    padding:0 22px;
    line-height: 60px;
    display: flex;
    justify-content: space-between;
    position: relative;
    .com-title {
      font-size: 16px;
      color: #000;
    }
    .item {
      margin-right: 40px;
    }
    .message {
      font-size: 22px;
    }
    .login-name {
      font-size: 13px;
      color: #2F3648;
      margin-right: 46px;
    }
    .login-avatar{
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      overflow: hidden;
      background: red;
      position: absolute;
      right: 27px;
      bottom: 0;
      top: 0;
      margin: auto;
    }
  }
</style>
