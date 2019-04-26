import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import { LoginData } from '@/types/views/login.interface'

@Component({
  components: {
  }
})
export default class About extends Vue {
  // Getter
  // @Getter author
  // Action
  // @Action GET_DATA_ASYN
  // data
  data: LoginData = {
    pageName: 'login'
  }

  created () {
    //
  }

  activated () {
    //
  }

  mounted () {
    //
  }

  // 初始化函数
  init () {
    console.log(111)
  }
}
