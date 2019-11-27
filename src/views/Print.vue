<template>
  <div>
    <el-button @click="printCode">打印</el-button>
    <ul
      id="codeImgviewer"
      v-if="codePicList != null && codePicList.length != 0"
    >
      <li v-for="(item,index) in codePicList" v-bind:key="index" style="list-style: none;">
        <div :style="liStyleObj">
          <p class="text">{{item.name}}1111</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script src="https://printjs-4de6.kxcdn.com/print.min.js"></script>
<script>
// import print from 'print-js'
export default {
  components: {},
  data() {
    return {
      codePicList: [],
      liStyleObj: {
        'page-break-after': 'always'
      }
    }
  },
  created() {
    this.codePicList = [
      {
        name: 'zhangsan'
      },
      {
        name: 'wangwu'
      }
    ]
  },
  methods: {
    printCode() {
      // print('codeImgviewer', 'html')
      // if (this.codePicList === null || this.codePicList.length === 0) {
      //   return
      // }

      var body = window.document.body.innerHTML
      window.document.body.innerHTML = document.getElementById(
        'codeImgviewer'
      ).innerHTML
      window.print()
      window.document.body.innerHTML = body
      // 重新载入当前文档:
      location.reload()

      // var newWin = window.open('') // 新打开一个空窗口
      // for (var i = 0; i < this.codePicList.length; i++) {
      //   var imageToPrint = document.getElementById('codeimg' + i) // 将要被打印的图片
      //   newWin.document.write(imageToPrint.outerHTML) // 将图片添加进新的窗口
      // }
      // newWin.document.close() // 在IE浏览器中使用必须添加这一句
      // newWin.focus() // 在IE浏览器中使用必须添加这一句
      // setTimeout(function() {
      //   newWin.print() // 打印
      //   newWin.close() // 关闭窗口
      // }, 100)
    }
  }
}
</script>

<style>
@page {
  /*页面设置：a4 横幅*/
  size: A4 portrait;
  margin: 20%;
}
/* #codeImgviewer {
  font-size: 20px;
  color:red!important;
} */

/* .el-button {
  display: none;
}
#codeImgviewer {
  display: block;
  font-size: 20px;
  color:red;
} */

@media print{
  #codeImgviewer {
    font-size: 100px;
    border: 10px solid red;
    -webkit-print-color-adjust: exact;
    background-color: skyblue;
    color:red;
  }
  .el-button {
    /* display: none; */
  }
  li {
    font-size: 100px;
    border: 10px solid red;
    -webkit-print-color-adjust: exact;
    background-color: skyblue;
    color:red;
  }
}
</style>
