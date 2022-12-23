<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'FilterTodos',
  methods: mapActions(['filterTodos']),
}
</script>

<style scoped>
select {
  /* margin-top: 20px; */
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #26292f;
  color: #fff;
  font-family: 'Chivo Mono', monospace;
}
</style>