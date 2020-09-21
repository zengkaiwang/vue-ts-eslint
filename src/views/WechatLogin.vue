<template>
  <div class="home">
    <div class="{styles.login_container}" id="login_container"></div>
    <el-button>微信登录</el-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {
  private name: string = 'name'

  created() {
    // 1号店示例二维码
    // console.log('WxLogin', WxLogin)
    // var obj = new WxLogin({
    //   self_redirect: false,
    //   id: 'login_container',
    //   appid: 'wxbdc5610cc59c1631',
    //   scope: 'snsapi_login',
    //   redirect_uri: encodeURIComponent(
    //     'http://' + window.location.host + '/...'
    //   ),
    //   state: Math.ceil(Math.random() * 1000),
    //   style: 'black',
    //   href: ''
    // })
  }
}
</script>
