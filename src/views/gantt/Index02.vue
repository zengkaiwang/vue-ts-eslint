<template>
  <div class="container">
    <svg id="gantt" />
    <div>乌拉拉格特图222</div>
  </div>
</template>

<script>
// import 'frappe-gantt'
export default {
  name: 'app',
  data() {
    return {
      tasks: {
        data: [
          {
            id: 1,
            text: 'Task #1',
            start_date: '2020-01-17',
            duration: 3,
            progress: 0.6
          },
          {
            id: 2,
            text: 'Task #2',
            start_date: '2020-01-20',
            duration: 3,
            progress: 0.4
          }
        ],
        links: [{ id: 1, source: 1, target: 2, type: '0' }]
      }
    }
  },
  created() {
    var tasks = [
      {
        id: 'Task 1',
        name: 'Redesign website',
        start: '2016-12-28',
        end: '2016-12-31',
        progress: 20,
        dependencies: 'Task 2, Task 3'
      }
    ]
    console.log('Gantt')
    // console.log('Gantt', Gantt)
    // var gantt = new Gantt('#gantt', tasks)
  }
}
</script>
