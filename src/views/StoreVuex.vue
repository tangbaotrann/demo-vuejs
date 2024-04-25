<template>
    <div v-if="showAddTask"></div>

    <div v-else>
        <div>
            <h1>Store with Vuex</h1>

            <h3 :style="{ color: $store.state.textColor }">{{ $store.state.count }}</h3>

            <div class="">
                {{ $store.state.count }}
                <sup>2</sup> = {{ $store.getters.counterSquared }}
            </div>

            <Button text="Increase" bgColor="black" @btn-clicked="$store.dispatch('handleIncreaseAction')" />
            <Button text="Decrease" bgColor="black" @btn-clicked="$store.dispatch('handleDecreaseACtion')" />
        </div>

        <div class="input">
            <input type="text" v-model="textColor" >
        </div>

        <router-link to="/">Back to</router-link>
    </div>
</template>

<script>
import Button from '../components/Button.vue'

export default {
    name: "Store",
    props: {
        showAddTask: Boolean
    },
    components: {
        Button
    },
    computed: {
        textColor: {
            get() {
                return this.$store.state.textColor
            },
            set(value) {
                this.$store.dispatch('setTextColorAction', value)
            }
        }
    }
}
</script>

<style>
.input {
    margin: 10px 0;
}
</style>