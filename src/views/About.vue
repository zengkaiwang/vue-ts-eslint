<template>
  <div class="about">
    <div style="margin: 200px auto;text-align: center;">
      <!-- <div v-if="wx">{{wx}}</div> -->
      <!-- <input type="file" capture="camera" accept="image/*" /> -->
      <input type="file" accept="image/*" />
      <el-button @click="choosePhoto">调取微信api</el-button>
      <input type="file" accept="image/*" multiple />
      <input type="file" accept="image/*" capture="camera" />
      <input type="file" accept="video/*" capture="camcorder" />
      <input type="file" accept="audio/*" capture="microphone" />
      <input type="file" capture="camera" accept="image/*" id="cameraInput" name="cameraInput" />
    </div>
    <h1 ref="aaa">This is an about page</h1>
    <div>
      <el-form
        :model="numberValidateForm"
        ref="numberValidateForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="年龄"
          prop="age"
          :rules="[
            { required: true, message: '年龄不能为空'},
            { type: 'number', message: '年龄必须为数字值'}
          ]"
        >
          <el-input type="age" v-model.number="numberValidateForm.age" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('numberValidateForm')">提交</el-button>
          <el-button @click="resetForm('numberValidateForm')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="test test-1">
      <div class="scrollbar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import ElForm from '../../node_modules/element-ui/packages/form/src/form.vue'

@Component({
  components: {
    ElForm
  }
})
export default class Home extends Vue {
  public numberValidateForm: any = {
    age: ''
  }
  private name: string = 'name'
  skus: any = [
    {
      count: 1,
      price: 11,
      thumbnails: '01A83730D1021014',
      characters: [
        {
          fieldId: 129,
          fieldName: '颜色',
          valueId: 357,
          valueName: '白色'
        },
        {
          fieldId: 127,
          fieldName: '尺码',
          valueId: 350,
          valueName: '36码'
        }
      ]
    },
    {
      count: 1,
      price: 11,
      thumbnails: '01A83730D1021014',
      characters: [
        {
          fieldId: 129,
          fieldName: '颜色',
          valueId: 357,
          valueName: '白色'
        },
        {
          fieldId: 127,
          fieldName: '尺码',
          valueId: 351,
          valueName: '37码'
        }
      ]
    },
    {
      count: 1,
      price: 11,
      thumbnails: '01A83730D1021014',
      characters: [
        {
          fieldId: 129,
          fieldName: '颜色',
          valueId: 358,
          valueName: '黑色'
        },
        {
          fieldId: 127,
          fieldName: '尺码',
          valueId: 350,
          valueName: '36码'
        }
      ]
    },
    {
      count: 1,
      price: 11,
      thumbnails: '01A83730D1021014',
      characters: [
        {
          fieldId: 129,
          fieldName: '颜色',
          valueId: 358,
          valueName: '黑色'
        },
        {
          fieldId: 127,
          fieldName: '尺码',
          valueId: 351,
          valueName: '37码'
        }
      ]
    }
  ]

  created() {
    const result: any = []
    const tagObj: any = {}
    // 循环出第一层规格值数组
    for (const el of this.skus) {
      let character = el.characters[0]
      if (!tagObj[character.valueId]) {
        result.push({
          ...character,
          children: []
        })
        tagObj[character.valueId] = 1
      }
    }

    // 向第一层规格值数组中每一个元素的children中，push符合条件的sku
    // console.log('result', result)
    for (const el of result) {
      for (const ele of this.skus) {
        let isChecked = false
        let character = ele.characters.find((item: any) => {
          return item.valueId === el.valueId
        })
        if (character) {
          el.children.push(ele)
        }
      }
    }
    // console.log('result2', result)
  }

  mounted() {
    // console.log('aaaaa', this.$refs.aaa)
  }

  beforeRouteEnter (to: any, from: any, next: any) {
    debugger
    next()
  }

  submitForm(formName: any) {
    ;(this.$refs[formName] as any).validate((valid: any) => {
      if (valid) {
        alert('submit!')
      } else {
        console.log('error submit!!')
        return false
      }
    })
  }
  resetForm(formName: any) {
    debugger
    // ;(this.$refs[formName] as any).resetFields()
    ;(this.$refs[formName] as any).clearValidate()
  }

  choosePhoto() {
    // alert(1111)
    debugger
    // wx.chooseImage({
    //   count: 1, // 默认9
    //   sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
    //   sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
    //   success: function (res: any) {
    //     var localIds = res.localIds // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
    //   }
    // })
    // wx.config({
    //   debug: true, // 是否开启调试模式
    //   appId: '{$sign.appId}', //
    //   // timestamp: {$sign.timestamp},
    //   nonceStr: '{$sign.nonceStr}',
    //   signature: '{$sign.signature}',
    //   jsApiList: [
    //   // 所有要调用的 API 都要加到这个列表中
    //     'checkJsApi', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage', 'onMenuShareTimeline', 'chooseWXPay', 'getLocalImgData'
    //   ]
    // })

    // wx.ready(() => {
    //   debugger
    //   console.log('wx ready')
    // })

    /* wx.ready(() => {
      // 在这里调用 API
      var images = {
      localId: [],
      serverId: []
      };
      var i=0;
      document.querySelector('#chooseImage').onclick = function() {
      if($(".uimg").length>0){
      var thatcount=9-$(".uimg").length;
      }else{
      var thatcount=9;
      }

      wx.chooseImage({//选择图片
      count:thatcount,//限制上传图片的张数
      success: function(res) {
        images.localId = res.localIds;
        var str="";
        var i = 0, length =images.localId.length;
        images.serverId = [];
        // upload();
      }
      // function upload() {
      //   wx.uploadImage({//上传图片
      //     localId: images.localId[i],
      //     isShowProgressTips:0,
      //     success: function(res: any) {
      //       console.log(111)
      //     }
      //   })
      // }
    }) */
  }
}
</script>

<style lang="less">
.test {
  width: 50px;
  height: 200px;
  overflow: auto;
  margin: 5px;
  border: none;
  background-color: pink;
  margin: 0 auto;
}
.scrollbar {
  width: 30px;
  height: 300px;
  margin: 0 auto;
}
.test-1::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 10px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
}
.test-1::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 10px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  background: #535353;
}
.test-1::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background: #ededed;
}
</style>
