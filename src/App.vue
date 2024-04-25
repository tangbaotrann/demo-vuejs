<template>
  <div class="main">
    <!-- Header -->
    <Header
      title="Task Tracker"
      :showAddTask="showAddTask"
      @show-form-add-task="handleShowFormAddTask"
    />

    <!-- Router View -->
    <router-view :showAddTask="showAddTask"></router-view>

    <!-- Footer -->
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      showAddTask: false,
    };
  },
  methods: {
    handleShowFormAddTask() {
      this.showAddTask = !this.showAddTask;
    }
  }
};
</script>

<style scoped>
.main {
  max-width: 1250px;
  margin: 0 auto;
}
</style>
