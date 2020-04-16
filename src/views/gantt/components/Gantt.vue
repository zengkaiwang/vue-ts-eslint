<template>
  <dir>
    <!-- <div ref="gantt" style="height: 200px;"></div> -->
    <div ref="gantt"></div>
    <div>sfsfsffss</div>
  </dir>
</template>

<script>
import 'dhtmlx-gantt'
export default {
  name: 'gantt',
  props: {
    tasks: {
      type: Object,
      default() {
        return { data: [], links: [] }
      }
    }
  },

  mounted: function() {
    // gantt.config.xml_date = '%Y-%m-%d %H:%i'
    gantt.config.xml_date = '%Y-%m-%d'
    // gantt.config.task_date = '%d-%m-%Y'
    gantt.config.autosize = 'y'
    // gantt.config.duration_unit = 'hour'
    gantt.init(this.$refs.gantt)
    gantt.parse(this.$props.tasks)
  }
}
</script>

<style>
@import '~dhtmlx-gantt/codebase/dhtmlxgantt.css';
</style>
