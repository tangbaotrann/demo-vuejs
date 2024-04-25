<template>
  <button
    class="button"
    :style="{ backgroundColor: bgColor }"
    :type="{ submit: submit }"
    @click="onClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    text: String,
    bgColor: String,
    submit: String,
  },
  methods: {
    onClick() {
      this.$emit("btn-clicked");
    },
  },
};
</script>

<style scoped>
.button {
  padding: 10px;
  border-radius: 6px;
  color: #fff;
  cursor: pointer;
  opacity: 0.7;
}

.button:hover {
  opacity: 1;
}
</style>
