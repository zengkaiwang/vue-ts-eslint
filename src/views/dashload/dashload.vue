<template>
  <div class='dashload-wrap'>
    {{ mynum}}
    <el-button type="primary" @click="add">主要按钮</el-button>
    <svgicon icon="age" width="200" height="200" color="#42b983 #35495e"></svgicon>
  </div>
</template>

<script lang='ts' src='./dashload.ts'></script>

<style lang='less'>
  @import './dashload.less';
</style>
