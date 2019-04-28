<template>
	<div class='nav-style'>
    <div class="logo">
    </div>
    <div class="nav-items">
      <ul>
        <li v-for="item in navList" :key="item.id" @click="checkrouter(item)">
          <i :class="item.icon" class="icon-style"></i>
          <span>{{ item.name }}</span>
        </li>
      </ul>
    </div>
	</div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator'
import { Getter, Action, Mutation } from 'vuex-class'
import * as IndexApi from '@/api/index'

@Component({})

export default class Nav extends Vue {
  // @Mutation UPDATE_STATE:any
  public navList: object[] = [];
  mounted () {
    // IndexApi.getNav().then((data:any) => {
    //   console.log(data)
    //   this.navList = data.data.list
    // })
  }
  checkrouter (item:any) {
    // this.UPDATE_STATE({ author: item.name })
    console.log(item.url)
    this.$router.push({ path: item.url })
  }
}
</script>

<style lang='less'>
  .nav-style {
    width: 120px;
    height: 100%;
    background: #1A1E2B;
    .logo {
      width: 67px;
      height: 67px;
      background: red;
      margin:0 auto;
    }
    .nav-items {
      margin-top: 7px;
      li {
        width: 78px;
        height: 78px;
        border: 1px solid #3E465F;
        border-radius: 11px;
        font-size: 12px;
        color: #CCD4E4;
        text-align: center;
        margin: 0 auto 13px;
        cursor: pointer;
        .icon-style {
          display: block;
          width: 25px;
          height: 25px;
          font-size: 22px;
          text-align: center;
          margin: 15px auto 3px;
        }
      }
    }
	}
</style>
