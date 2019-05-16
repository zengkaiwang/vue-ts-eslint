<template>
  <div class="wrap">
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HelloWorld from '@/components/HelloWorld.vue' // @ is an alias to /src

@Component({
  components: {
  }
})
export default class MyElement extends Vue {
  private name:string = 'jack'
  
  created () {
    // this.$message('这是一条消息提示')
  }
}
</script>
