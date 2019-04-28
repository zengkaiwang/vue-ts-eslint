import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
// import '@/icons/age'
// import {  } from '@/components' // 组件

@Component({})
export default class About extends Vue {
  private mynum: number = 0;

  add () {
    this.mynum++
  }

  created () {
    this.$message({
      message: '恭喜你，这是一条成功消息',
      type: 'success'
    })
  }

  activated () {
    //
  }

  mounted () {
    //
  }

  // 初始化函数
  init () {
    //
  }
}
