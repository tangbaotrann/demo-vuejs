<template>
  <div class="main">
    <Header
      title="Task Tracker"
      :showAddTask="showAddTask"
      @show-form-add-task="handleShowFormAddTask"
    />

    <!-- Add task form -->
    <div v-if="showAddTask">
      <AddTask @add-task="handleAddTask" />
    </div>

    <Tasks
      @dblclick-reminder-task="toggleReminderTask"
      @delete-task="deleteTask"
      :tasks="tasks"
    />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Tasks from "./components/Tasks.vue";
import AddTask from "./components/AddTask.vue";

export default {
  name: "App",
  components: {
    Header,
    Tasks,
    AddTask,
  },
  data() {
    return {
      tasks: [],
      showAddTask: false,
    };
  },
  methods: {
    handleShowFormAddTask() {
      this.showAddTask = !this.showAddTask;
    },
    handleAddTask(task) {
      this.tasks.unshift(task);
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleReminderTask(id) {
      this.tasks = this.tasks.map((task) => {
        if (task.id === id) {
          return {
            ...task,
            reminder: !task.reminder, // updated: true or false.
          };
        } else {
          return task;
        }
      });
    },
  },
  created() {
    this.tasks = [
      {
        id: 1,
        text: "Task 1",
        day: "22/01/2015",
        reminder: true,
      },
      {
        id: 2,
        text: "Task 2",
        day: "12/02/2015",
        reminder: false,
      },
      {
        id: 3,
        text: "Task 3",
        day: "02/09/2015",
        reminder: true,
      },
    ];
  },
};
</script>

<style scoped>
.main {
  max-width: 1250px;
  margin: 0 auto;
}
</style>
