<template>
    <!-- Add task form -->
    <div v-if="showAddTask">
      <AddTask @add-task="handleAddTask" />
    </div>

    <!-- List Task -->
    <Tasks
      @dblclick-reminder-task="toggleReminderTask"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
</template>

<script>
import Tasks from '../components/Tasks.vue'
import AddTask from '../components/AddTask.vue'

export default {
    name: "HomePage",
    components: {
        Tasks,
        AddTask
    },
    props: {
        showAddTask: Boolean
    },
    data() {
        return {
            tasks: []
        }
    },
    methods: {
    async handleAddTask(task) {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
      })

      const newTask = await res.json()

      this.tasks.unshift(newTask);
    },
    async deleteTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })

      if(res.status !== 200) {
        alert('Failed to delete task')
        return
      }

      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    async toggleReminderTask(id) {
      const task = await this.fetchTask(id)
      const updateTask = {...task, reminder: !task.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(updateTask)
      })
      const data = await res.json()

      this.tasks = this.tasks.map((_task) => {
        if (_task.id === id) {
          return {
            ..._task,
            reminder: data.reminder,
          };
        } else {
          return _task;
        }
      });
    },
    async fetchTasks() {
      const res = await fetch(`http://localhost:5000/tasks`)
      const tasks = await res.json();

      return tasks
    },
    async fetchTask(id) {
      const res = await fetch(`http://localhost:5000/tasks/${id}`)
      const task = await res.json();

      return task
    }
  },
    async created() {
        this.tasks = await this.fetchTasks()
    },
}
</script>