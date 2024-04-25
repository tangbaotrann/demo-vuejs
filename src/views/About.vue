<template>
    <div v-if="showAddTask"></div>
    <div v-else>
        <h1>About page</h1>
        <router-link to="/">Back to</router-link>
    </div>
</template>

<script>
export default {
    name: 'AboutPage',
    props: {
        showAddTask: Boolean
    }
}
</script>