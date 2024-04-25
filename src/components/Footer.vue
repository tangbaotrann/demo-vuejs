<template>
    <footer class="footer">
        <p>Copyright &copy; 2021</p>

        <div class="links">
            <router-link to="/about">About</router-link>
            <router-link to="/vuex-store">Vuex</router-link>
        </div>
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

.links {
    display: flex;
    align-items: center;
    gap: 20px;
}
</style>