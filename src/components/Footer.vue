<template>
    <footer class="footer">
        <p>Copyright &copy; 2021</p>
        <router-link to="/about">About</router-link>
    </footer>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style scoped>
.footer {
    border-top: 1px solid #000;
    margin-top: 40px;
}
</style>