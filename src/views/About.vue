<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div class="test test-1">
      <div class="scrollbar"></div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class Home extends Vue {
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
    console.log('result', result)
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
    console.log('result2', result)
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
