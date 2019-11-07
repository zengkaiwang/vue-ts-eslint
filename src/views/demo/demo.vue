<template>
  <div class="demo-wrap">
    <i class="icon-icon-admin-o"></i>
    <el-table
      :data="tableData"
      style="width: 100%;margin-bottom: 20px;"
      row-key="id"
      :border="false"
      default-expand-all
      :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
    >
      <el-table-column prop="date" label="属性名" sortable width="240" align="center"></el-table-column>
      <el-table-column prop="name" label="显示名称" sortable width="180" head-align="center"></el-table-column>
      <el-table-column prop="address" label="最大长度"></el-table-column>
      <el-table-column prop="address" label="数据类型"></el-table-column>
      <el-table-column prop="address" label="默认值"></el-table-column>
      <el-table-column prop="address" label="单位"></el-table-column>
      <el-table-column prop="address" label="是否度量"></el-table-column>
      <el-table-column prop="address" label="是否维保"></el-table-column>
      <el-table-column prop="address" label="是否可见"></el-table-column>
      <el-table-column prop="address" label="是否累积量"></el-table-column>
      <el-table-column prop="address" label="是否维保"></el-table-column>
      <el-table-column prop="address" label="是否维保"></el-table-column>
    </el-table>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator'
import { Getter, Action } from 'vuex-class'

@Component({
  components: {}
})
export default class About extends Vue {
  public cardList = 'sss'
  public tableData = [
    {
      id: 1,
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄'
    },
    {
      id: 3,
      date: '2016-05-01',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1519 弄',
      children: [
        {
          id: 31,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          children: [
            {
              id: 222,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            },
            {
              id: 333,
              date: '2016-05-01',
              name: '王小虎',
              address: '上海市普陀区金沙江路 1519 弄'
            }
          ]
        },
        {
          id: 32,
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }
      ]
    },
    {
      id: 4,
      date: '2016-05-03',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1516 弄'
    }
  ]
  created() {}
}
</script>

<style lang='less' scoped>
.demo-wrap {
  text-align: center;
}
</style>

<style lang="less" scoped>
.demo-wrap {
  padding: 40px;
  .el-table  {
    & /deep/ .el-icon {
      font-family: 'lenovo-icomoon' !important;
      font-size: 14px;
      top: 36%;
      font-weight: 700;
      color: skyblue;
      &:before {
        content: "\e903";
      }
    }
    // 展开状态
    & /deep/ .el-table__expand-icon.el-table__expand-icon--expanded {
      transform: rotate(0deg);
      .el-icon:before {
        content: "\e900";
      }
    }
  }
}
</style>
