<template>
  <div>
    <div class="todos-header">
      <h3>Todos</h3>
      <FilterTodos />
    </div>
    <div class="todos">
      <div class="todo" v-for="todo in allTodos" :key="todo.id">
        {{ todo.title }}
        <img src="../assets/icon-trashcan.svg" alt="" class="trashcan" @click="deleteTodo(todo.id)">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import FilterTodos from './FilterTodos.vue';

export default {
  // eslint-disable-next-line
  name: 'Todos',
  components: { FilterTodos },
  methods: {
    ...mapActions(['fetchTodos', 'deleteTodo'])
  },
  computed: mapGetters(['allTodos']),
  created() {
    this.fetchTodos();
  }
}
</script>

<style scoped>
.todos-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.todos {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.todo {
  border: 1px solid #ccc;
  /* background: rgb(47, 52, 84); */
  /* background: #183985; */
  background: #262626;
  /* background: linear-gradient(135deg, #171930, #482653, #5c3220); */
  padding: 1rem 2rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  /* box-shadow: 0 0 2px 5px rgba(47, 52, 84, 0.2); */
}

.trashcan {
  position: absolute;
  right: 10px;
  bottom: 10px;
  width: 20px;
  filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(237deg) brightness(108%) contrast(101%);
  cursor: pointer;
}
</style>