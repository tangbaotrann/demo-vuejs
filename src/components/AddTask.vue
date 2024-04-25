<template>
  <form @submit="handleSubmitForm" action="" class="form">
    <input v-model="text" type="text" name="text" placeholder="Enter text..." />
    <input v-model="day" type="text" name="day" placeholder="Enter day..." />

    <div>
      <label>Reminder:</label>
      <input v-model="reminder" type="checkbox" name="reminder" />
    </div>

    <Button text="Save task" bgColor="black" type="submit" />
  </form>
</template>

<script>
import Button from "../components/Button.vue";

export default {
  name: "AddTask",
  components: {
    Button,
  },
  data() {
    return {
      text: "",
      day: "",
      reminder: false,
    };
  },
  methods: {
    handleSubmitForm(e) {
      e.preventDefault();

      if (this.text === "") {
        alert("Please enter text");
        return;
      }

      if (this.day === "") {
        alert("Please enter day");
        return;
      }

      const newTask = {
        text: this.text,
        day: this.day,
        reminder: this.reminder,
      };

      this.$emit("add-task", newTask);

      this.text = "";
      this.day = "";
      this.reminder = false;
    },
  },
};
</script>

<style>
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 40px;
}
</style>
