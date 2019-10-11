<template>
  <div class="dashload-wrap">sfsf</div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component({
  components: {}
})
export default class About extends Vue {
  public cardList = 'sss'
  public assetsNumberMap: any = new Map([
    [0, '10台以下'],
    [1, '11-100台'],
    [2, '100-500台'],
    [3, '500-1000台'],
    [4, '1000台以上']
  ])

  created() {
    console.log(this.assetsNumberMap.get(0), 111)
  }
}
</script>

<style lang='less' scoped>
</style>