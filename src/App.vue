<template>

  <div class="container">
    <h1>Todo Manager</h1>
    <AddTodo />
    <Todos />
  </div>

</template>

<script>

import Todos from './components/Todos.vue';
import AddTodo from './components/AddTodo.vue';
// import FilterTodos from './components/FilterTodos.vue';

export default {
  name: 'App',
  components: {
    Todos, AddTodo
  }
}
</script>

<style>
body {
  font-family: 'Chivo Mono', monospace;
  line-height: 1.6;
  /* background: #26292f; */
  /* background: linear-gradient(90deg, #171930, #482653, #5c3220); */
  background: #262626;
  color: #fff;
}

.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
