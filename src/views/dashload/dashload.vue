<template>
  <div class="dashload-wrap">
    <div class="cards">
      <div class="item" v-for="(val, index) in cardList" :key="index">
        <card :dataObj="val"></card>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import Card from '@/views/dashload/components/Card.vue'

@Component({
  components: {
    Card
  }
})
export default class About extends Vue {
  public cardList = [
    {
      icon: 'el-icon-help',
      num: 37,
      tip: '总资产数',
      style: {
        background: '#67b7dc'
      }
    },
    {
      icon: 'el-icon-help',
      num: 44,
      tip: '总资产数111',
      style: {
        background: 'yellow'
      }
    },
    {
      icon: 'el-icon-help',
      num: '35%',
      tip: '总资产数',
      style: {
        background: 'red'
      }
    },
    {
      icon: 'el-icon-help',
      num: 44,
      tip: '总资产数111',
      style: {
        background: 'skyblue'
      }
    }
  ]
  created() {}
}
</script>

<style lang='less' scoped>
.dashload-wrap {
  background-color: #e8ebf1;
  height: 100%;
  padding: 20px;
  .cards {
    display: flex;
    .item {
      width: 25%;
      margin-right: 20px;
    }
    .item:last-child {
      margin: 0;
    }
  }
}
</style>
