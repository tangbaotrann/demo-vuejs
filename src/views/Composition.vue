<template>
    <div v-if="showAddTask"></div>
    
    <div v-else>
        <h1>Composition API</h1>

        <h1>* You have {{ totalTodos }} Todos!</h1>

        <div class="form">
            <input v-model="newTodoName" type="text" placeholder="Add to do...">
            <Button text="Add to do" bgColor="black" @click="handleAddTodo"/>

            <ul v-for="todo in todos" :key="todo.id">
                <div class="todo-item">
                    <li>{{ todo.name }}</li>
                    <span class="ic-del" @click="handleDelTodo(todo.id)">X</span>
                </div>
            </ul>
        </div>
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import { ref, computed, watch } from 'vue'

export default {

    setup() {
        const newTodoName = ref('')
        const todos = ref([])
        const totalTodos = computed(() => todos.value.length)
        const swearwords = ['fart', 'butt hair', 'willy']

        // Add todo 
        const handleAddTodo = () => {
            if(newTodoName.value === "") {
                alert('Please enter name todo!')
                return
            }

            todos.value.push({
                id: todos.value.length + 1,
                name: newTodoName.value
            })

            newTodoName.value = ''
        }

        // Delete todo
        const handleDelTodo = (id) => {
            todos.value = todos.value.filter(todo => todo.id !== id)
        }

        // watch
        watch(newTodoName, (newValue) => {
            if(swearwords.includes(newValue.toLowerCase())) {
                alert('Todo existed!')
                newTodoName.value = ''
            }
        })

        return {
            newTodoName,
            todos,
            totalTodos,
            handleAddTodo,
            handleDelTodo,
        }
    },

    name: "CompositionPage",
    components: {
        Button
    },
    props: {
        showAddTask: Boolean
    }
}
</script>

<style scoped>
.form {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
}

.todo-item {
    display: flex;
    align-items: center;
    gap: 20px;
}

.ic-del {
    color: red;
    font-weight: bold;
    cursor: pointer;
}

.ic-del:hover {
    opacity: 0.6;
}
</style>