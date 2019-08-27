<template>
  <div class="index-wrap">
    <!-- <div class="nav">
      <Nav></Nav>
    </div>-->
    <div class="content">
      <!-- <div class="header">
        <Header></Header>
      </div>-->
      <div class="main">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
      </div>
    </div>
  </div>
</template>

<script lang='ts' src='./index.ts'></script>

<style lang='less'>
@import './index.less';
</style>
