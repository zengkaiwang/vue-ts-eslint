<template>
  <div class="custom-tree-container">
    <div class="block">
      <p>使用 scoped slot</p>
      <el-tree :data="data" node-key="id" :expand-on-click-node="true" accordion>
        <span class="custom-tree-node" slot-scope="{ node, data }">
          <span>
            <!-- <i class="el-icon-delete"></i> -->
            {{ node.label }}
          </span>
          <!-- <span>1212</span> -->
          <!-- <span>
            <el-button type="text" size="mini" @click="() => append(data)">Append</el-button>
            <el-button type="text" size="mini" @click="() => remove(node, data)">Delete</el-button>
          </span>-->
          <div>
            <el-select v-if="node.id === 1" v-model="defaultValue" placeholder="请选择">
              <el-option :label="'1'" :value="'1111'"></el-option>
              <el-option :label="'2'" :value="'2222'"></el-option>
            </el-select>
            <!-- <el-date-picker
              v-else-if="node.id === 2"
              v-model="defaultValue"
              type="datetime"
              placeholder="选择日期时间"
              format="yyyy-MM-dd HH:mm:ss"
            ></el-date-picker>-->
            <el-date-picker
              v-else-if="node.id == 2"
              v-model="value1"
              type="datetime"
              placeholder="选择日期时间"
            ></el-date-picker>
            <el-input v-else v-model="defaultValue"></el-input>
          </div>
        </span>
      </el-tree>
    </div>
  </div>
</template>

<script>
let id = 1000

export default {
  data() {
    const data = [
      {
        id: 1,
        label: '一级 1',
        children: [
          {
            id: 4,
            label: '二级 1-1',
            children: [
              {
                id: 9,
                label: '三级 1-1-1'
              },
              {
                id: 10,
                label: '三级 1-1-2'
              }
            ]
          }
        ]
      },
      {
        id: 2,
        label: '一级 2',
        children: [
          {
            id: 5,
            label: '二级 2-1'
          },
          {
            id: 6,
            label: '二级 2-2'
          }
        ]
      },
      {
        id: 3,
        label: '一级 3'
        // children: [
        //   {
        //     id: 7,
        //     label: '二级 3-1'
        //   },
        //   {
        //     id: 8,
        //     label: '二级 3-2'
        //   }
        // ]
      }
    ]
    return {
      data: JSON.parse(JSON.stringify(data)),
      data: JSON.parse(JSON.stringify(data)),
      defaultValue: '',
      value1: ''
    }
  },

  methods: {
    append(data) {
      const newChild = { id: id++, label: 'testtest', children: [] }
      if (!data.children) {
        this.$set(data, 'children', [])
      }
      data.children.push(newChild)
    },

    remove(node, data) {
      const parent = node.parent
      const children = parent.data.children || parent.data
      const index = children.findIndex(d => d.id === data.id)
      children.splice(index, 1)
    }
  }
}
</script>

<style lang='less'>
.custom-tree-node {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 14px;
  padding-right: 8px;
}
// 修改el-tree默认图标开始
.el-tree .el-tree-node__expand-icon.expanded {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
}
.el-tree .el-icon-caret-right:before {
  // background: url('../assets/logo.png') no-repeat 0 3px;
  content: '\e723';
  display: block;
  width: 18px;
  height: 18px;
  font-size: 18px;
  background-size: 18px;
}
.el-tree .el-tree-node__expand-icon.expanded.el-icon-caret-right:before {
  // background: url('../assets/imgs/common/logo.png') no-repeat 0 3px;
  content: '\e722';
  display: block;
  width: 18px;
  height: 18px;
  font-size: 18px;
  background-size: 18px;
}
.el-tree-node__expand-icon.is-leaf::before {
  display: none;
}
.el-tree-node__expand-icon.is-leaf {
  padding-right: 24px;
}
// 修改el-tree默认图标结束
.el-tree {
  .el-tree-node__content {
    height: auto;
  }
}
</style>