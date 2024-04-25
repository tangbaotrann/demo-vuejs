<template>
    <div class="">
        <h1>Options API</h1>

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

export default {
    name: "OptionsPage",
    components: {
        Button
    },
    data() {
        return {
            newTodoName: '',
            todos: [
                {
                    id: 1,
                    name: "Todo 1",
                },
                {
                    id: 2,
                    name: "Todo 2",
                },
                {
                    id: 3,
                    name: "Todo 3",
                },
            ],
            swearwords: ['fart', 'butt hair', 'willy']
        }
    },
    methods: {
        handleAddTodo() {
            if(this.newTodoName === "") {
                alert('Please enter name to do!')
                return
            }

            const newTodo = {
                id: this.todos.length + 1,
                name: this.newTodoName
            }

            this.todos.unshift(newTodo)

            this.newTodoName = ''
        },
        handleDelTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        }
    },
    computed: {
        totalTodos() {
            return this.todos.length
        }
    },
    watch: {
        newTodoName(newValue) {
            if(this.swearwords.includes(newValue.toLowerCase())) {
                alert('Todo existed!')
                this.newTodoName = ''
            }
        }
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