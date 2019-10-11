<template>
  <div class="dashload-wrap">
    <!-- <a href="@/assets/imgs/pdffile.pdf"></a> -->
    <!-- <a
      href="http://www.xdocin.com/xdoc?_func=to&_format=html&_cache=1&_xdoc=http://www.xdocin.com/demo/demo.docx"
      target="_blank"
      rel="nofollow"
    >XDOC</a>
    <iframe
      src="https://view.officeapps.live.com/op/view.aspx?src=http://storage.xuetangx.com/public_assets/xuetangx/PDF/1.xls"
      width="100%"
      height="100%"
      frameborder="1"
    ></iframe>-->
    <!-- <vpdf></vpdf> -->
    <!-- <pdf src="http://localhost:8082/pdffile.pdf"></pdf> -->
    <pdf src="./pdffile.pdf" style="width: 300px;"></pdf>
    <!-- <img src="http://127.0.0.1:8083/logo.png"></img> -->
    <!-- <pdf src="../../assets/pdffile.pdf"></pdf> -->
    <img src="../../assets/imgs/common/bg_01.png" alt />
    <!-- <img src="@/assets/logo.png" alt /> -->
    <!-- <img src="/static/logo.png" alt /> -->

    <!-- <iframe src="'https://docs.google.com/viewer?url="fileurl"></iframe> -->
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'
import pdf from 'vue-pdf'
// import vpdf from '@/components/vpdf.vue'

@Component({
  components: {
    // vpdf,
    pdf
  }
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
    // console.log(this.assetsNumberMap.get(0), 111)
    console.log(pdf, 222)
  }
}
</script>

<style lang='less' scoped>
.dashload-wrap {
  a {
    display: inline-block;
    width: 500px;
    height: 500px;
  }
}
</style>
