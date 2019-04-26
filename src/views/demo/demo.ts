import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
// import {  } from '@/components' // 组件

@Component({})
export default class About extends Vue {
  private myThis:any = this
  created () {
    //
  }

  activated () {
    //
  }

  mounted () {
    //
  }

  goto () {
    this.myThis.$router.push({ path: 'dashload' })
    // this.$router.push({ path: 'dashload' })
  }

  beforeRouteLeave (to:any, from:any, next:any) {
    console.log(1111)
    to.meta.keepAlive = false
    next()
  }
  // 初始化函数
  init () {
    //
  }
}
