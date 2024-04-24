<template>
  <div
    @dblclick="onDblToggleReminder(task.id)"
    :class="[task.reminder ? 'reminder' : '', 'task']"
  >
    <h3>
      {{ task.text }}
      <span class="ic_del" @click="onDelete(task.id)">X</span>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object,
  },
  methods: {
    onDelete(id) {
      this.$emit("delete-task", id);
    },
    onDblToggleReminder(id) {
      this.$emit("dblclick-reminder-task", id);
    },
  },
};
</script>

<style scoped>
.task {
  background-color: #f4f4f4;
  margin: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.task.reminder {
  border-left: 5px solid green;
}

.task h3 {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.ic_del {
  color: red;
}

.ic_del:hover {
  cursor: pointer;
  opacity: 0.5;
}
</style>
