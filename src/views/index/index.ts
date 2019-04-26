import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { IndexData } from '@/types/views/index.interface'
import Nav from '@/components/nav/nav.vue'
import Header from '@/components/header/header.vue'
@Component({
  components: {
    Nav,
    Header
  }
})
export default class About extends Vue {
  private myThis:any = this
  // Getter
  // @Getter author

  // Action
  // @Action GET_DATA_ASYN

  // data
  // data: IndexData = {
  //   pageName: 'index'
  // }
  public aaa: string = '';
  public bbb: string = 'bbbbbbbbb';
  created () {
    // this.GET_DATA_ASYN()
  }
  getchild (event:any) {
    console.log(event)
  }
  activated () {
    //
  }

  mounted () {
    //
  }

  get Myname () {
    return '这是一个computed'
  }

  test () {
    this.myThis.$message({
      message: '恭喜你，这是一条成功消息',
      type: 'success'
    })
  }
  // 初始化函数
  init () {
    //
  }
}
