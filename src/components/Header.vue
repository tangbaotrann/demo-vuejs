<template>
  <header class="header">
    <h1 class="title">{{ title }}</h1>

    <Button
      v-show="homePage"
      :text="showAddTask ? 'Close' : 'Add Task'"
      :bgColor="showAddTask ? 'red' : 'black'"
      @btn-clicked="this.$emit('show-form-add-task')"
    />
  </header>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "Header",
  props: {
    title: String,
    showAddTask: Boolean,
  },
  components: {
    Button,
  },
  computed: {
    homePage() {
      if(this.$route.path === '/') {
        return true
      } else {
        return false
      }
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.title {
  font-size: 2.4rem;
  font-weight: bold;
}
</style>
